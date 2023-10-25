import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement).render(<App />);
}
else {
    ReactDOM.createRoot(rootElement).render(<App />);
}