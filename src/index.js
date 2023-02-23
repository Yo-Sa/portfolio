import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById('root');
render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    root
);