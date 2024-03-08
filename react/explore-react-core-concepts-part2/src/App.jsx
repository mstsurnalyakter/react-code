import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('Button Click')
  }

  const handleClick2 = () =>{
    alert("Button 2 Click")
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
    <Counter></Counter>
      <h2>React Core Concepts 2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => alert("Button 3 Click")}>Click3</button>
      <button onClick={() => addToFive(3)}>Click4</button>
    </>
  );
}

export default App
