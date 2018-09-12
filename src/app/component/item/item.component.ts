import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'edi-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() content: any;
  // public content: any;
  public hidden = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    // if (!this.content_id) {
    //   this.hidden = true;
    // } else {
    //   this.getContent();
    // }
  }

  // public getContent() {
  //   if (this.dataService.content[this.content_id]) {
  //     this.content = this.dataService.content[this.content_id];
  //   } else {
  //     this.dataService.getContent(this.content_id)
  //       .subscribe(
  //         (data) => {
  //           this.content = data;
  //           this.dataService.content[this.content_id] = data;
  //         }
  //       );
  //   }
  // }

}
