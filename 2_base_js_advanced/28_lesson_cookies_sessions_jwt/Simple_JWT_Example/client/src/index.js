import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.interceptors.request.use(function(config) {
    if (localStorage.token) {
        config.headers['Authorization'] = 'Bearer ' + localStorage.token;
    } else {
        config.headers['Authorization'] = null;
    }
    return config;
});

// axios.interceptors.response.use(
//     function(response) {
//         const path = response.config.url.substr(config.apiUrl.length);
//         if (!localStorage.token && ![ '/login', '/signup' ].includes(path)) {
//             router.push({ path: '/login' });
//             return false;
//         }
//         return response;
//     },
//     function(error) {
//         if (error.response.status === 401) {
//             router.push({ path: '/login' });
//         }
//         return Promise.reject(error);
//     }
// );


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
