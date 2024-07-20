import click from './components/images/Click.jpg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter'
import { useState } from 'react';

function App() {

  const [clickCount, setClickCount] = useState(0);

  const clickHandler = () => {
    console.log('clicked bruv')
    setClickCount(clickCount + 1)
  }

  const resetCount = () => {
    console.log('resetted bro')
    setClickCount(0)
  }
  
  return (
    <div className="App">
      <div className="logo-container">
        <img src={click} alt="click logo" className='img-logo'/>
      </div>
      <div className='counter-container'>
        <Counter clickCount={clickCount}/>
        <Button
        text='Click'
        isClickButton={true}
        clickHandler={clickHandler}
        />
        <Button
        text='Reset'
        isClickButton={false}
        clickHandler={resetCount}
        />
      </div>
    </div>
  );
}

export default App;
