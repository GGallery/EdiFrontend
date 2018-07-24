import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'edi-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
