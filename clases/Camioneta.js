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
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(id, marca, modelo, precio, cuatroXcuatro) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.cuatroXcuatro = cuatroXcuatro;
            return _this;
        }
        Camioneta.prototype.getId = function () {
            return this.id;
        };
        Camioneta.prototype.setId = function (id) {
            this.id = id;
        };
        Camioneta.prototype.getMarca = function () {
            return this.marca;
        };
        Camioneta.prototype.setMarca = function (marca) {
            this.marca = marca;
        };
        Camioneta.prototype.getModelo = function () {
            return this.modelo;
        };
        Camioneta.prototype.setModelo = function (modelo) {
            this.modelo = modelo;
        };
        Camioneta.prototype.getPrecio = function () {
            return this.precio;
        };
        Camioneta.prototype.setPrecio = function (precio) {
            this.precio = precio;
        };
        return Camioneta;
    }(Vehiculos.Vehiculo));
    Vehiculos.Camioneta = Camioneta;
})(Vehiculos || (Vehiculos = {}));
