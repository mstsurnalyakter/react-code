export default function Singers({ singer }) {
    const {name,age} = singer
  console.log(singer);
  return (
    <div>
      <h3>Singer: {name}</h3>
      <p>age: {age}</p>
    </div>
  );
}