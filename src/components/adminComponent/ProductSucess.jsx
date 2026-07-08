import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductSuccess = () => {
    const { id } = useParams();

    return (
        <section className="sucess-page">
            <h2>Producto cargado con exito</h2>
            <p>ID de producto: {id}</p>
            <p> Cargar otro haciendo click en el boton</p>

            <Link className="btn-primary primary" to='/admin' replace>Agregar otro producto</Link>
        </section>
    )
}