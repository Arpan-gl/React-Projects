import { useState,useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let password = "";

    let characters =  "";
    if(numberAllowed) characters += "0123456789";
    if(specialCharacterAllowed) characters +=  "!@#$%^&*()_+";
    characters +=  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)];
    }

    setPassword(password);
  },[length,numberAllowed,specialCharacterAllowed,setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,specialCharacterAllowed,passwordGenerator]);
  
  return (
    <div className='flex flex-wrap overflow-hidden flex-col justify-center items-center h-full w-screen max-w-md bg-gray-700 shadow-md rounded-lg my-2 py-4'>

      <h1 className='text-2xl text-center font-medium text-white'>Password Generator</h1>

      <div className='flex flex-row gap-3 w-full p-4'>

        <input type="text" value={password} placeholder='password' className='py-1 px-1 rounded-lg w-full' readOnly ref={passwordRef} />

        <button onClick={copyPasswordToClipBoard} className='bg-blue-700 w-1/4 rounded-lg text-white font-medium hover:bg-blue-900'>Copy</button>
        
      </div>
      <div className='flex flex-row gap-2 w-full p-4'>
        <div className='flex flex-row gap-2'>
          <input type="range" min={6} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer' />
          <div className='font-medium text-lg text-green-600'>length:{length}</div>
        </div>

        <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label htmlFor="numberTnput" className='font-medium text-lg text-green-600'>Number</label>

        <input type="checkbox" className='cursor-pointer' defaultChecked={specialCharacterAllowed} id='specialCharacterInput' onChange={()=>{setSpecialCharacterAllowed((prev)=>!prev)}} />
        <label htmlFor="specialCharacterInput" className='font-medium text-lg text-green-600'>Character</label>
      </div>
    </div>
  )

};

export default App;