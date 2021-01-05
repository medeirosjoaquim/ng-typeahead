import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
}
