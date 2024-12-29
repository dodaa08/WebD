import React from 'react'

function Child({children}) {    
    return (
        <>
        <div className='bg-black py-2 px-5 rounded-xl flex justify-center text-white'>
            {children}
        </div>
        </>
    )
}

export default Child
