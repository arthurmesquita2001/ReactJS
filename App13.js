import './App.css';


var carros_vendidos = parseInt(prompt("Numero total de carros vendidos pelo cidadão: "));
var fixo = parseFloat(prompt("Sálario fixo: "));
var comissao = parseFloat(prompt("Comissão por venda: "));
var total_vendas = parseFloat(prompt("Valor total das vendas: "));

function salario(x,y,w,z){
   return (((z * y) + (w * 0.05) + x));
}

function App13(){
    return(
        <div className="App13">
            <p>O salario final: R${salario(fixo,carros_vendidos,total_vendas,comissao)}</p>
        </div>
    );
}

export default App13;