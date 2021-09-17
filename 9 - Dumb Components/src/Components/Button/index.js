import React from 'react'
import PropTypes from 'prop-types'


function Button(props) {
    const {children, onClick} = props
    return (
        <button onClick={onClick}>Botão 1 {children}</button>
    )
}

Button.propTypes = {
    onclick: PropTypes.func.isRequired
}

export default Button