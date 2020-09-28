import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";

let rerenderAll = (state) => {  //из store.js берем props
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAll(store.getState()); //перерисовка всего при КАЖДОМ изменении UI
store.subscribe(() => { //отдаем задачу "слушать" запуск изменений функцие subscribe (Паттерн слушатель)
    let state = store.getState()
    rerenderAll(state)
});

serviceWorker.unregister();
