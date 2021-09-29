import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/producto.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    productos:Producto[] = [];
    producto:Producto|any=null;
    carro:Producto[]=[]
    url:string="assets/data/productos.json"
    constructor(private http:HttpClient) { 
        console.log("ProductoService")
        this.cargarProductos();
    }
    cargarProductos() {
        this.http.get(this.url).subscribe((response:Producto|any) => {
            this.productos = response['productos'];

        })
        return this.productos
    }
    guardarCarro(carro: Producto[]) {
        this.carro = carro
    }
    getProductId(id: number | null) {
        this.productos.forEach(element => {
            if(element.id == id){
                this.producto=element;
            }
        });
        return this.producto
      }
}