import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Add the reducer to your store on the `counter` key.
// This allows us to use the slice’s reducer in our components.
