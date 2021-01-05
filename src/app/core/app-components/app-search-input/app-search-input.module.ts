import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchInputComponent } from './app-search-input/app-search-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  declarations: [AppSearchInputComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule
  ],
  exports: [
    AppSearchInputComponent
  ]
})
export class AppSearchInputModule { }
