import React from 'react'

const ProductCard = ({product}) => {
    const {title,price,description,thumbnail} = product;
   return (
    <>
    <div className='m-4 p-4 border-none flex flex-col w-72 rounded-lg shadow-sm shadow-gray-400 cursor-pointer justify-around'>
        <img className='h-52 w-[100%] object-contain self-center' src={thumbnail} alt="" />
        <h1 className='pt-2 font-bold text-xl'>{title}</h1>
        
        <p className='py-1 text-sm w-[30ch] text-slate-500'>{description}</p>
        <h2 className='text-lg p-0 self-end'><b>Rs. {Math.round(price)} /-</b></h2>
        <button className='bg-blue-200 self-end px-4 py-2 rounded-lg hover:bg-blue-100'>Add to cart</button>

    </div>
    

    </>
  )
}

export default ProductCard