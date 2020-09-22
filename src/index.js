import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderAll = (state) => {  //из state.js берем props
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} //передаем дальше props в state в App
                 dispatch={store.dispatch.bind(store)} //из props достаем props.addPost и передаем в addPost функцию
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAll(store.getState()); //перерисовка всего при КАЖДОМ изменении UI
store.subscribe(rerenderAll); //отдаем задачу "слушать" запуск изменений функцие subscribe (Паттерн слушатель)

serviceWorker.unregister();
