import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderAll = (props) => {  //из state.js берем props
    ReactDOM.render(
        <BrowserRouter>
            <App state={props} //передаем дальше props в state в App
                 addPost={addPost} //из props достаем props.addPost и передаем в addPost функцию
                 updateNewPostText={updateNewPostText} //...передеам props.updateNewPostText в функцию updateNewPostText
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAll(state); //перерисовка всего при КАЖДОМ изменении UI
subscribe(rerenderAll); //отдаем задачу "слушать" запуск изменений функцие subscribe (Паттерн слушатель)

serviceWorker.unregister();
