import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../../hooks/useFetch';
import { getProductById } from '../../services/userApiService';


const ProductDetails = () => {
    const { products, loading, error } = useFetch(getProductById, 'products', 1);
    console.log(products);
    return (<div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <img src={products.image} alt={products.name} className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
                <h2>{products.name}</h2>
                <p className="text-muted">products ID: {products.id}</p>
                <h4 className="text-success">${products.price.toFixed(2)}</h4>
                <div className="mb-2">
                    <span className="badge bg-warning text-dark">
                        {products.rating} ★
                    </span>
                    <span className="ms-2 text-secondary">
                        ({products.reviews} reviews)
                    </span>
                </div>
                <p>{products.description}</p>
                <button className="btn btn-primary mt-3">Add to Cart</button>
            </div>
        </div>
    </div>);
}



export default ProductDetails;