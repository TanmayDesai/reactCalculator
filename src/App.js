import './App.css';
import Button from './Button';
import Output from './Output';
import {useState} from 'react';

function App() {
  const[text, setText] = useState("")

  let addToEquation = (value) => {
    setText(text+value)
  }

  let allClear = () => {
    setText('')
  }

  let calculateResult = () => {
    let res = eval(text)
    setText(`${res}`)
    console.log(res)
  }

  return (
    <div className="App">
      <div className='panel'>
        <Output value={text}/>
        <div className='row'>
          <Button value="7" handleClick={addToEquation}/>
          <Button value="8" handleClick={addToEquation}/>
          <Button value="9" handleClick={addToEquation}/>
          <Button value="*" handleClick={addToEquation} class="operator"/>
        </div>
        <div className='row'>
          <Button value="4" handleClick={addToEquation}/>
          <Button value="5" handleClick={addToEquation}/>
          <Button value="6" handleClick={addToEquation}/>
          <Button value="-" handleClick={addToEquation} class="operator"/>
        </div>
        <div className='row'>
          <Button value="1" handleClick={addToEquation}/>
          <Button value="2" handleClick={addToEquation}/>
          <Button value="3" handleClick={addToEquation}/>
          <Button value="+" handleClick={addToEquation} class="operator"/>
        </div>
        <div className='row'>
          <Button value="AC" handleClick={allClear} class="ac"/>
          <Button value="0" handleClick={addToEquation}/>
          <Button value="=" handleClick={calculateResult} class="equal"/>
          <Button value="/" handleClick={addToEquation} class="operator"/>
        </div>
      </div>
    </div>
  );
}

export default App;
