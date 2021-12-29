import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Router} from './routes/Routes';

import './index.css';
import {MainLayout} from "./components/MainLayout";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainLayout>
                <Router/>
            </MainLayout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
