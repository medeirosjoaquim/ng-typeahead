import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './app-empty-state.component.html',
  styleUrls: ['./app-empty-state.component.scss']
})
export class AppEmptyStateComponent implements OnInit {
  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 50);
  }

}
