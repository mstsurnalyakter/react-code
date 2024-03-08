// conditional rendering option 3:
export default function Todo3({ task, isDone }) {
  return <li>{isDone ? `Finished: ${task}` : `Work on: ${task}`}</li>;
}
