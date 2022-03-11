import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projecto: any;
  term : any;

  constructor(public dialog: MatDialog) {
    this.projecto = {
      title: '',
      image: '',
      image2: '',
      linkrepo: '',
      link: '',
      info: '',
      techs: []
    }


  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      height: '90%',
      width: '100%',
      data: {
        title: this.projecto.title,
        image: this.projecto.image,
        image2: this.projecto.image2,
        info: this.projecto.info,
        linkrepo: this.projecto.linkrepo,
        link: this.projecto.link,
        techs: this.projecto.techs
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {

  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
  styleUrls: ['./dialog-content.scss']
})
export class DialogContent implements OnInit{
  techlist: Array<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    image: string,
    image2: string,
    info: string,
    linkrepo: string,
    link: string,
    techs: Array<any>,
    alt: string})
  {
    this.techlist = [];
  }

  ngOnInit() {
    this.techlist = this.data.techs;

  }
}
