import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductsById } from '../../services/productApiService';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(getProductsById, 'products', id);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-danger text-center">Error: {error.message}</div>;
    if (!product) return <div className="text-center">Product not found</div>;

    // console.log('Product Details:', product);
    // For debugging purposes, you can log the product details  

    // Ensure product has the expected structure
    if (!product.name || !product.image || !product.price || !product.description) {
        return <div className="text-danger text-center">Product data is incomplete</div>;
    }

    return (


        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="text-muted">products ID: {product.id}</p>
                    <h4 className="text-success">${product.price.toFixed(2)}</h4>
                    <div className="mb-2">
                        <span className="badge bg-warning text-dark">
                            {product.ratings} ★
                        </span>
                        <span className="ms-2 text-secondary">
                            ({product.views} reviews)
                        </span>
                    </div>
                    <p>{product.description}</p>
                    <button className="btn btn-primary mt-3">Add to Cart</button>
                </div>
            </div>
        </div>);
}

export default ProductDetails;