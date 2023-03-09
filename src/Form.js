import { useState } from 'react';
import './Form.css';
import PhoneInput from './PhoneInput';

function Form() {
  let [count, setCount] = useState(1)

  let inputs = new Array(count)
    .fill(0)
    .map((e, i) => <PhoneInput placeholder={`eg: phone ${i+1}`}/>)
  return (
    <form className='form'>
      {/* {[        
      <PhoneInput placeholder="eg: phone 1"/>,
      <PhoneInput placeholder="eg: phone 2"/>,
      <PhoneInput placeholder="eg: phone 3"/>
      ]} */}
      {inputs}
      <button 
        onClick={(e)=>{
          e.preventDefault()
          setCount(++count)
      }}>+</button>
    </form>
  );
}

export default Form;
