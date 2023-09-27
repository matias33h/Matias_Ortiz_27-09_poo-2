"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionInventario = exports.Precio = exports.Stock = exports.Venta = exports.Usuario = exports.Inventario = exports.Producto = exports.TipoVentaEnum = void 0;
// enums e interfaces como se definieron anteriormente
// enums.ts
var TipoVentaEnum;
(function (TipoVentaEnum) {
    TipoVentaEnum["PorUnidad"] = "Venta por unidad";
    TipoVentaEnum["PorCantidad"] = "Venta por cantidad";
    TipoVentaEnum["PorBolsa"] = "Venta por bolsa";
    // Otros tipos de venta
})(TipoVentaEnum || (exports.TipoVentaEnum = TipoVentaEnum = {}));
// Resto de tu código en GestionInventario.ts
var Producto = /** @class */ (function () {
    function Producto(nombre, descripcion, codigoProducto, categoria, fabricante, precio, cantidadEnStock, tiposDeVenta) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.categoria = categoria;
        this.fabricante = fabricante;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
        this.tiposDeVenta = tiposDeVenta;
    }
    return Producto;
}());
exports.Producto = Producto;
var Inventario = /** @class */ (function () {
    function Inventario(nombre, descripcion, fechaCreacion, fechaActualizacion, productos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.productos = productos;
    }
    return Inventario;
}());
exports.Inventario = Inventario;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, correoElectronico, contraseña, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correoElectronico = correoElectronico;
        this.contraseña = contraseña;
        this.rol = rol;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
var Venta = /** @class */ (function () {
    function Venta(fecha, cliente, productos, cantidad, precioTotal) {
        this.fecha = fecha;
        this.cliente = cliente;
        this.productos = productos;
        this.cantidad = cantidad;
        this.precioTotal = precioTotal;
    }
    return Venta;
}());
exports.Venta = Venta;
var Stock = /** @class */ (function () {
    function Stock(producto, cantidad, fechaActualizacion) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.fechaActualizacion = fechaActualizacion;
    }
    return Stock;
}());
exports.Stock = Stock;
var Precio = /** @class */ (function () {
    function Precio(producto, precioUnitario, descuentos, fechaActualizacion) {
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.descuentos = descuentos;
        this.fechaActualizacion = fechaActualizacion;
    }
    return Precio;
}());
exports.Precio = Precio;
// Controlador principal
var GestionInventario = /** @class */ (function () {
    function GestionInventario() {
        this.inventario = new Inventario("Inventario Principal", "Inventario de productos electrónicos", new Date(), new Date(), []);
    }
    GestionInventario.prototype.agregarProducto = function (producto) {
        this.inventario.productos.push(producto);
    };
    GestionInventario.prototype.realizarVenta = function (venta) {
        // Implementar la lógica para realizar una venta
    };
    GestionInventario.prototype.actualizarStock = function (stock, cantidadVendida) {
        // Implementar la lógica para actualizar el stock
    };
    // Método público para obtener el inventario
    GestionInventario.prototype.obtenerInventario = function () {
        return this.inventario;
    };
    // Método público para obtener un producto por su código
    GestionInventario.prototype.obtenerProductoPorCodigo = function (codigo) {
        return this.inventario.productos.find(function (producto) { return producto.codigoProducto === codigo; });
    };
    return GestionInventario;
}());
exports.GestionInventario = GestionInventario;
