import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderAll = (state) => {  //из store.js берем props
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAll(store.getState()); //перерисовка всего при КАЖДОМ изменении UI
store.subscribe(rerenderAll); //отдаем задачу "слушать" запуск изменений функцие subscribe (Паттерн слушатель)

serviceWorker.unregister();
