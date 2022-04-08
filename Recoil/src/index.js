import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {RecoilRoot} from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
