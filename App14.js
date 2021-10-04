import './App.css';

var tempet = parseFloat(prompt("Fahrenheit: "));

function tempet_final(x){
   return ((((x - 32) * 5) / 9)); 
}

function App14(){
    return(
        <div className="App14">
            <p>{tempet}°F = {tempet_final(tempet)}°C</p>
        </div>
    );
}

export default App14;