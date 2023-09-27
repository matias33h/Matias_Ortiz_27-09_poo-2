"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GestionInventario_1 = require("./GestionInventario");
document.addEventListener("DOMContentLoaded", function () {
    var nombreProductoInput = document.getElementById("nombreProducto");
    var precioProductoInput = document.getElementById("precioProducto");
    var cantidadProductoInput = document.getElementById("cantidadProducto");
    var agregarProductoButton = document.getElementById("agregarProductoButton");
    var productoVentaSelect = document.getElementById("productoVenta");
    var cantidadVentaInput = document.getElementById("cantidadVenta");
    var realizarVentaButton = document.getElementById("realizarVentaButton");
    var productInfoDiv = document.querySelector(".product-info");
    var productListUl = document.getElementById("productList");
    // Crea una instancia de la clase GestionInventario
    var gestionInventario = new GestionInventario_1.GestionInventario();
    agregarProductoButton === null || agregarProductoButton === void 0 ? void 0 : agregarProductoButton.addEventListener("click", function () {
        var nombre = (nombreProductoInput === null || nombreProductoInput === void 0 ? void 0 : nombreProductoInput.value) || "";
        var precio = parseFloat((precioProductoInput === null || precioProductoInput === void 0 ? void 0 : precioProductoInput.value) || "");
        var cantidad = parseInt((cantidadProductoInput === null || cantidadProductoInput === void 0 ? void 0 : cantidadProductoInput.value) || "0", 10);
        if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
            var producto = new GestionInventario_1.Producto(nombre, "", "P" + (gestionInventario.obtenerInventario().productos.length + 1), "", "", precio, cantidad, [GestionInventario_1.TipoVentaEnum.PorUnidad]);
            gestionInventario.agregarProducto(producto);
            cargarProductosEnSelect();
            nombreProductoInput.value = "";
            precioProductoInput.value = "";
            cantidadProductoInput.value = "";
        }
    });
    productoVentaSelect === null || productoVentaSelect === void 0 ? void 0 : productoVentaSelect.addEventListener("change", function () {
        var codigoProductoSeleccionado = (productoVentaSelect === null || productoVentaSelect === void 0 ? void 0 : productoVentaSelect.value) || "";
        mostrarInfoProductoSeleccionado(codigoProductoSeleccionado);
    });
    // Agrega aquí la lógica para cargar dinámicamente los productos en el select de ventas
    function cargarProductosEnSelect() {
        if (productoVentaSelect) {
            productoVentaSelect.innerHTML = "";
            gestionInventario.obtenerInventario().productos.forEach(function (producto) {
                var option = document.createElement("option");
                option.value = producto.codigoProducto;
                option.textContent = producto.nombre;
                if (productoVentaSelect) {
                    productoVentaSelect.appendChild(option);
                }
            });
        }
    }
    // Agrega aquí la lógica para mostrar la información detallada del producto seleccionado
    function mostrarInfoProductoSeleccionado(codigoProducto) {
        var producto = gestionInventario.obtenerProductoPorCodigo(codigoProducto);
        if (productInfoDiv) {
            if (producto) {
                productInfoDiv.innerHTML = "\n          <h4>Informaci\u00F3n del Producto:</h4>\n          <p>Nombre: ".concat(producto.nombre, "</p>\n          <p>Descripci\u00F3n: ").concat(producto.descripcion, "</p>\n          <p>Precio: $").concat(producto.precio, "</p>\n          <p>Cantidad en Stock: ").concat(producto.cantidadEnStock, "</p>\n        ");
            }
            else {
                productInfoDiv.innerHTML = "";
            }
        }
    }
    // Aquí debes cargar los productos en el select de ventas al cargar la página
    cargarProductosEnSelect();
});
