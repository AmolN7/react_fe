import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin } from '../../../services/userApiService'

const initialState = {
    userid: null,
    name: null,
    email: null,
    token: null,
    loading: false,
    error: null,
};

// // Async login action
// export const loginUser = createAsyncThunk(
//     'auth/loginUser',
//     async (credentials, thunkAPI) => {
//         try {
//             return userLogin('login', credentials);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.userid = null;
            state.name = null;
            state.email = null;
            state.token = null;
            sessionStorage.removeItem('auth');
        },
        loadUserFromStorage(state) {
            const stored = JSON.parse(sessionStorage.getItem('auth'));
            if (stored) {
                state.userid = stored.id;
                state.name = stored.name;
                state.email = stored.email;
                state.token = stored.token;
            }
        },
        setAuthUser(state, action) {
            state.loading = false;
            // state.userid = action.payload.id;
            // state.name = action.payload.name;
            // state.email = action.payload.email;
            // state.token = action.payload.token;
            sessionStorage.setItem('auth', JSON.stringify(action.payload));
            //console.log('===**=' + JSON.stringify(action.payload))
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginUser.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(loginUser.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //             //sessionStorage.setItem('auth', JSON.stringify(action.payload));
    //         })
    //         .addCase(loginUser.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         });
    // }
});

export const { logout, loadUserFromStorage, setAuthUser } = authSlice.actions;
export default authSlice.reducer;
