import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {Container, createTheme, ThemeProvider} from "@mui/material";
import {green} from "@mui/material/colors";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import {persistor, store} from "./app/store";
import App from "./app/App";
import {styleContainer} from "./features/styleBox";


const theme = createTheme({
    palette: {
        primary: green,
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}><Container sx={{ ...styleContainer}}> <App /></Container></PersistGate>
        </ThemeProvider>
    </Provider>
);
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





