import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../features/pokemon/api/pokemonApi';
import pokemonReducer from '../features/pokemon/slices/pokemonSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define the root reducer with proper types
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

// Define root state type from the root reducer
type RootReducerState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [pokemonApi.reducerPath], // Don't persist API cache
};

// Create persisted reducer with the correct type
const persistedReducer = persistReducer<RootReducerState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

// Enable refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
