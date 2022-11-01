import React, { useEffect } from 'react'
import {toastr} from 'react-redux-toastr'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleProduct,AddToCart,} from '../Actions/Actions'
import './ShopDetails.css';
import Helmet from 'react-helmet'



const ShopDetails = () => {
const product=useSelector((state)=>state.product);



 




console.log("fdsfsdfs",product)
const{image,price,title,category,description}=product
const{productId}=useParams();
const dispatch=useDispatch();
console.log("product gfgdfgfdgggdgddggdf")


useEffect(()=>{
    
    if(productId && productId!=="")
   
    dispatch(fetchSingleProduct(productId));
    // eslint-disable-next-line
},[])


const addTocart=(product)=>{
    dispatch(AddToCart(product))
};



  return (
      
      <div className='container my-5' style={{background:"#f9fafa",fontFamily:'verdana'}}>
          {Object.keys(product).length===0?(<>loading...</>):(
              <div className='row'>
                  <Helmet>
                      <title>{title}</title>
                      <meta name="description" content={description}/>
                  </Helmet>
               <div className='col-md-6 text-center mt-4 imageSize'>
               <img src={image} alt={title} />
                 </div>
                <div className='col-md-6 mt-3'>
               <h4 className='text-uppercase text-black-50'>{category}</h4>
               <h1 className='display-6 fs-3'>{title}</h1>
               <p className='lead fw-bold '>
                   Rating { product.rating && product.rating.rate }
                   <i className='fa fa-star text-warning ms-2'></i>
               </p>
               <h3 className='dispaly-6'>₹{price}</h3>
               <p className='lead fs-6'>{description}</p>
               <button className='btn btn-outline-dark  mb-5' onClick={()=>{addTocart(product);toastr.success('Product is Successfully added');}}>
                   Add to Cart
                   </button>
               <Link to={'/cart'} className='btn btn-dark ms-3 mb-5'>
                   Go to Cart
               </Link>
       
                </div>
                </div>
          )
          }
          
    </div>
  )
}

export default ShopDetails