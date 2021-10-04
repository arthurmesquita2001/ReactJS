import './App.css';

var a =parseInt(prompt("Valor"));
var b =parseInt(prompt("Valor"));

function divisao(a,b){
    return a/b;
}

function App05(){
    return(
        <div className="App05">
            <p>Divisão valores:{a}/{b}={divisao(a,b)}</p>
        </div>
    )
}
export default App05;