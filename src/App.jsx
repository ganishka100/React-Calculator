import './App.css';
import {useState} from 'react';
import ButtonsContainer from './assets/Components/ButtonsContainer';
import Input from './assets/Components/Input'; 

function App() {

  let [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setCalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return(
    <>
    <h1 className='text-center text-decoration-underline fst-italic'>CALCULATOR</h1>
    <div className="calculator">
     <Input displayValue={calVal}/>
     <ButtonsContainer handleButton={handleButtonClick}/> 
    </div>
    </>  
  )
}

export default App;