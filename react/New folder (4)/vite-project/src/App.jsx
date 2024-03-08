import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
    </>
  );
}

export default App;
