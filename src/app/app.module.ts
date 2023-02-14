import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaeComponent } from './navbae/navbae.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomePgComponent } from './home-pg/home-pg.component';
import { AboutPgComponent } from './about-pg/about-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbaeComponent,
    GalleryComponent,
    ContactComponent,
    HomePgComponent,
    AboutPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
