// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { dataSliceReducer } from './dataSlice';
import { userReducer } from './userSlice';
import { themeReducer } from './themeSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['data'], // Exclude 'data' slice from being persisted
};

// Combine your reducers
const rootReducer = combineReducers({
  data: dataSliceReducer,
  user: userReducer,
  theme: themeReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);
