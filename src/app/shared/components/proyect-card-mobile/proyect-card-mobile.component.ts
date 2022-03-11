import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyect-card-mobile',
  templateUrl: './proyect-card-mobile.component.html',
  styleUrls: ['./proyect-card-mobile.component.scss']
})
export class ProyectCardMobileComponent implements OnInit {
  @Input() projecto: any;
  constructor() {
    this.projecto = {
      title: '',
      image: '',
      image2: '',
      linkrepo: '',
      link: '',
      info: '',
      techs: [],
      alt: ''
    }
   }

  ngOnInit(): void {
  }

}
