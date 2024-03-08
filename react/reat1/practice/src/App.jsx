import './App.css';
import Todo from './Todo';
import Todo2 from './Todo2';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <h3>Todo App 1</h3>
      <Todo task="Learning React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <h3>Todo App 2</h3>
      <Todo2 task="Learning JavaScript" isDone={true}></Todo2>
      <Todo2 task="Learning NodeJS" isDone={false}></Todo2>
    </>
  );
}

export default App
