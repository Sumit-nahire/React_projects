import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"sumit",
    age:22
  }

  let newarr=[1,2,3,4,5,6,7,8,9]

  return (
    <>
    <h1 className='bg-green-600 text-black p-5 rounded-xl'>Hello freinds</h1>
    <Card username="sumit"  someobje={newarr}/>
    <Card/>
</>

  )
}

export default App
