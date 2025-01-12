import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('h1', { id: 'head' }, "Welcome to React!!");

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(header);