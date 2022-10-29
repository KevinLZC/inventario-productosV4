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
		} else if(this.primero.codigo > nuevo.codigo) {
			nuevo.siguiente = this.primero;
			this.primero.anterior = nuevo;
			this.primero = nuevo;
			return true;
		}else{
			let aux = this.primero;
			while (aux.siguiente !== null) {
				if(aux.siguiente.codigo > nuevo.codigo) {
					let tmp = aux.siguiente;
					aux.siguiente = nuevo;
					nuevo.anterior = aux;
					nuevo.siguiente = tmp;
					return true;
				}
				aux=aux.siguiente;
			}
			aux.siguiente = nuevo;
			nuevo.anterior = aux;
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
				aux.siguiente.anterior = aux;
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
