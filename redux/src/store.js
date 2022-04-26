import { configureStore } from '@reduxjs/toolkit';
import user from './page/1_基础/model';
import state from './page/3_验证/model';

export const store = configureStore({
  reducer: {
    user: user.reducer,
    state: state.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  // preloadedState: {},
  // enhancers: {}
});
console.error('---store.js---:',store);
