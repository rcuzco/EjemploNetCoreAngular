import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit
{  
  titulo = "Empleado del mes";
  empleadoMes = "";
  empleadosMes =
    [
      { nombre: "Miguel", edad: "30" },
      { nombre: "Rony", edad: "35" },
      { nombre: "Julia", edad: "30" },
      { nombre: "Lucia", edad: "25" },
      { nombre: "Hugo", edad: "15" },
      { nombre: "Paco", edad: "16" },
      { nombre: "Luis", edad: "17" }
    ];


  constructor()
  {
    console.log("constructor");
  }

  ngOnInit()
  {
    console.log("init!");
    this.empleadoMes = "Miguel";
  }

  actualizarNombre()
  {
    this.empleadoMes = "Rony";
  }

}
