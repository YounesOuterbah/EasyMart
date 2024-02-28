import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import locationReducer from "./slices/locationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  location: locationReducer,
});

const persistConfig = { key: "root", version: 1, storage, whitelist: ["location"] };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
