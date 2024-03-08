export default function Todo({ task, isDone }) {
  const todoStyle = {
    border: "2px solid red",
    margin: "20px",
  };
  return (
    <div style={todoStyle}>
      <h3>Todo App</h3>
      <ul>
        <li>task : {task}</li>
        <li>isDone : {isDone}</li>
      </ul>
    </div>
  );
}