import { useState } from "react";
import type { Producto } from "../data/Productos";
import "./ProductCard.css";

interface Props {
  producto: Producto;
}

function ProductCard({ producto }: Props) {
  const [agregado, setAgregado] = useState(false);
  const [mostrarResenas, setMostrarResenas] = useState(false);

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />

      <h2>{producto.nombre}</h2>
      <p className="descripcion">{producto.descripcion}</p>

      <p className="precio">${producto.precio}</p>

      <div className="botones">
        <button
          onClick={() => setAgregado(true)}
          disabled={agregado}
          className={agregado ? "btn-agregado" : ""}
        >
          {agregado ? "Agregado" : "Agregar al carrito"}
        </button>

        <button onClick={() => setMostrarResenas(!mostrarResenas)}>
          {mostrarResenas ? "Ocultar reseñas" : "Ver reseñas"}
        </button>
      </div>

      {mostrarResenas && (
        <div className="resenas">
          {producto.resenas.length === 0 ? (
            <p>No hay reseñas</p>
          ) : (
            producto.resenas.map((r, index) => (
              <div key={index} className="resena">
                <p className="usuario">{r.usuario}</p>
                <p className="texto">{r.texto}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCard;