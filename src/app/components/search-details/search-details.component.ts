import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  recipeData: any;
  queryParams: any;
  isLoading = false;
  isError = false;
  noData = true;

  constructor(private router: ActivatedRoute, private service: SearchService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const params = this.getQueryParams();
    this.service.getRecipeData(params).subscribe(data => {
      if (data && Object.keys(data) && Object.keys(data).length && data.results.length) {
        this.isLoading = false;
        this.isError = false;
        this.noData = false;
        this.recipeData = data.results
      } else {
        this.isLoading = false;
        this.noData = true;
      }
    }, err => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  getQueryParams(): any {
    this.queryParams;
    this.router.queryParams.subscribe(data => {
      this.queryParams =  data;
    })
    return this.queryParams;
  }
}
