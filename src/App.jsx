import { useState } from 'react'
import './App.css'
import Card from './components/card/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>College Fest</h1>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
    <Card />
    <Card />
    <Card />
    </div>
    </>
  )
}

export default App
