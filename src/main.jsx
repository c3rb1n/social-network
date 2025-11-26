import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App.jsx';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App store={store} />
        </StrictMode>
    </BrowserRouter>,
);
