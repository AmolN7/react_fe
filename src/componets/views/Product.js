import { react, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../system/Card';
const Product = () => {
    return (
        <div className="container">
            <h1>Welcome to My React Client App</h1>

            <div className="row">
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
    );
}
export default Product;
