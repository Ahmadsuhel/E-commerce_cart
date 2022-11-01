
import React,{useState,useE, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import {Helmet} from 'react-helmet'






const Shop = () => {
 
  const products = useSelector((state => state.allProducts.products));


 

  
  const renderList = products.map((productio) => {
    const { id, title, image, price, category ,} = productio;
    return (


   
   
   


   <div className='col-md-3 mb-4' key={id}>
         <div className="card  text-center h-100 p-4" style={{ boxshadow: '0 2px 10px rgb(0,0,0,0.8)'}}  >
             <div className='inner'>
              <img src={image}  height="200px" className="card-img-top" alt="product" />
              </div>
              <div className="card-body">
                <h5 className="card-title mb-0" style={{fontFamily:'verdana'}}>{title.substring(0,12)}</h5>
                <div className="d-flex justify-content-center">
                      <ReactStars
                        isHalf
                        size={35}
                        value={productio.rating.rate}
                        edit={false}
                      />
                
                <p className="d-flex lead align-self-end my-2">{` (${productio.rating.count})`}</p>
                </div>
                <p className="card-text lead fw-bold">₹{price}</p>
                <Link to={`/product/${id}`} className="btn btn-outline-dark" style={{fontFamily:'verdana'}}>Buy Now </Link>
              </div>
          
          </div>

       </div>
   

     
    );
  });



  return <>
   <Helmet>
        <title>Products</title>
        <meta name="description" content="Buy Eshopspot product"/>
        <meta name="keywords" content="Latest product "/>
      </Helmet>
  <div className="container mt-4">
<div className="row">
  <div className='col-12 mb-5'>
    <h2 className='fw-bold text-center' style={{color:'rgb(28,28,29)',fontFamily:'verdana'}}>Latest Products</h2>
   
  </div>
</div>
<div className='row justify-content-between'>

 {renderList} 

  
</div>

</div>
  
  </>;
  };

  

export default Shop







