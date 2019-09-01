import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Materilize from 'materialize-css/dist/js/materialize.min';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    useEffect(() => {
        Materilize.AutoInit();
    });

    return (
        <Provider store={store}>
            <div className="App">Hii</div>
        </Provider>
    );
}

export default App;
