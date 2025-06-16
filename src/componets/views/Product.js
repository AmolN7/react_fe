import { react, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../system/Card';
const Product = () => {
    return (
        <div className="container">
            <h1>Welcome to My React Client App</h1>
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
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                    <Card image="https://www.guvi.in/assets/Baq-GG32-data-science.webp" title="Card Title" description="This is a brief description of the card content. It provides an overview of what the card is about." link="#" />
                </div>
            </div>
        </div>
    );
}
export default Product;
