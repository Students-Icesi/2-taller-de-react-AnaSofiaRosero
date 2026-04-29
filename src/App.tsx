import productos from "./data/Productos";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
  <div className="fondo"></div>

  <div className="container">
    <h1>Catálogo de productos</h1>

    <div className="grid">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  </div>
</>
  );
}

export default App;