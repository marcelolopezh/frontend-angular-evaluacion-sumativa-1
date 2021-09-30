import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { Envio } from '../../../interfaces/envio.interface';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  errors:string[]=[]
  envioIsCorrect:boolean=false;
  pais:string='';
  region:string='';
  ciudad:string='';
  calle:string='';
  codigo_postal:number|any;
  envio:Envio={
    pais:'',
    region:'', 
    ciudad:'',
    calle:'',
    codigo_postal:0,
  };
  pago:Pago|any=null;
  detallePago:boolean=false;
  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
  }
  
  confirmarDatosEnvio(){
    this.errors=[]

    if(this.pais.length>=4){
      this.envio.pais=this.pais;
    }else{
      this.errors.push("País Requerido o No válido")
    }

    if(this.region.length>=4){
      this.envio.region=this.region;
    }else{
      this.errors.push("Región Requerida o No válida")
    }

    if(this.ciudad.length>=4){
      this.envio.ciudad=this.ciudad;
    }else{
      this.errors.push("Ciudad Requerida o No válida")
    }

    if(this.calle.length>=4){
      this.envio.calle=this.calle;
    }else{
      this.errors.push("Calle Requerida o No válida")
    }

    if(this.codigo_postal!=0 && this.codigo_postal){
      if(this.codigo_postal.toString().length>=7){
        this.envio.codigo_postal=this.codigo_postal;
      }else{
        this.errors.push("Código Postal No Válido")
      }
    }else{
      this.errors.push("Código Postal No Válido")
    }

    if(this.errors.length==0){
      this.envioIsCorrect=true;
    }
  }

  getPago(pago:Pago){
    this.detallePago=true;
    this.pago = pago
  }
}
