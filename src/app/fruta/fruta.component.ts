import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: 'fruta.component.html'
})
export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string>;
    
    constructor() {
        this.nombre = "Andres Giraldo";
        this.edad = 27;
        this.mayorDeEdad = true;
        this.trabajos = ['Carpintero','Fontanero','Pintor'];

    }

    ngOnInit() {
        this.holaMundo(this.nombre);

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            var uno = 3;
            var dos = 88;

            console.log("DENTRO DEL IF "+uno);
        }

        console.log('FUERA DEL IF '+uno);
    }

    holaMundo(nombre) {
        alert('hola mundo! '+nombre);
    }
}