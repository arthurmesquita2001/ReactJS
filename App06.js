import './App.css';

var a =parseInt(prompt("Valor"));

function antecessor(){
    return a-1;
}

function App06(){
    return(
        <div className="App06">
            <p>O antecessor de:{a} e {antecessor()}</p>
        </div>
    );
}

export default App06;