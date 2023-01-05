import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContenidoModule } from '../contenido/contenido.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContenidoModule

  ],
  exports: [
    HomeComponent
  ],
})
export class PageModule { }
