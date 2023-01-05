import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']

})
export class InformacionComponent implements OnInit {
  @Input () cursosHijos!:string[]
  @Output () vaciocursos = new EventEmitter<String[]>()

  // funcion output con el evento 
  Vaciarcursos() {
    this.cursosHijos = []
    this.vaciocursos.emit(this.cursosHijos)
  }

  constructor() { }


  ngOnInit(): void {
  }

}
