import React, {useState, useEffect, useRef} from 'react'

function App () {
  const inputRef = useRef()
  const count = useRef(1)
  const [value, setValue] = useState(false)
  const handleclick = () => {
    inputRef.current.focus()
  }

  useEffect(() =>{
    setTimeout(() =>{
      count.current = 300
      setValue(true)
    }, 3000)
  })
  return (
    <div>
      <h1>Count: {count.current}</h1>
      Foco: <input ref={inputRef}/>
      <br/>
      <button onClick={handleclick}>Focar</button>
    </div>
    )
}

export default App