import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  getRecipeUrl: string;
  apiBaseUrl = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com";

  constructor() {
    this.getRecipes();
   }
  
   getRecipes(): void {
     this.getRecipeUrl = this.apiBaseUrl + '/api/?i={ingridients}&q={recipe}';
     //this.getRecipeUrl = "assets/json/data.json#"
   }
}
