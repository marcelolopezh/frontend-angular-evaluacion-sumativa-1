export interface Categoria {

  nombre?: string;
  descripcion?: string;
  img?:string;
}

export interface RootObject{
  categoria?:Categoria[];
}
