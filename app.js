const inventario = new Inventario();

const agregar = document.getElementById("btnAgregar");
agregar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let nombre = document.getElementById("nombre").value;
	let cantidad = document.getElementById("cantidad").value;
	let costo = document.getElementById("costo").value;	
	let estado = inventario.agregar(new Producto(codigo, nombre, cantidad, costo));
	if(codigo === "" || nombre === "" || cantidad === "" || costo === "") {
		document.getElementById('resultado').innerHTML = "<p>Favor de rellenar todos los campos.</p>"
	} else if(estado === true){
		document.getElementById('resultado').innerHTML = `<p>Se agrego el producto con el código: ${codigo}</p>`;
	} else if(estado === false){
		document.getElementById('resultado').innerHTML = '<p>El código del producto está repetido, ingrese otro</p>'
	}
});

const insertar = document.getElementById("btnInsertar");
insertar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let nombre = document.getElementById("nombre").value;
	let cantidad = document.getElementById("cantidad").value;
	let costo = document.getElementById("costo").value;	
	let posicion = document.getElementById("posicion").valueAsNumber;
	let estado = inventario.insertar(new Producto(codigo, nombre, cantidad, costo), posicion);
	if(estado) {
		document.getElementById('resultado').innerHTML = `<p>El producto se añadió en la posicion ${posicion}</p>`
	} else if(!estado){
		document.getElementById('resultado').innerHTML = "<p>Posición inválida</p>"
	}
})

const buscar = document.getElementById("btnBuscar");
buscar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let producto = inventario.buscar(codigo);
	if(producto !== null) {
		document.getElementById('resultado').innerHTML = producto.infoHTML();
	} else {
		document.getElementById('resultado').innerHTML = "<p>El producto no existe.</p>";
	}
});

const eliminar = document.getElementById("btnEliminar");
eliminar.addEventListener('click', () => {
	let codigo = document.getElementById("codigo").valueAsNumber;
	let producto = inventario.eliminar(codigo);
	if(producto !== false) {
		document.getElementById('resultado').innerHTML = `Se eliminó el producto con el código: ${codigo}`;
	} else {
		document.getElementById('resultado').innerHTML = '<p>El producto no existe</p>';
	}
});

const listar = document.getElementById("btnListar");
listar.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = `<p>Productos registrados: <br>${inventario.listar()}</p>` ;
});

const listarInverso = document.getElementById("btnListarInverso");
listarInverso.addEventListener('click', () => {
	document.getElementById('resultado').innerHTML = `<p>Productos registrados: <br>${inventario.listarInverso()}</p>`;
});

const limpiar = document.getElementById('btnLimpiar');
limpiar.addEventListener('click', () => {
	document.getElementById('frmProducto').reset();
	document.getElementById('resultado').innerHTML = "";
})
