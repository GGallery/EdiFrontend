import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'edi-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
