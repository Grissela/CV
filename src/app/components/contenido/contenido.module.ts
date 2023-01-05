import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InformacionComponent } from './informacion/informacion.component';



@NgModule({
  declarations: [
    PerfilComponent,
    EstudiosComponent,
    ContactoComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    PerfilComponent,
    EstudiosComponent,
    ContactoComponent
  ]
})
export class ContenidoModule { }
