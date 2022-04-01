import * as core from 'dva-core';
// import createLoading from 'dva-loading';
import user from './page/1/model';

const app = core.create();

app.model(user);

// app.use(createLoading());

app.start();

export const store = app._store;
