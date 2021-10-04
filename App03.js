import './App.css';

var a =parseInt(prompt("Valor"));
var b =parseInt(prompt("Valor"));

function subtracao(){
    return a-b;
}

function App03(){
    return(
        <div className="App03">
            <p>Subtração valores:{a}-{b}={subtracao()}</p>
        </div>
    )
}
export default App03;