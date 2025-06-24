import React, { useState } from 'react';
const Sidebar = ({ onSearch }) => {
    const [searchProdName, setSearchProdName] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [searchBrand, setSearchBrand] = useState('');
    const brandOptions = ['Ford',
        'Honda',
        'BMW',
        'Audi',
        'Jeep',
        'Mazda',
        'Brand 1',
        'Brand 2',
        'Brand 3',
        'Brand 4',
        'Brand 5',
        'Brand 6',
        'Brand 7',
        'Brand 8',
        'Brand 9',
        'Brand 10'
    ];
    const searchProducts = (e) => {
        e.preventDefault();
        const searchParams = {
            name: searchProdName,
            price: searchPrice,
            brand: searchBrand
        };
        //alert(`Searching for: ${JSON.stringify(searchParams)}`);
        onSearch(searchParams);
    }

    return (
        <div className="col-md-3">
            <div className="bg-light p-3 rounded">
                <h5>Search Products</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="searchName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="searchName" placeholder="Product name" onChange={e => setSearchProdName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="searchPrice" className="form-label">Price</label>
                        <input type="number" className="form-control" id="searchPrice" placeholder="Max price" onChange={e => setSearchPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="searchBrand" className="form-label">Brand</label>
                        <select className="form-select" id="searchBrand" onChange={e => setSearchBrand(e.target.value)}>
                            <option value="">All</option>
                            {brandOptions.map((brand, index) => (
                                <option key={index} value={brand.toLowerCase()}>{brand}</option>
                            ))}

                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={searchProducts}>Search</button>
                </form>
            </div>
        </div>
    );
}
export default Sidebar;