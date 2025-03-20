import { useState } from 'react'
import Red from './Component/Red'
import Green from './Component/Green'
import Blue from './Component/Blue'
import './App.css'

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 className='font-bold text-[40px]'>Background Color Change</h2>
      <Red setRed={setRed} />
      <Green setGreen={setGreen} />
      <Blue setBlue={setBlue} />
      
      <div
        style={{
          margin: "20px auto",
          width: "200px",
          height: "200px",
          backgroundColor: `rgb(${red},${green},${blue})`,
          border: "2px solid black"
        }}
      ></div>
      <p>RGB: {`(${red}, ${green}, ${blue})`}</p>
    </div>
    </>
  )
}

export default App
