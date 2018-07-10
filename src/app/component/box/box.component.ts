import {Component, Input, OnInit} from '@angular/core';
import {NguCarousel, NguCarouselStore} from '@ngu/carousel';

@Component({
  selector: 'edi-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() box: any;

  public carouselBanner: NguCarousel;

  constructor() { }

  ngOnInit() {
    console.log(this.box, 'log all\'interno del box');
    this.carosello();
  }

  public carosello() {

    this.carouselBanner = {
      grid: {xs: 1, sm: this.box.max_elementi, md: this.box.max_elementi, lg: this.box.max_elementi, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: inerith;
            width: 100%;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: grey;
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: black;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

  /* It will be triggered on every slide*/
  public onmoveFn(data: NguCarouselStore) {
    console.log(data);
  }

  public boxContents(){

  }

}
