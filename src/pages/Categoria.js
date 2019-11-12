import React, {Component} from 'react'; //importando objeto React
import '../App.css'; //importando css
import Rodape from '../componentes/Rodape';
 
class Categoria extends Component {
    render(){
        return (
            <div className="App"> {/*para utilizar o css padrão deve se colocar a className com o mesmo nome do arquivo*/}
                <h1>Categoria</h1>
                <p>Teste Categoria</p>
                <Rodape/>
            </div>
        )
    }
}
export default Categoria; // por padrão recebe return e envia para o navegador 