import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CargarScriptsService } from './cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SecondaryNavbarComponent } from './parts/secondary-navbar/secondary-navbar.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SkillContainerComponent } from './shared/components/skill-container/skill-container.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { DialogContent } from './shared/components/project-card/project-card.component';

import { AboutMeMainComponent } from './parts/about-me-main/about-me-main.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ThemeButtonComponent } from './parts/theme-button/theme-button.component';
import { MobileNavbarComponent } from './parts/mobile-navbar/mobile-navbar.component';
import { ProyectCardMobileComponent } from './shared/components/proyect-card-mobile/proyect-card-mobile.component';
import { ProjectsMobileComponent } from './parts/projects-mobile/projects-mobile.component';
import { MobileTopNavbarComponent } from './parts/mobile-top-navbar/mobile-top-navbar.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    SecondaryNavbarComponent,
    AboutMeComponent,
    AboutMeMainComponent,
    SkillsComponent,
    SkillContainerComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent,
    DialogContent,
    ThemeButtonComponent,
    MobileNavbarComponent,
    ProyectCardMobileComponent,
    ProjectsMobileComponent,
    MobileTopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  exports: [
    SkillContainerComponent
  ]
})
export class AppModule { }
