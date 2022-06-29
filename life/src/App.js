
import './App.css';

import React, { useState } from 'react';

import Storyof from './components/Storyof';
import Signin from './components/Signin';

function App() {
  const [char, setChar] = useState(
    {
      name:'',
      workHits: 0,
      stressHits: 0,
      alive: true,
      fam: 0
    }
  )
  

  return (
    <div >
     {char.name === '' && <Signin setChar={setChar} />}
    {char.name !== "" &&  <Storyof char={char} setChar={setChar}/>}
      
      
      
      
      
    </div>
  );
}

export default App;
