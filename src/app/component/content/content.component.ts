import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'edi-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public content: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.route.params.subscribe(params => {
      const content_id = params['id'];

      this.dataService.getContent(content_id)
        .subscribe(
          (data) => {
            this.content = data;
          }
        );
    });
  }

  ngOnInit() {
  }



}
