// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person></Person>

    </>
  )
}

function Person() {
  const person = {
    name : "Mst Surnaly Akter",
    age :21,
    hobby : "Reading Books"
  }
  return (
    <>
      <h3>name: {person.name}</h3>
      <h3>age: {person.age}</h3>
      <h3>Hobby: {person.hobby}</h3>
    </>
  );
}

export default App
