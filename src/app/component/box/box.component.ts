import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NguCarousel} from '@ngu/carousel';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'edi-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, AfterViewInit  {

  @Input() box: any;
  @ViewChild('box') elementView: ElementRef;
  public contents: any;
  public onlineContents: any;
  public actualBoxSize: any;
  public pages: number;
  public page = 1;
  public limit: number;

  public carouselBanner: NguCarousel;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.carosello();
    this.getBoxContents();
  }


  ngAfterViewInit() {
    this.actualBoxSize = this.elementView.nativeElement.offsetWidth;
    // console.log(this.box.id, this.elementView.nativeElement.offsetWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.actualBoxSize = this.elementView.nativeElement.offsetWidth;
    // console.log(this.box.id, this.actualBoxSize);
    this.pagination();
  }


  public pagination(page: number = 0) {
    this.limit = Math.floor(this.actualBoxSize / 200);

    const start = Math.max(0, this.limit * (page - 1));

    this.onlineContents = this.contents.slice(start, start + this.limit);
    this.pages = Math.floor(this.contents.length / this.limit);
    console.log(
      'size:' + this.actualBoxSize ,
      'limit:' + this.limit,
      'totpages:' + this.pages,
      'actualpage:' + page,
      'totcontent:' + this.contents.length,
      'start' + start
    );

  }

  public getBoxContents() {
    this.dataService.getBoxContents({box_id: this.box.id, category_id: null, content_id: null})
      .subscribe(
        (data) => {
          this.contents = data.contents;
          console.log(this.contents, 'BoxContents' + this.box.id);
          this.pagination();
        }
      );
  }

}
