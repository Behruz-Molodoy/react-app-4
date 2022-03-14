import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState(data)
  const [count, setCount] = useState(text.length - 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0, count))
  }
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form onSubmit={handleSubmit}>
        <label className='text'>
          PARAGRAP
        </label>
        <input type="number" onChange={(e) => setCount(e.target.value)} value={count} />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}><span className='span'>{index + 1}</span>{item}</p>
        ))}
      </article>
    </section>
  )
}

export default App;
