import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCart, deleteProduct } from '../../../services/productApiService';
// Example async thunk for fetching cart details (customize as needed)
export const cartDetails = createAsyncThunk(
    'cart/cartDetails',
    async (userId, thunkAPI) => {
        try {
            return await getCart('cart', userId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch cart');
        }
    }
);

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        emptyCart(state) {
            state.cart = [];
        },
        addToCart(state, action) {
            console.log(action.payload)
            console.log('==', state.cart)
            if (Number(state.cart.id) === Number(action.payload.id)) {
                //update quantity
            } else {
                //add product
                state.cart.push(action.payload);
            }
        },
        deleteFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            //deleteProduct('cart', action.payload.id)
        },
        incrementQuantity(state, action) {
            const item = state.cart.find(i => i.id === action.payload);
            if (item) item.quantity = Number(item.quantity) + 1;
        },
        decrementQuantity(state, action) {
            const item = state.cart.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity = Number(item.quantity) - 1;
        },
        // getCartItems is not needed as a reducer; use a selector instead
    },
    extraReducers: (builder) => {
        builder
            .addCase(cartDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(cartDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload[0].items;
                state.cartUserId = action.payload[0].user_id;
                state.cartId = action.payload[0].id;
            })
            .addCase(cartDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { emptyCart, addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;