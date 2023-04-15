export class Products {
    _id?: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string;

    constructor(nombre: string, categoria: string, descripcion: string, precio: number, imagen: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}


