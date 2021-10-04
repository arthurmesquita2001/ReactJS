import './App.css';

var a =parseInt(prompt("Valor"));
var b =parseInt(prompt("Valor"));

function somar(){
    return a+b;
}

function App02(){
    return(
        <div className="App02">
            <p>Somando os valores:{a}+{b}={somar()}</p>
        </div>
    )
}
export default App02;