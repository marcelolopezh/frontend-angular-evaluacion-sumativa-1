import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
/* import { ProductoService } from 'src/app/services/producto.service'; */

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  fecha1: number=new Date().getTime();
  fecha3: string=formatDate(new Date(), 'dd/MM/yyyy', 'en');
  fecha4: string = Date.now().toString();
  Mes: number= new Date().getMonth() + 1;
  fecha:Date | null=null;
  contador:number=0;
  Dia:number|null = null;
  nuevoDia:string = '';
  dias:string[] = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
  eliminado:null|string|undefined=null;

  email:string|null=null
  password:string|null=null

  categoria:Categoria={}

  constructor(public categoriaService:CategoriaService) {
    
  }



  //set y get
  get mes(): number {
    return this.Mes
  }

  get getContador():number{
    return this.contador
  }

  get getDia():number|null{
    return this.Dia;
  }

  //metodos y funciones (logica de negocio)
  getFecha(){
    this.fecha = new Date();
    this.Dia = this.fecha.getDay();
  }
  sumarContador(){
    this.contador = this.contador+1;
  }
  restarContador(){
    this.contador = this.contador-1;
  }
  eliminarDia(){
    this.eliminado = this.dias.pop();
  }
  addDia(dianuevo:string){
    if(dianuevo!='') this.dias.push(dianuevo);
  }

  insertar():void{
    console.log("metodo insertar")
    console.log(this.email, this.password)
  }

  
  insertar2(event:any):void{
    console.log("metodo insertar2")
    event.preventDefault();
    console.log(event)
  }

  
  
  ngOnInit(): void {
    
  }

}
