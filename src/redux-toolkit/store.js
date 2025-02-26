import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./rootReducer"; 

// Store configure karo
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist ke liye required hai
    }),
});

// Persistor create karo
const persistor = persistStore(store);

export { store, persistor };
