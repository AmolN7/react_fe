import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../system/Card';
import { getProducts } from '../../services/userApiService';
import useFetch from '../../hooks/useFetch';
import SeachSideBar from '../views/SearchSideBar'
const Product = () => {
    let { data: products, loading, error } = useFetch(getProducts, 'products');
    //console.log(products, loading, error);
    const [searchParams, setSearchParams] = useState({ name: '', price: '', category: '' });
    const filteredProducts = products && Array.isArray(products)
        ? products.filter(product => {
            const matchesName = searchParams.name === '' || product.name.toLowerCase().includes(searchParams.name.toLowerCase());
            const matchesPrice = searchParams.price === '' || Number(product.price) <= Number(searchParams.price);
            const matchesCategory = searchParams.category === '' || (product.category && product.category.toLowerCase() === searchParams.category.toLowerCase());
            return matchesName && matchesPrice && matchesCategory;
        })
        : [];


    products = (searchParams) !== '' ? (filteredProducts && filteredProducts.length > 0 ? filteredProducts : null) : products;


    return (
        <div className="container">
            <h1>Welcome to Product Gallery</h1>
            <div className="row">
                {/* Sidebar */}
                <SeachSideBar onSearch={setSearchParams} />
                {/* Cards */}
                <div className="col-md-9 d-flex flex-wrap">

                    {loading && <div className="text-center w-100">Loading...</div>}
                    {error && <div className="text-danger text-center w-100">Error: {error.message}</div>}
                    {(!Array.isArray(products) || !products.every(product => product.id && product.name && product.image && product.price && product.description)) && <div className="text-danger text-center w-100">No products found</div>}
                    {!products || products.length === 0 && <div className="text-center w-100">No products found</div>}

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
