import React from 'react'

const Backdrop = ({ onClick }) => {
    return (
        <div className='my-backdrop' onClick={onClick}>Backdrop</div>
    )
}

export default Backdrop