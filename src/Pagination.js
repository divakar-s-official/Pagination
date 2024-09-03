import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import ShimmerUI from './ShimmerUI';

const LIMIT = 20
const Pagination = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [products,setProducts] = useState([])
    const [numberOfPages,setNumberOfPages] = useState(0);
    useEffect(()=>{
        fetchProducts();
    },[currentPage])
    const fetchProducts = async() => {
        const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage*LIMIT}&select=title,price,thumbnail,description`);
        
        
        const json = await data.json();
        console.log(json);
        console.log("Hello");
        
        setProducts(json.products)
        setNumberOfPages(Math.ceil(json.total / LIMIT))
        console.log(numberOfPages);
        
        
    }
    if(products.length === 0) return <ShimmerUI />
    
  return (
    <>
    <div className='flex flex-wrap justify-center'>
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
    <div className='p-4 text-center mb-4'>
        {currentPage > 0 && <span onClick={()=>setCurrentPage(prevPage => prevPage - 1)}>Previous</span>}
        {[...Array(numberOfPages).keys()].map((pN) => (
            <span key={pN} className={"p-4 text-md shadow-sm " + (pN===currentPage&&'font-bold text-underline shadow-black')}
            onClick={()=>setCurrentPage(pN)}
            >{pN}</span>
        ))}
        {currentPage < numberOfPages-1 && <span onClick={()=>setCurrentPage(prevPage => prevPage + 1)}>Next</span>}
    </div>
    </>
  )
}

export default Pagination;