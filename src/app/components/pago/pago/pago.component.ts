import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Envio } from 'src/app/interfaces/envio.interface';
import { Pago } from '../../../interfaces/pago.interface';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  @Input() carro:any;
  @Input() envioIsCorrect:boolean|undefined;
  @Input() detalleEnvio:Envio|any;

  @Output()
  propagar = new EventEmitter<Pago>();

  errors:string[]=[];
  tipo_tarjeta:string='';
  nombre_cliente:string='';
  numero_tarjeta:number|any;
  codigo_seguridad:number|any;
  mes_expiracion:number|any;
  anio_expiracion:number|any;


  pago:Pago={
    tipo_tarjeta:'',
    nombre_cliente:'',
    numero_tarjeta:0, 
    codigo_seguridad:0,
    mes_expiracion:0,
    anio_expiracion:0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  confirmarPago(){
    this.errors=[]
    if(this.tipo_tarjeta.toLowerCase()=="credito" || this.tipo_tarjeta.toLowerCase()=="debito"){
      this.pago.tipo_tarjeta=this.tipo_tarjeta
    }else{
      this.errors.push("Tipo de Tarjeta Inválido")
    }

    if(this.nombre_cliente.length>8){
      this.pago.nombre_cliente=this.nombre_cliente
    }else{
      this.errors.push("Nombre Cliente Inválido")
    }

    if(this.numero_tarjeta!=0 && this.numero_tarjeta){
      if(this.numero_tarjeta.toString().length==16){
        this.pago.numero_tarjeta=this.numero_tarjeta
      }else{
        this.errors.push("Número Tarjeta Inválido")
      }
    }else{
      this.errors.push("Número Tarjeta Inválido")
    }

    if(this.codigo_seguridad!=0 && this.codigo_seguridad){
      if(this.codigo_seguridad.toString().length==3){
        this.pago.codigo_seguridad=this.codigo_seguridad
      }else{
        this.errors.push("Codigo de Seguridad Inválido")
      }
    }else{
      this.errors.push("Codigo de Seguridad Inválido")
    }

    if(this.mes_expiracion!=0 && this.mes_expiracion){
      if(this.mes_expiracion>0 && this.mes_expiracion<13){
        this.pago.codigo_seguridad=this.codigo_seguridad
      }else{
        this.errors.push("Mes Expiración Inválido")
      }
    }else{
      this.errors.push("Mes Expiración Inválido")
    }

    if(this.anio_expiracion!=0 && this.anio_expiracion){
      if(this.anio_expiracion>1999 && this.mes_expiracion<2030){
        this.pago.anio_expiracion=this.anio_expiracion
      }else{
        this.errors.push("Año Expiración Inválido")
      }
    }else{
      this.errors.push("Año Expiración Inválido")
    }

    if(this.errors.length==0){
      this.propagar.emit(this.pago);
    }
  }

}
