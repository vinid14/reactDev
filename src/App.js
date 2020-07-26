import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
<Greet name='vinid' heroName='batman'/>
<Greet name ='kumar' heroName='spiderman'/>
<Greet name ='pagolu' heroName='captinAmerica'/>

{/* <Welcome/>  */}
{/* <Hello/> */}
    </div>
  );
}

export default App;
