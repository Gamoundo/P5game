import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    // getFrames(p5)
    
    
  }
  const draw = p5 => {
    p5.background(255, 130, 20) 
  }
  

  return (
    <div className="App">
      <h1>Life</h1>
      <Sketch setup={setup} draw={draw}/>
    </div>
  );
}

export default App;
