import React from 'react';
import './App.css';

import MyCounter from "./counter/MyCounter";
import {Provider} from "react-redux";
import {store} from "./counter/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>< MyCounter/></Provider>
        </div>
    );
}

export default App;
