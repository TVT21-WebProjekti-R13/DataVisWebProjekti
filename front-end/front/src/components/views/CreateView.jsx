import React from 'react'
import axios from 'axios'

export const CreateView = () => {
  const visuals = ["v1v2", "v3v4", "v5", "v6", "v7", "v8"]

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedVisuals = []
    visuals.forEach((visual) => {
      if (document.getElementById(visual).checked) {
        selectedVisuals.push(visual)
      }
    })
    console.log(selectedVisuals);
    axios.post('/data/saveData', { selectedVisuals })
  }

  return (
    <div>
      <h1>Luo näkymä</h1>
      <form onSubmit={handleSubmit}>
        {visuals.map((visual) => {
          return (
            <div key={visual}>
              <input type="checkbox" id={visual} name={visual} />
              <label htmlFor={visual}>{visual}</label>
            </div>
          )
        })}
        <button type="submit">Luo</button>
      </form>
    </div>
  )
}
