import React from 'react'

const Category = () => {
    const arry=[1,1,1,1,1,1,1,11,1,1]
    return (
        <>
            <div className='mt-10 flex justify-center flex-wrap items-center w-[65%] m-auto border border-[#e0e0e0] '>

{
    arry.map(()=>{
        return(
            <div  className=' h-40 w-40  flex justify-center items-center'>
            <div className='h-28 w-28 hover:scale-110 cursor-pointer transition-[1s] flex justify-center items-center rounded-full bg-gray-300'>d</div>
        </div>
        )
    })
}
               
            </div>
        </>
    )
}

export default Category
