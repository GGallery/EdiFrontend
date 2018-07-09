import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'edi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public categories: any;
  public selectedCategory: number = null;
  public textSearch: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.textSearch = '';
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.selectedCategory = params.c;
        this.textSearch = params.t;
        console.log(params, 'urlParams');
      });
    this.getCategories();
  }

  public categorySelected (event: any) {
    this.selectedCategory = event.target.value;
    console.log(this.selectedCategory , 'selectedCategory');
  }
  public doSearch() {
    const params = {
      't': this.textSearch,
      'c': this.selectedCategory
    };

    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {queryParams: params});
    console.log('doSearch');

    // ottimo url
    // https://alligator.io/angular/query-parameters/
  }

  public getCategories() {
    if (!this.selectedCategory) {
      this.dataService.getCategories()
        .subscribe(
          (data) => {
            console.log(data, 'Categories');
            this.categories = data;
          }
        );
    } else {
      this.dataService.getSubCategories(this.selectedCategory)
        .subscribe(
          (data) => {
            console.log(data, 'SubCategories');
            this.categories = data;
          }
        );

    }
  }
}
