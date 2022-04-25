import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//import { createRoot } from 'react-dom/client';

// // updated to reflect React 18
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<React.StrictMode>
//   <App />
// </React.StrictMode>);