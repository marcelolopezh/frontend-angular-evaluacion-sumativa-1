export interface Pago {
    tipo_tarjeta:string;
    nombre_cliente:string;
    numero_tarjeta:number;
    codigo_seguridad:number;
    mes_expiracion:number;
    anio_expiracion:number
}
