import React from 'react'

const Header = (props) => {
    return (
        <header className='pb-3'>
            <h1>{props.text}</h1>
        </header>
    )
}

export default Header