import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  langs: string[] = [];

  lang = this.getUserLang();
  constructor(
    private translate: TranslateService
    ) {
    translate.setDefaultLang('en');
    translate.use(this.lang);
    this.langs = translate.getLangs();
    translate.addLangs(['es', 'en']);
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
