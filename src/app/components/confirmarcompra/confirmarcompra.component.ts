import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-confirmarcompra',
  templateUrl: './confirmarcompra.component.html',
  styleUrls: ['./confirmarcompra.component.css']
})
export class ConfirmarcompraComponent implements OnInit {
  total:number = 0;
  pagoRealizado:boolean = false;
  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
  }

  getTotal(){
    this.total=0;
    this.productoService.carro.forEach(element => {
      this.total = this.total+ element.precio;
    });  
    return this.total
  }

}
