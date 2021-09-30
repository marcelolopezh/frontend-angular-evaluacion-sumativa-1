import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  carro:Producto[]=[]
  total:number =0;
  busqueda:string="";

  constructor(public productoService:ProductoService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  anadirCarro(producto:Producto|any){
    this.carro.push(producto);
    this.productoService.guardarCarro(this.carro)
  }

  getTotal(){
    this.total=0;
    this.carro.forEach(element => {
      this.total = this.total+ element.precio;
    });  
    return this.total
  }

  eliminarProducto(producto:Producto,index:number){
    this.carro.splice(index,1);
  }

  confirmarCompra(){
    this.productoService.guardarCarro(this.carro);
    this.router.navigateByUrl("/envio")
  }

 
}
 

