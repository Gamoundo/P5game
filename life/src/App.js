
import './App.css';
import Sketch from 'react-p5';
import React, { useEffect,  useState } from 'react';
import Timer from './components/Timer';
import useCharacter from './hooks/useCharacter'
import useEnemy from './hooks/useEnemy'
import Story from './components/Story';
import Ending from './components/Ending';
import Bgm from './components/Bgm';
import Storyof from './components/Storyof';
import Signin from './components/Signin';

function App() {
  const [char, setChar] = useState(
    {
      name:'',
      workHits: 0,
      stressHits: 0,
      alive: true,
    }
  )
  

  return (
    <div >
     {char.name === '' && <Signin setChar={setChar} />}
    {char.name != "" &&  <Storyof char={char} setChar={setChar}/>}
      
      
      
      
      
    </div>
  );
}

export default App;
