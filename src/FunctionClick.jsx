import React from 'react'

function FunctionClick() {
    const handlClick = () => {
        console.log('Hello Sajjad')
        console.log('Break');
        
    }
  return (
    <>
      <button onClick={handlClick}>Click me</button>
    </>
  )
}

export default FunctionClick
