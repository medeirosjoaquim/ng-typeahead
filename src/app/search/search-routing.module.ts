import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSearchComponent } from './app-search/app-search.component';

const routes: Routes = [
  {path: '', component: AppSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
