import React, { useState } from 'react'
const relativeList = ["Dilbag","Ajit","Ajay","Pradeep"];
const App = () => {

  return (
    <div id="main">
      <ol key={'#relativeList'}>
      {relativeList.map((item,idx )=> {
        return <li key={`#relativeListItem${idx+1}`}>{item}</li>
      })}
      </ol>
    </div>
  )
}

export default App
