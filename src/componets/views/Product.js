import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../system/Card';
import { getProducts } from '../../services/userApiService';
import useFetch from '../../hooks/useFetch';
import SeachSideBar from '../views/SearchSideBar'

const Product = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4; // or any number you want per page
    const [sortBy, setSortBy] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    let { data: products, loading, error } = useFetch(getProducts, 'products');
    //console.log(products, loading, error);
    const [searchParams, setSearchParams] = useState({ name: '', price: '', brand: '' });
    let filteredProducts = products && Array.isArray(products)
        ? products.filter(product => {
            const matchesName = searchParams.name === '' || product.name.toLowerCase().includes(searchParams.name.toLowerCase());
            const matchesPrice = searchParams.price === '' || Number(product.price) <= Number(searchParams.price);
            const matchesBrand =
                searchParams.brand === '' ||
                (product.brand && product.brand.toLowerCase().includes(searchParams.brand.toLowerCase()));
            return matchesName && matchesPrice && matchesBrand;
        })
        : [];

    // Sort filteredProducts based on sortBy and sortDirection
    if (sortBy) {
        filteredProducts = [...filteredProducts].sort((a, b) => {
            let result = 0;
            if (sortBy === 'price') result = Number(a.price) - Number(b.price);
            if (sortBy === 'name') result = a.name.localeCompare(b.name);
            if (sortBy === 'brand') result = (a.brand || '').localeCompare(b.brand || '');
            return sortDirection === 'asc' ? result : -result;
        });
    }

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    //
    return (
        <div className="container">
            <h1>Welcome to Product Gallery</h1>
            <div className="row">
                {/* Sidebar */}
                <SeachSideBar
                    onSearch={params => {
                        setSearchParams(params);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                />
                {/* Cards */}
                <div className="col-md-9 d-flex flex-wrap">
                    <div className="d-flex justify-content-end w-100 mb-3 gap-2">
                        <select
                            className="form-select w-auto"
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                        >
                            <option value="">Sort By</option>
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                            <option value="brand">Brand Name</option>
                        </select>
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                        >
                            {sortDirection === 'asc' ? 'Asc' : 'Desc'}
                        </button>
                    </div>

                    {loading && <div className="text-center w-100">Loading...</div>}
                    {error && <div className="text-danger text-center w-100">Error: {error.message}</div>}
                    {(!Array.isArray(products) || !products.every(product => product.id && product.name && product.image && product.price && product.description)) && <div className="text-danger text-center w-100">No products found</div>}
                    {!products || products.length === 0 && <div className="text-center w-100">No products found</div>}

                    {currentProducts.map((product) => (
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

                    {filteredProducts.length > productsPerPage && (
                        <nav className="w-100 d-flex justify-content-center mt-3">
                            <ul className="pagination">
                                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
                                    <li key={i} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Product;
