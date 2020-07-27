import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      {/* <Counter/> */}
      {/* <Message/> */}

{/* <Greet name='vinid' heroName='batman'>
  <p> This is Children props</p>
</Greet>
<Greet name ='kumar' heroName='spiderman'>
  <button>Action</button>
  </Greet>
<Greet name ='pagolu' heroName='captinAmerica'/>
<Welcome name ='pagolu' heroName='captinAmerica'/>
<Welcome name ='kumar' heroName='spiderman'/>
<Welcome name='vinid' heroName='batman'/> */}
{/* <Greet name ='pagolu' heroName='captinAmerica'/> */}


{/* <Welcome/>  */}
{/* <Hello/> */}
    </div>
  )
}

export default App;
