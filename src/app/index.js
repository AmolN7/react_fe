
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false, // Disable serializable check for non-serializable data
    //     }),
    // devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});