import React, { useEffect,useRef } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProduct} from '../Actions/Actions';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {  settings } from "../constants/slickSettings";
import './Header.css';


const Header = () => {
 
    const products=useSelector((state)=>state.allProducts.products)
    
  
  
    
    const dispatch=useDispatch();
    useEffect(()=>{
     
        dispatch(fetchProduct())
 
    },[])

    console.log('chekitis',products)

//     const renderList = products.map((productio) => {
//     const { id, title, image, } = productio;
//     return (
//         <div className="col-12 col-md-4 p-5 mt-3"  key={id}>
//         <Slider className="m-5" {...settings}>
//           <NavLink>
//             <img src={image} className="rounded-circle img-fluid border" height="200" 
//             width="100"/>
//         </NavLink>
//         <h5 className="text-center mt-3 mb-3">{title}</h5>
//         <p className="text-center"><a class="btn btn-success">Go Shop</a></p>
//         </Slider>
    
//       </div>
      
//     );
//   });



  return (
      <>
    <section className="slider_section long_section">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">

                    <h1 className='mb-3'>
                      Realize Your <br/>
                      Online Potential
                    </h1>
                    
                    <p>
                      We work with global brands and have created an application for You
                      to do your shopping
                    </p>
                    <div className="btn-box">
                      <NavLink to='/products'className=' btn btn1' >Shop Now</NavLink>
                      
                    </div>

   
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="images/about-hero.svg "   alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          
     
       
 
    </section>







   
    <div className="container py-5" style={{overflowX:'hidden'}}>
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h2 >Categories of The Month</h2>
               
            </div>
        </div>
        <div className="row">
           {/* {renderList} */}

           <Slider className='m-5'  {...settings}>
       {
        products.map((product) => (
            <div key={product.id}>
            <NavLink to="/products" className="text-decoration-none text-dark fw-bold fs-4">
          <div className="m-2 p-5" >
                <img
                  src={product.image}
                  className="card-img-top thumbnail"
                  alt={product.title}
                  height="200px"
                  width="100px"
                />
                <h5 className=" display-7 card-title mb-0 mt-5 fs-5" >{product.title}</h5>
            </div>
            </NavLink>
            </div>
        ))
        }
</Slider>



       <div className="row">
       <div className="card  m-5  " style={{border:' 5px solid #CDC4F9',width:"90%"}} >
          <div className="card-header lead">
            Thought for today
          </div>
            <div className="card-body" >
              <blockquote className="blockquote mb-0">
                <p style={{fontFamily:"verdana"}} className="fontPara"> “Don’t forget about those people who have spent their hard-earned money with you. They could be responsible for substantial online sales later down the line. Treat them like your family and take them with you on your journey.”</p>
                <footer className="blockquote-footer">
                Matt Thorpe, <cite title="Source Title">founder and senior director of M.Thorpe & Associates Inc.</cite>
                </footer>
              </blockquote>
            </div>
          </div> 
       </div>
    


           
        </div>

     
   

    </div>



   
     
    



    </>



  )
}

export default Header