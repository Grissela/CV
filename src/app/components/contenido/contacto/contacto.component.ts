import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public Contact!: FormGroup;
  nombres!:string;
  correo!:string;
  mensaje!:string;
  valido="Todos los datos son validos";
  error="El mensaje no puede quedar vacio";
  resultado!:string;
  
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.Contact = this.formBuilder.group({
      firstname:['', 
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      message:['', 
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      ]
    })
    }
    send():any{
      if(this.Contact.valid)
      this.resultado="Todos los datos son validos";
      else
      this.resultado="Hay datos invalidos en el formulario";
  }
}





