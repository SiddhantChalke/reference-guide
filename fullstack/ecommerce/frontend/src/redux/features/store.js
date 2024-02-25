import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../api/apiSlice";
import authReducer from '../features/auth/authSlice'
import favoritesReducer from '../features/favorites/favoriteSlice'
import { getFavoritesFromLocalStorage } from "../../utils/localStorage";
import cartSliceReducer from "./cart/cartSlice";
import shopSliceReducer from "./shop/shopSlice"

const initialFavorites = getFavoritesFromLocalStorage() || [];

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authReducer,
        favorites: favoritesReducer,
        cart: cartSliceReducer,
        shop: shopSliceReducer,
    },
    preloadedState: {
        favorites: initialFavorites,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

setupListeners(store.dispatch);

export default store;