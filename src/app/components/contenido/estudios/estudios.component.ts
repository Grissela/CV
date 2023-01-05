import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent{


  cursos!:string[];
  
  // mi metodo
  agregar(){
    this.cursos=[
      'Base de datos',
      'Diseño gráfico',
      'Ensamblaje y mantenimiento',
      'Redes'
    ];
      

  }

}
