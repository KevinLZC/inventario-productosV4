class Inventario {
	constructor() {
		this.primero = null;
		this.dimension = 0;
	}

	agregar(nuevo) {
		if(!this.comprobarCodigo(nuevo.codigo)){
			return false;
		}

		if(this.primero === null) {
			this.primero = nuevo;
			this.dimension++;
			return true;
		} else {
			let aux = this.primero;
			while (aux.siguiente !== null) {
				aux=aux.siguiente;
			}
			aux.siguiente = nuevo;
			this.dimension++;
			return true;
		}	
	}

	comprobarCodigo(codigo) {
		let aux = this.primero;
		while(aux !== null) {
			if(codigo === aux.codigo) {
				return false;
			}
			aux = aux.siguiente;
		}
		return true;
	}

	insertar(nuevo, posicion) {
		if((this.dimension === 0 && posicion < 0) || (this.dimension !== 0 && posicion > this.dimension)) {
			return false;
		}

		if(this.primero === null) {
			this.primero = nuevo;
			return true;
		} else if(posicion === 1) {
			nuevo.siguiente = this.primero;
			this.primero = nuevo;
			return true;
		} else {
			let aux = this.primero;
			let contador = 1;
			while(contador !== posicion) {
				if(contador + 1 === posicion) {
					let tmp = aux;
					nuevo.siguiente = aux.siguiente;
					tmp.siguiente = nuevo;
					return true
				}
				aux = aux.siguiente;
				contador++;
			}
		} 		
	}

	buscar(codigo) {
		let aux = this.primero;
		while(aux !== null) {
			if(aux.codigo === codigo) {
				return aux;
			}
			aux = aux.siguiente;
		}
		return null;
	}

	eliminar(codigo) {
		if(this.primero.codigo === codigo) {
			this.primero = this.primero.siguiente;
			this.dimension--;
			return true;
		}

		let aux = this.primero;
		while(aux.siguiente !== null) {
			if(aux.siguiente.codigo === codigo) {
				aux.siguiente = aux.siguiente.siguiente;
				this.dimension--;
				return true;
			}
			aux = aux.siguiente;
		}
		return false;
	}

	listar() {
		let listado = ""
		if(this.primero == null) {
			return "No existe ningún producto registrado";
		}

		let aux = this.primero;
		while(aux !== null) {
			listado += aux.infoHTML()
			aux = aux.siguiente;
		}
		return listado;
	}

	listarInverso() {
		if(this.primero == null) {
        return "No existen productos registrados";
      } else {
        return this.listaRecursiva(this.primero);
      }
	}

	listaRecursiva(producto) {
      if(producto.siguiente == null) {
        return producto.infoHTML();
      } else {
        return `${this.listaRecursiva(producto.siguiente)} ${producto.infoHTML()}`;
      }
    }
}
