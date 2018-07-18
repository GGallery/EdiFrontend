import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NguCarousel, NguCarouselStore} from '@ngu/carousel';

@Component({
  selector: 'edi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public boxesRolling: any;
  public boxesDynamic: any;
  public contents: any;

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

        this.contents = [];
        this.boxesDynamic = [];
        this.boxesRolling = [];

        this.getBoxesRolling();
        this.getBoxesDynamic();
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
    // this.dataService.getBoxes({tipologia: '1', posizione: '1', selectedCategory: this.selectedCategory})
    //   .subscribe(
    //     (data) => {
    //       console.log(data, 'rollingBoxes');
    //       this.boxesRolling = data.data;
    //     }
    //   );
  }


  public getBoxesDynamic() {
    this.dataService.getBoxes({tipologia: null, posizione: '1', selectedCategory: this.selectedCategory})
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
        }
      );
  }


}
