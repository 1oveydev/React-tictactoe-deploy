import React, { Component } from 'react'
import "./Square.css"

const Square = (props) => {
    return (
        <button className='Square' 
            onClick={ () => { props.onClick() } } >
            {props.value}
        </button>
    )
}

export default Square

