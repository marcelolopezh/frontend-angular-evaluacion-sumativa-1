export interface Producto {
    id?: number;
    nombre: string;
    precio: number;
    img?:string;
    cantidad:number;
}

export interface RootObject{
    productos?:Producto[];
}
