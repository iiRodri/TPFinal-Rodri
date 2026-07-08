import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/productsServices";

import "./ProductDelete.css";

export const ProductDelete = () => {

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);


  const handleDelete = async (id) => {

    const confirmDelete = confirm("¿Eliminar producto?");

    if(confirmDelete){
      await deleteProduct(id);
      loadProducts();
    }

  };


return (
  <div className="delete-container">

    <h2 className="delete-title">
      Eliminar productos
    </h2>

    {products.map((product) => (
      <div className="delete-product" key={product.id}>

        <span className="delete-name">
          {product.name}
        </span>

        <button
          className="delete-button"
          onClick={() => handleDelete(product.id)}
        >
          Eliminar
        </button>

      </div>
    ))}

  </div>
  );
}; 