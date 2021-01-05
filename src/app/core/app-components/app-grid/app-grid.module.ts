import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGridComponent } from './app-grid/app-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppGroupCardModule } from '../app-group-card/app-group-card.module';
import { AppEmptyStateComponent } from './app-empty-state/app-empty-state.component';



@NgModule({
  declarations: [AppGridComponent, AppEmptyStateComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppGroupCardModule
  ],
  exports: [
    AppGridComponent
  ]
})
export class AppGridModule { }
