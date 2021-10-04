import './App.css';

var a =parseInt(prompt("Valor"));

function sucessor(){
    return a+1;
}

function App07(){
    return(
        <div className="App07">
            <p>O sucecessor de:{a} e {sucessor()}</p>
        </div>
    );
}

export default App07;