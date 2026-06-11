import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='font-white'>React 프로젝트</h1>
      <h3 className='font-white'>이설혜</h3>
    </div>

  )
}

export default App;
