import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'edi-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, AfterViewInit  {

  @Input() box: any;
  @ViewChild('box_ref') elementView: ElementRef;
  public contents: any;
  public onlineContents: any;
  public actualBoxSize: any;
  public pages: number;
  public page = 1;
  public limit: number;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
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
    this.pages = Math.ceil(this.contents.length / this.limit);
    this.page = page;
    console.log(
      'size:' + this.actualBoxSize ,
      'limit:' + this.limit,
      'totpages:' + this.pages,
      'actualpage:' + page,
      'totcontent:' + this.contents.length,
      'start' + start
    );

  }

  public prev() {
    console.log('prev' , this.page, this.pages);
    if (this.page > 1) {
      this.pagination(this.page - 1);
    }
  }

  public next() {
    console.log('next', this.page, this.pages);
    if (this.page < this.pages) {
      this.pagination(this.page + 1);
    }
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
