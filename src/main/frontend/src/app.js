import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles-scss.scss'
import configureStore from './components/redux/configureStore';
import {Provider} from 'react-redux';
let store = configureStore();
let state = store.getState();
//Test
store.subscribe(() => {
    let state = store.getState();
    console.log('state is',state);
});
import AppRouter,{history} from './components/routes/AppRouter';
let RenderJSX = () => (
    <div>
    <Provider store={store}>        
        <AppRouter />        
    </Provider>
    </div>
);
ReactDOM.render(<RenderJSX />,document.getElementById('app'));
