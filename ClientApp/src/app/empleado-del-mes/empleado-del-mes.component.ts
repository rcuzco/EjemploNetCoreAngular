import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empleado-del-mes',
  templateUrl: './empleado-del-mes.component.html',
  styleUrls: ['./empleado-del-mes.component.css']
})
export class EmpleadoDelMesComponent implements OnInit
{
  @Input() datosEmpleado: any;

  constructor()
  {
    //console.log("datos del empleado - ctor", this.datosEmpleado);
  }

  ngOnInit()
  {
    //console.log("datos del empleado - init", this.datosEmpleado);
  }

}
