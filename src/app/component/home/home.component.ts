import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'edi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  public boxesRolling: any = [];
  public boxesDynamic: any = [];
  public contents: any;
  public onlineContents: any = [];

  @ViewChild('box_content_ref') elementView: ElementRef;
  public actualBoxSize: any;

  public pages: number;
  public page = 1;
  public limit = 15 ;


  private selectedCategory: number = null;
  private textSearch: any;



  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        this.selectedCategory = params.c;
        this.textSearch = params.t;
        console.log(params, 'urlParamsinHome');

        this.getBoxesDynamic();
        this.getBoxesRolling();
        this.getContents();

      });


  }

  // POSITION
  // 1	Home page principale
  // 2	Home page categoria
  // 3	Home page sottocategoria
  // 4	Contenuto


  // TIPOLOGIA
  // 1	Chi ha visto questo ha visto anche
  // 2	Selezione statica contenuti (Corso)
  // 3	Contenuti della stessa sottocategoria
  // 4	Visualizza altri contenuti del corso


  public getBoxesRolling() {
    this.dataService.getBoxes({tipologia: null, posizione: 1, selectedCategory: this.selectedCategory})
      .subscribe(
        (data) => {
          console.log(data, 'rollingBoxes');
          this.boxesRolling = data.data;
        }
      );
  }

  public getBoxesDynamic() {
    this.dataService.getBoxes({tipologia: null, posizione: 2, selectedCategory: this.selectedCategory})
      .subscribe(
        (data) => {
          console.log(data, 'dynamicBoxes');
          this.boxesDynamic = data.data;
        }
      );
  }

  public getContents() {
    this.dataService.getContents({categoria: this.selectedCategory})
      .subscribe(
        (data) => {
          console.log(data, 'Contents');
          this.contents = data.data;
          this.pagination();
        }
      );
  }

  public pagination(page: number = 0) {
    if (this.contents.length > 0) {
      const start = Math.max(0, this.limit * (page - 1));
      this.onlineContents = this.contents.slice(start, start + this.limit);

      // Algoritmo TAPPABUCHI
      // conto gli item per riga.
      const itemsRows = Math.floor(this.actualBoxSize / 180);
      // numero di righe
      const nRow = Math.ceil(this.onlineContents.length / itemsRows);
      // elementi mancanti
      const resto = nRow * itemsRows - this.onlineContents.length;

      for (let i = 0; i < resto; i++) {
        this.onlineContents = [... this.onlineContents, {}];
      }

      this.pages = Math.ceil(this.contents.length / this.limit);
      this.page = page;
      // console.log(
      //   'itemsRows' + itemsRows,
      //   'nRow' + nRow,
      //   'resto' + resto,
      //   'size:' + this.actualBoxSize,
      //   'limit:' + this.limit,
      //   'totpages:' + this.pages,
      //   'actualpage:' + page,
      //   'totcontent:' + this.contents.length,
      //   'start' + start
      // );
    }

  }

  ngAfterViewInit() {
    this.actualBoxSize = this.elementView.nativeElement.offsetWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.actualBoxSize = this.elementView.nativeElement.offsetWidth;
    this.pagination();
  }

}
