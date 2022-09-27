import React from 'react'


const MainContainer = (props) => {
    return (
        <div className='card m-5 shadow p-3 mb-5 bg-white rounded'>
            {props.children}
        </div>
    )
}

export default MainContainer




