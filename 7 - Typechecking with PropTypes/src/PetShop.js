import React from 'react'
import PropTypes from 'prop-types'



function PetShop (props) {
    const {dogs, cats, customers,onClick,status} = props
    return (
    <div>
        <h1>Dogs {dogs} </h1>
        <h2>Cats {cats} </h2>
        <div>
            Customers {customers}
        </div>  
        <button onClick={onClick}>Banho no Pet</button>  
    </div>
    )
}
PetShop.defaultProps = {
    dogs: PropTypes.number.isRequired,
    cats: 0,
    customers:[1,1]
}
PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf('Complete', 'Disabled')
}

export default PetShop