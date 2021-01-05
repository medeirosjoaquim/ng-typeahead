import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AppSearchComponent } from './app-search/app-search.component';
import { SharedModule } from '../shared/shared.module';
import { AppHeaderModule } from '../core/app-components/app-header/app-header.module';
import { AppGridModule } from '../core/app-components/app-grid/app-grid.module';

@NgModule({
  declarations: [AppSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    AppHeaderModule,
    AppGridModule
  ]
})

export class SearchModule { }
