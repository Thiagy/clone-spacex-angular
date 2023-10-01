import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Falcon9Component } from './components/falcon9/falcon9.component';
import { HumanspaceflightComponent } from './components/humanspaceflight/humanspaceflight.component';
import { DragonComponent } from './components/dragon/dragon.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionhomepageComponent } from './components/sectionhomepage/sectionhomepage.component';
import { FooterhomepageComponent } from './components/footerhomepage/footerhomepage.component';
import { SectionmainComponent } from './components/sectionmain/sectionmain.component';
import { SectionlauncheslandingsmassComponent } from './components/sectionlauncheslandingsmass/sectionlauncheslandingsmass.component';
import { Slide1Component } from './components/slide1/slide1.component';
import { SectionvideoComponent } from './components/sectionvideo/sectionvideo.component';
import { SectionmedlinComponent } from './components/sectionmedlin/sectionmedlin.component';
import { FooterpagesecondaryComponent } from './components/footerpagesecondary/footerpagesecondary.component';
import { Sectionslide1Component } from './components/sectionslide1/sectionslide1.component';
import { Slide2Component } from './components/slide2/slide2.component';
import { Slide3Component } from './components/slide3/slide3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    Falcon9Component,
    HumanspaceflightComponent,
    DragonComponent,
    MenuComponent,
    SectionhomepageComponent,
    FooterhomepageComponent,
    SectionmainComponent,
    SectionlauncheslandingsmassComponent,
    Slide1Component,
    SectionvideoComponent,
    SectionmedlinComponent,
    FooterpagesecondaryComponent,
    Sectionslide1Component,
    Slide2Component,
    Slide3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
