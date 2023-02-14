import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePgComponent } from './home-pg/home-pg.component';

const routes: Routes = [
  {path:'',component:HomePgComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'about-pg',component:AboutPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
