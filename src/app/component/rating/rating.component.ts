import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'edi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() layout = 'topbar'; // sidebar topbar item
  @Input() currentRate = 4;
  public starClass = 'star';

  constructor() { }

  ngOnInit() {
  }

}
