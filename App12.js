import './App.css';

var fab = parseFloat(prompt("Custo de fábrica"));


function valor_carro(x){
   return ((x)+(x*0.28)+(x*0.45));
}

function App12(){
    return(
        <div className="App12">
            <p>O custo fabrica: {fab} junto com o imposto {fab*0.28} e {fab*0.45} é = R${valor_carro(fab)}  </p>
        </div>
    );
}

export default App12;