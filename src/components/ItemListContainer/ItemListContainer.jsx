import React, { useEffect, useState } from "react";
import { getProducts } from "../promises/productos";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {
    const { category } = useParams();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 

        getProducts()
            .then((res) => {
                if (category) {
                    const productsFilter = res.filter(product => product.category.toLowerCase() === category.toLowerCase());
                    setProductos(productsFilter);
                } else {
                    setProductos(res);
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false)); 
    }, [category]);

    return (
        <div className="product-list">
            <h1>Lista de Productos</h1>
            {loading ? (
                <p>Cargando productos...</p> 
            ) : (
                //tarjeta de producto
                <ul className="product-container"> 
                    {productos.map(producto => (
                        <li key={producto.id} className="product-item">
                            <h2>{producto.name}</h2>
                            <p><strong>Stock:</strong> {producto.stock}</p>
                            <Link to={`/item/${producto.id}`}>
                            <button className="details-btn">Detalles</button>
                            </Link>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};