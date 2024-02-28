import React from 'react'

const Submenu = () => {
    return (
        <div className='w-64'>
            <div className='w-full h-full py-3 border-r rounded-r-lg dark:bg-neutral-900 bg-neutral-100 shadow-lg'>
                <div className='px-3 text-xl font-bold font-poppins'>
                    PROJECT: SIMPLIFIED
                </div>
                <div className='flexxx justify-center items-start h-1/4 p-3 m-2 border rounded-lg text-sm font-poppins'>
                    Quick Jump
                </div>
                <div className='flexxx justify-center items-start h-1/4 p-3 m-2 border rounded-lg text-sm font-poppins'>
                    Upcoming Plans
                </div>
                <div className='flexxx justify-center items-start h-1/4 p-3 m-2 border rounded-lg text-sm font-poppins'>
                    Draft Items
                </div>
            </div>
        </div>
    )
}

export default Submenu