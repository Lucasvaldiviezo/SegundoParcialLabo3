var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculos;
(function (Vehiculos) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(id, marca, modelo, precio, cantidadPuertas) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.cantidadPuertas = 4;
            _this.cantidadPuertas = cantidadPuertas;
            return _this;
        }
        Auto.prototype.getId = function () {
            return this.id;
        };
        Auto.prototype.setId = function (id) {
            this.id = id;
        };
        Auto.prototype.getMarca = function () {
            return this.marca;
        };
        Auto.prototype.setMarca = function (marca) {
            this.marca = marca;
        };
        Auto.prototype.getModelo = function () {
            return this.modelo;
        };
        Auto.prototype.setModelo = function (modelo) {
            this.modelo = modelo;
        };
        Auto.prototype.getPrecio = function () {
            return this.precio;
        };
        Auto.prototype.setPrecio = function (precio) {
            this.precio = precio;
        };
        return Auto;
    }(Vehiculos.Vehiculo));
    Vehiculos.Auto = Auto;
})(Vehiculos || (Vehiculos = {}));
