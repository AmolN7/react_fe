import { react, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../system/Card';
import { getProducts } from '../../services/userApiService';
import useFetch from '../../hooks/useFetch';
const Product = () => {
    const { data: products, loading, error } = useFetch(getProducts, 'products');
    //console.log(products, loading, error);
    return (
        <div className="container">
            <h1>Welcome to Product Gallery</h1>
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                    <div className="bg-light p-3 rounded">
                        <h5>Search Products</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="searchName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="searchName" placeholder="Product name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="searchPrice" className="form-label">Price</label>
                                <input type="number" className="form-control" id="searchPrice" placeholder="Max price" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="searchCategory" className="form-label">Category</label>
                                <select className="form-select" id="searchCategory">
                                    <option value="">All</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Search</button>
                        </form>
                    </div>
                </div>
                {/* Cards */}
                <div className="col-md-9 d-flex flex-wrap">
                    {loading && <div className="text-center w-100">Loading...</div>}
                    {error && <div className="text-danger w-100">Error: {error.message}</div>}
                    {products && products.map((product) => (
                        <Card
                            key={product.id}
                            image={product.image}
                            title={product.name}
                            description={product.description}
                            link={`/product/${product.id}`}
                            brand={product.brand}
                            price={product.price}
                            model={product.model}
                            fuel_type={product.fuel_type}
                            year={product.year}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Product;
