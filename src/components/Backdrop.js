import React from 'react'

const Backdrop = ({ onClick }) => {
    return (
        <div className='my-backdrop' onClick={onClick}></div>
    )
}

export default Backdrop