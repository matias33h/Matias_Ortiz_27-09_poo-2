import { TipoVentaEnum, Producto, Inventario, GestionInventario } from './GestionInventario';

document.addEventListener("DOMContentLoaded", () => {
  const nombreProductoInput: HTMLInputElement | null = document.getElementById("nombreProducto") as HTMLInputElement | null;
  const precioProductoInput: HTMLInputElement | null = document.getElementById("precioProducto") as HTMLInputElement | null;
  const cantidadProductoInput: HTMLInputElement | null = document.getElementById("cantidadProducto") as HTMLInputElement | null;
  const agregarProductoButton: HTMLButtonElement | null = document.getElementById("agregarProductoButton") as HTMLButtonElement | null;
  const productoVentaSelect: HTMLSelectElement | null = document.getElementById("productoVenta") as HTMLSelectElement | null;
  const cantidadVentaInput: HTMLInputElement | null = document.getElementById("cantidadVenta") as HTMLInputElement | null;
  const realizarVentaButton: HTMLButtonElement | null = document.getElementById("realizarVentaButton") as HTMLButtonElement | null;
  const productInfoDiv: HTMLDivElement | null = document.querySelector(".product-info") as HTMLDivElement | null;
  const productListUl: HTMLUListElement | null = document.getElementById("productList") as HTMLUListElement | null;

  // Crea una instancia de la clase GestionInventario
  const gestionInventario: GestionInventario = new GestionInventario();

  agregarProductoButton?.addEventListener("click", () => {
    const nombre: string = nombreProductoInput?.value || "";
    const precio: number = parseFloat(precioProductoInput?.value || "");
    const cantidad: number = parseInt(cantidadProductoInput?.value || "0", 10);

    if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
      const producto: Producto = new Producto(
        nombre,
        "",
        "P" + (gestionInventario.obtenerInventario().productos.length + 1),
        "",
        "",
        precio,
        cantidad,
        [TipoVentaEnum.PorUnidad]
      );

      gestionInventario.agregarProducto(producto);
      cargarProductosEnSelect();
      nombreProductoInput!.value = "";
      precioProductoInput!.value = "";
      cantidadProductoInput!.value = "";
    }
  });

  productoVentaSelect?.addEventListener("change", () => {
    const codigoProductoSeleccionado: string = productoVentaSelect?.value || "";
    mostrarInfoProductoSeleccionado(codigoProductoSeleccionado);
  });

  // Agrega aquí la lógica para cargar dinámicamente los productos en el select de ventas
  function cargarProductosEnSelect(): void {
    if (productoVentaSelect) {
      productoVentaSelect.innerHTML = "";
      gestionInventario.obtenerInventario().productos.forEach((producto) => {
        const option: HTMLOptionElement = document.createElement("option");
        option.value = producto.codigoProducto;
        option.textContent = producto.nombre;
        if (productoVentaSelect) {
          productoVentaSelect.appendChild(option);
        }
      });
    }
  }

  // Agrega aquí la lógica para mostrar la información detallada del producto seleccionado
  function mostrarInfoProductoSeleccionado(codigoProducto: string): void {
    const producto: Producto | undefined = gestionInventario.obtenerProductoPorCodigo(codigoProducto);
    if (productInfoDiv) {
      if (producto) {
        productInfoDiv.innerHTML = `
          <h4>Información del Producto:</h4>
          <p>Nombre: ${producto.nombre}</p>
          <p>Descripción: ${producto.descripcion}</p>
          <p>Precio: $${producto.precio}</p>
          <p>Cantidad en Stock: ${producto.cantidadEnStock}</p>
        `;
      } else {
        productInfoDiv.innerHTML = "";
      }
    }
  }

  // Aquí debes cargar los productos en el select de ventas al cargar la página
  cargarProductosEnSelect();
});
