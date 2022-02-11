import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const m = ""
  const listaDeLinguagens = ["JavaScript", "Python","java","React"]

  const alerta = () => {
     prompt('oi')
  }

  const renderiza = (event) => {
    console.log(event.target.value)
  }

  
  return (

    // fragremento do React
    <>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 

           {/* if pelo JS */}

          {
            m ? <h1>{m}</h1> 
            : <h1>oi</h1>
          } 
         
        </p>
        
         <input type="text"  onChange = {renderiza}/>
        


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>

          {/* Lopps com forEach */}
          {
            listaDeLinguagens.map((linguagem,index) => <li key={index}> {index+1} -   {linguagem} </li>)
          }
        </ul>

        <button onClick={alerta}> click</button>
      </header>

    </>
  );
}

export default App;

