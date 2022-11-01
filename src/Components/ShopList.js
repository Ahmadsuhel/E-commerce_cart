
import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProduct} from '../Actions/Actions';
import Shop from './Shop';
import Loading from './Loading';
const ShopList = () => { 
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false)
   

    useEffect(()=>{
      
        dispatch(fetchProduct());
       
        setTimeout(()=>{
          setLoading(true)
        },2000)
      
    },[])
    console.log("products",products)
    // console.log("checkerere",fetchProduct,loading)
  return (
    <>
    {loading? <div className='row'><Shop/></div>:<Loading/>}

    </>

    //  <div className='row'><Shop/></div>
  
  )
}

export default ShopList
