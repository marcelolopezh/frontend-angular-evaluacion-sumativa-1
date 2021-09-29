import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categorias:Categoria[] = [];
  url:string="assets/data/categorias.json";
  constructor(private http:HttpClient) {
    console.log("Constructor CategoriaService")
    this.cargarCategorias()
   }

   public cargarCategorias(){
     this.http.get(this.url).subscribe((response:Categoria|any)=>{
        this.categorias=response['categorias']
     })
    }
  }
