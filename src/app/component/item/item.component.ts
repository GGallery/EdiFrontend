import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'edi-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() content_id: number;
  public content: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getContent();
  }

  public getContent() {
    this.dataService.getContent(this.content_id)
      .subscribe(
        (data) => {
          this.content = data;
          console.log(this.content, 'Contents' + this.content);
        }
      );
  }

}
