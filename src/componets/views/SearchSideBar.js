import React, { useState } from 'react';
const Sidebar = ({ onSearch }) => {
    const [searchProdName, setSearchProdName] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const searchProducts = (e) => {
        e.preventDefault();
        const searchParams = {
            name: searchProdName,
            price: searchPrice,
            category: searchCategory
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
                        <label htmlFor="searchCategory" className="form-label">Category</label>
                        <select className="form-select" id="searchCategory" onChange={e => setSearchCategory(e.target.value)}>
                            <option value="">All</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={searchProducts}>Search</button>
                </form>
            </div>
        </div>
    );
}
export default Sidebar;