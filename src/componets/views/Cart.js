import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, emptyCart, cartDetails, incrementQuantity, decrementQuantity } from '../../store/features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartDetails(1))
    }, [dispatch])
    const cartItems = useSelector(state => state.cart.cart);
    const cartUserId = useSelector(state => state.cart.cartUser_id);
    const cartId = useSelector(state => state.cart.cartId);

    const total = cartItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
    );
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th style={{ width: "120px" }}>Quantity</th>
                        <th style={{ width: "120px" }}>Price</th>
                        <th style={{ width: "120px" }}>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <button onClick={() => dispatch(decrementQuantity(item.id))} className="btn btn-sm btn-secondary">-</button>
                                        <input type="text" readOnly value={item.quantity} className="form-control form-control-sm w-50" />
                                        <button onClick={() => dispatch(incrementQuantity(item.id))} className="btn btn-sm btn-secondary">+</button>
                                    </div>
                                </td>
                                <td>₹{Number(item.price).toFixed(2)}</td>
                                <td>₹{(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => dispatch(deleteFromCart(item.id))}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No items in cart</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <h4>Total: ₹{total.toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-secondary me-2" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;