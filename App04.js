import './App.css';

var a =parseInt(prompt("Valor"));
var b =parseInt(prompt("Valor"));

function multiplicacao(){
    return a*b;
}

function App04(){
    return(
        <div className="App04">
            <p>Subtração valores:{a}*{b}={multiplicacao()}</p>
        </div>
    )
}
export default App04;