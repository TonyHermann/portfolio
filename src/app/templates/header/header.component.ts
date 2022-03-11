import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = this.getUserLang();

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    this.translate.use(lang)
  }

  getUserLang() {
    const userlang = navigator.language;
    let lang = '';
    if(userlang.includes('es')) {
      lang = 'es';
    } else if(userlang.includes('en')) {
      lang = 'en';
    } else {
      lang = 'en';
    }

    return lang
  }
}
