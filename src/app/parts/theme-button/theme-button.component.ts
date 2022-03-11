import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent implements OnInit {
  theme: any;
  themeButton: any;

  constructor() {  }

  ngOnInit(): void {

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      this.theme = 'dark';
      console.warn(this.theme);
    } else {
      this.theme = 'light';
      console.warn("JEJE " + this.theme);
    }



    document.addEventListener('DOMContentLoaded', () => {

      if(this.theme === 'dark') {
        document.body.classList.add('dark');

      } else {
        document.body.classList.add('light');
      }

  });

    this.initThemeButton();

  }

  initThemeButton() {
    this.themeButton = document.querySelector('#themeButton');
    this.themeButton.addEventListener('click', function(e: any) {
      if(e.target.classList.contains('fa-sun-o')) {
        //Sí en el view se ve el botón con el sol, cambiar al modo oscuro
        console.log('dark');
        document.body.classList.replace('light', 'dark');
        e.target.classList.replace('fa-sun-o', 'fa-moon-o');
      } else {
         //Sí en el view se ve el botón con la luna, cambiar al modo claro
        console.log('light');
        document.body.classList.replace('dark', 'light');
        e.target.classList.replace('fa-moon-o', 'fa-sun-o');
      }
    });

  }

}
