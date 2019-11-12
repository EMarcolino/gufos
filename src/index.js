// arquivo de configuração de rotas 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router} from 'react-router-dom'; //importando dependencias 

import Categoria from './pages/Categoria'; //importando a pagina categoria

const Rotas = (
    <Router>
        <div>
            <Route exact path="/" component = {App}/>{/*caminho de busca*/} 
            <Route path="/categoria" component = {Categoria}/>
            <Route path="/categorias" component = {Categoria}/> 
        </div>
    </Router>
)
//trocar a redenrização chamando a variavel declarada acima 
ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
