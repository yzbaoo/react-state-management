import * as core from 'dva-core';
// import createLoading from 'dva-loading';
import user from './page/1/model';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

const app = core.create({}, {
  setupMiddlewares(middlewares) {
    return [
      immutableStateInvariantMiddleware(),
      ...middlewares,
    ];
  },
});

app.model(user);

// app.use(createLoading());

app.start();

export const store = app._store;
