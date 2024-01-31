
import './App.css';
import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { ClearButton } from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  
  const addInput = value => {
    setInput(input + value);
}

const addResult = () => {
  //si hay algo en input y hay un simbolo matematico entre medio
  if (input){
  setInput(evaluate(input));
  } else {
    alert ("No hay valores para igualar o es un valor ");
  };
}


  return (
    <div className="App">
      <div className='calculator-container'>
        <Screen 
        input = {input}
        />
        <div className='line'>
          <Button click = {addInput} >1</Button>
          <Button click = {addInput}>2</Button>
          <Button click = {addInput}>3</Button>
          <Button click = {addInput}>+</Button>
        </div>
        <div className='line'>
        <Button click = {addInput}>4</Button>
        <Button click = {addInput}>5</Button>
        <Button click = {addInput}>6</Button>
        <Button click = {addInput}>-</Button>
        </div>
        <div className='line'>
        <Button click = {addInput}>7</Button>
        <Button click = {addInput}>8</Button>
        <Button click = {addInput}>9</Button>
        <Button click = {addInput}>*</Button>
        </div>
        <div className='line'>
        <Button click = {addResult}>=</Button>
        <Button click = {addInput}>0</Button>
        <Button click = {addInput}>.</Button>
        <Button click = {addInput}>/</Button>
        </div>
        <div className='line'>
        <ClearButton clear = {() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
