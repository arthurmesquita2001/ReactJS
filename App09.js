import './App.css';

var anos = parseInt(prompt("Digite os anos"));
var mes = parseInt(prompt("Digite os meses"));
var dias = parseInt(prompt('dias'));


function idade(){
    return ((anos * 365) + (mes * 30) + dias);
}

function App09(){
    return(
        <div className="App09">
            <p>Sua idade em dias é igual: {idade()} dias </p>
        </div>
    );
}

export default App09;