import './App.css';

var n1 = parseFloat(prompt("Valor: "));

function verificacao(x){
   
    if(x>10){
        return ("O valor "+ x + " é maior que 10");
    }
    else{
        return ("O valor "+ x + " é menor que 10"); 
    }
   
    
}

function App16(){
    return(
        <div className="App16">
            <p>{verificacao(n1)} </p>
        </div>
    );
}

export default App16;