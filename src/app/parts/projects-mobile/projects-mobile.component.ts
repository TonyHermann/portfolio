import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent implements OnInit {

  items : any
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      title: "Bienes Raices MVC",
      image: "/portfolio/assets/bienes-raices-light-tiny.webp",
      image2: "/portfolio/assets/bienes-raices-dark.webp",
      linkrepo: "https://github.com/TonyHermann/br",
      link: "http://bienesraices-mvc-t.herokuapp.com/",
      info: `Este es un proyecto que hice en un curso de Udemy con Juan Pablo De la torre. Es un crud con PHP vanilla, sin ningún framework.
      Es 100% funcional y cuenta con un sistema de inicio de sesión, verificación de sesión y un panel de administrador para manejar las propiedades, vendedores y entradas del blog.`,
      techs: ['php', 'scss', 'js', 'gulp', 'cypress'],
      alt: 'Bienes raices project screenshot'
     },
     {
      title: "Todo App",
      image: "/portfolio/assets/todoappjs-fementor-screenshot.webp",
      image2: "/portfolio/assets/todoappjs-fementor-screenshot.webp",
      linkrepo: "https://github.com/TonyHermann/todoappJS",
      link: "https://tonyhermann.github.io/todoappJS/index.html",
      info: `Esta es una app que desarrollé como reto de la página Front End Mentor hace unos meses. Planeo re-hacer la web con un algún framework de JS.
      Por otro lado, la aplicación es funcional y soporta pantallas de dispositivos moviles.`,
      techs: ['js', 'html', 'scss'],
      alt: 'Todo app project screenshot'
     },
     {
      title: "Countries Api App",
      image: "/portfolio/assets/countriesapiapp.webp",
      image2: "/portfolio/assets/countriesapiapp.webp",
      linkrepo: "https://github.com/TonyHermann/CountriesApiApp",
      link: "https://tonyhermann.github.io/CountriesApiApp/",
      info: `Reto de Front End Mentor, utilizando una API desde JS vanilla para listar todos los paises del mundo (disponibles en la api) con información de ellos.`,
      techs: ['js', 'html', 'scss', 'rest countries api'],
      alt: 'Countries Api App project screenshot'
     },
     {
      title: "Adify",
      image: "/portfolio/assets/adify-screenshot.webp",
      image2: "/portfolio/assets/adify-screenshot.webp",
      linkrepo: "https://github.com/TonyHermann/adify",
      link: "https://tonyhermann.github.io/adify/",
      info: `
      Esta es una adaptación de el proyecto original que hice para un proyecto escolar. Cuenta con un reproductor funcional, más no tiene ningún archivo .mp3 para reproducir por copyright.
      Está hecho solo con JS vanilla, html5 y css3.`,
      techs: ['js', 'html', 'css'],
      alt: 'Adify project screenshot'
     }
    ]
  }

}
