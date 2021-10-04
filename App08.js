import './App.css';

var b =parseInt(prompt("Valor da base"));
var h =parseInt(prompt("Valor da base"));

function area_retangulo(){
    return b*h;
}

function App08(){
    return(
        <div className="App08">
            <p>O valor da área total é:{area_retangulo()} cm² </p>
        </div>
    );
}

export default App08;