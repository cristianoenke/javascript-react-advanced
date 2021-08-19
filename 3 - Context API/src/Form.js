import React,{useContext} from 'react'
import {ThemeContext} from './Theme'

function Form(){
    const context = useContext(ThemeContext)
    const renderForm = (
        <form>
            <label> Nome: </label>
            <input/>
            <label> Idade: </label>
            <input/>
            <label> E-mail: </label>
            <input/>
            <label> Telefone: </label>
            <input/>
        </form>
    )

    const renderNotLogged = (
        <h1> 
            É necessário fazer o login
        </h1>
    )

    return (
        <div>
        {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form