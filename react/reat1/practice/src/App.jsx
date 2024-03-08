import './App.css';
import Todo from './Todo';
import Todo2 from './Todo2';
import Todo3 from './Todo3';
import Todo4 from './Todo4';
import Todo5 from './Todo5';

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
      <h3>Todo App 3</h3>
      <Todo3 task="Learning Tailwind CSS" isDone={true}></Todo3>
      <Todo3 task="Learning MongoDB" isDone={false}></Todo3>

      <h3>Todo App 4</h3>
      <Todo4 task="Learning Bangla" isDone={true}></Todo4>
      <Todo4 task="Learning English" isDone={false}></Todo4>

      <h3>Todo App 5</h3>
      <Todo5 task="Learning Reading English" isDone={true}></Todo5>
      <Todo5 task="Learning Speaking English" isDone={false}></Todo5>
    </>
  );
}

export default App;
