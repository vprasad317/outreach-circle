import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  recipeCtrl = new FormControl('', [Validators.required]);
  ingridientCtrl = new FormControl();

  constructor(private service: SearchService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getRecipe(): void {
    this.router.navigate(['search-details'],
    {queryParams: {
      recipe: this.recipeCtrl.value,
      ingridients: this.ingridientCtrl.value,}})
  }
}
