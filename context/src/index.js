import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {RecoilRoot} from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading... </div>}>
        <Router />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
  // () => {console.error('renderered:',document.getElementById('root')._reactRootContainer)}
);

// const rootEle = document.getElementById('root');
// const root = ReactDOM.createRoot(rootEle);
// console.error('root:',root);
// root.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <Router />
//     </RecoilRoot>
//   </React.StrictMode>
// )
// console.error('root--:',root);