import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'search',
  pathMatch: 'full',
},{
  path: 'search',
  component: SearchComponent
},
{
  path: 'search-details',
  component: SearchDetailsComponent
},
{
  path: '**',
  component: SearchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
