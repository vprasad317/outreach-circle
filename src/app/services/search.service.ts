import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlsService } from './api-urls.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private url: ApiUrlsService, private api: ApiService) { }
  getRecipeData(params): Observable<any> {
    const url = this.url.getRecipeUrl
    .replace(/{ingridients}/g , (params && params.ingridients) ? params.ingridients : '')
    .replace(/{recipe}/g, (params && params.recipe) ? params.recipe : '');
    return this.api.get(url);
  }
}
