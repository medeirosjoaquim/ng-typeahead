import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSearchInputModule } from '../app-search-input/app-search-input.module';



@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    AppSearchInputModule
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule { }
