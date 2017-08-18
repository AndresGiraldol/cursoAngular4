import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component ({
    selector:'empleado-tag',
    templateUrl:'empleado.component.html'
})
export class EmpleadoComponent {
    public titulo = 'Componente Empleados';
    
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor() {
        this.empleado = new Empleado('Andres Giraldo',27, 'Desarrollado',true);
        this.trabajadores = [
            new Empleado('Jhon Doe',27, 'Cocinera',false),
            new Empleado('Andres Giraldo',27, 'Desarrollado',true),
            new Empleado('Victor Robles',27, 'Panadero',true),
        ];

        this.trabajador_externo = true;
        this.color = "blue";
        this.color_seleccionado = "#CCC";
    }

    ngOnInit() {
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }

    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }
}