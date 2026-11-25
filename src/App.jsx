import { useState } from 'react'
import Saludo from './components/Saludo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Vite + React</h2>
      <Saludo />
      <button onClick={() => setCount(count + 1)}>
        Has pulsado {count} veces
      </button>
    </div>
  )
}

export default App