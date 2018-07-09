import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'edi-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() box: any;

  constructor() { }

  ngOnInit() {
    console.log(this.box, 'log all\'interno del box');
  }

}
