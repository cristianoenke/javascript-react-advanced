import React from 'react'
import PropTypes from 'prop-types'
import PetShop from './PetShop'



function App () {
  const handleClick = () => (
    console.log('Iniciando Banho')
  )
  return (
    <PetShop
    dogs = {2} /* if this number is removed it will return a warning */
    onClick = {handleClick} 
    status = 'Done'
    />
    )
}

export default App