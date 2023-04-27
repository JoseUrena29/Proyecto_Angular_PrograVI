export class Products {
    _id?: string;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string;
    video?: string;

    constructor(nombre: string, categoria: string, descripcion: string, precio: number, imagen: string, video?: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.video = video;
    }
}