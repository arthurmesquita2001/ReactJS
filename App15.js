import './App.css';

var n1 = parseFloat(prompt("Nota: "));
var n2 = parseFloat(prompt("Nota: "));
var n3 = parseFloat(prompt("Nota: "));

function final(x,y,z){
   return (((x * 2 + y * 3 + z * 5) / (2 + 3 + 5))); 
}

function App15(){
    return(
        <div className="App15">
            <p>A nota final é: {final(n1,n2,n3)} </p>
        </div>
    );
}

export default App15;