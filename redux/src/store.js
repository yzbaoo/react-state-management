import { configureStore } from '@reduxjs/toolkit';
import user from './page/1_基础/model';

export const store = configureStore({
  reducer: {
    user: user.reducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  // preloadedState: {},
  // enhancers: {}
});
console.error('---store.js---:',store);
