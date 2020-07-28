import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>

      {/* <Inline/> */}
      {/* <StyleSheet primary ={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
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
