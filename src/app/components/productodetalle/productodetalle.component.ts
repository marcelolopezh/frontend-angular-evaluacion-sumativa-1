import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-productodetalle',
  templateUrl: './productodetalle.component.html',
  styleUrls: ['./productodetalle.component.css']
})
export class ProductodetalleComponent implements OnInit {
  id: number|any=null;
  producto:Producto|null=null;
  constructor(private route:ActivatedRoute, public productoService:ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('productoId')
    console.log(this.id)
  }

}
