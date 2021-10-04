import './App.css';

var salario = parseFloat(prompt("Salário fixo"));
var reajuste = parseFloat(prompt("Valor que vai ser reajustado"));


function reajuste_final(a,c){
   return ((a)+(a*c/100));
}

function App11(){
    return(
        <div className="App11">
            <p>O salário fixo: {salario} junto com o reajuste de {reajuste}% é R${reajuste_final(salario,reajuste)}  </p>
        </div>
    );
}

export default App11;