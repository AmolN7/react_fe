import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cartItems = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 9.99, quantity: 1 },
];

const Cart = () => {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cart</h2>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Product</th>
                        <th style={{ width: "120px" }}>Quantity</th>
                        <th style={{ width: "120px" }}>Price</th>
                        <th style={{ width: "120px" }}>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <h4>Total: ${total.toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;