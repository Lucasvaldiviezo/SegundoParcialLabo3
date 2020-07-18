namespace Vehiculos
{
    export class Auto extends Vehiculo
    {
        public cantidadPuertas:number | undefined = 4;

        constructor(id:number,marca:string,modelo:string,precio:number,cantidadPuertas?:number)
        {
            super(id,marca,modelo,precio);
            this.cantidadPuertas = cantidadPuertas;
        }

        public getId():number
        {
            return this.id;
        }
        public setId(id:number)
        {
            this.id = id;
        }

        public getMarca():string
        {
            return this.marca;
        }
        public setMarca(marca:string)
        {
            this.marca = marca;
        }

        public getModelo():string
        {
            return this.modelo;
        }
        public setModelo(modelo:string)
        {
            this.modelo = modelo;
        }

        public getPrecio():number
        {
            return this.precio;
        }
        public setPrecio(precio:number)
        {
            this.precio = precio;
        }
    }
}