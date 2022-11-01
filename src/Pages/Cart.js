import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, DeleteToCart,DeleteSingleCart, ClearCart } from '../Actions/Actions'
import Googlepay from "../GooglePay/Googlepay";
import './Cart.css';
import {toastr} from 'react-redux-toastr'
import {Helmet} from 'react-helmet'


const Cart = () => {
  const state = useSelector((state) => state.carthandle);
  const dispatch = useDispatch();

  const DeleteSingCart=(product)=>{
    dispatch(DeleteSingleCart(product))
  
};

  const totalCost = useMemo(
    () => state.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2),
    [state]
  );


  const EmptyCart=()=>{
    return(
      <>
    <div className="card my-5">
            <div className="card-body d-flex justify-content-center">
              <div>
                <h1 className="card-title">Empty Cart</h1>
                <p className="card-text">Come, lets do some shopping!!!</p>
              </div>
            </div>
          </div>
      </>
    )
  }
  const ShowCart = () => {

    return (
      <>
        {state.map((product) => (
          //  <div className="card mt-3  " key={product.id} >
          //    <div className="row g-0">
          //      <div className="col-md-4 d-flex justify-content-center" >
          //        <img
          //          src={product.image}
          //          className="img-fluid rounded-start p-5"
          //          alt={product.title}
          //          style={{ maxHeight: 200, maxWidth: 200 }}
          //        />
          //      </div>
          //    <div className="col-md-8">
          //        <div className="card-body">
          //          <h5 className="card-title">{product.title}</h5>
          //          <p className="card-text">{product.description}</p>
          //          <p className="card-text fw-bold my-0">₹{product.price}</p>
          //          <div className="input-group my-2">
          //            <button
          //              className="btn btn-outline-secondary"
          //              type="button"
          //              onClick={() => dispatch(DeleteToCart(product))}
          //            >
          //            -
          //            </button>
          //            <input
          //            type="number"
          //              className="form-control"
          //             value={product.qty}
          //              readOnly
          //            />
          //            <button
          //              className="btn btn-outline-secondary"
          //              type="button"
          //              onClick={() => dispatch(AddToCart(product))}
          //            >
          //              +
          //            </button>
          //            <p className="card-text lead fw-bold align-self-center ms-2 my-0">
          //              Total ₹{product.price * product.qty}
          //            </p>
          //          </div>
          //        </div>
          //      </div>
          //    </div>
          //  </div>







    <div className="card rounded-3 mb-4" key={product.id}>
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={product.image}
              className="img-fluid rounded-3 img-sm" alt="Cotton T-shirt"/>
               <p className="lead fw-normal mt- ms-2">₹{product.price}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{product.title}</p>
           
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 d-flex text-center-md  ">
            <button className="btn btn-link px-2"
                 type="button"
                 onClick={() => dispatch(DeleteToCart(product))}>
                <i className="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" defaultValue={product.qty}  type="number"
              className="form-control form-control-sm" />

            <button className="btn btn-link px-2"
               type="button"
               onClick={() => dispatch(AddToCart(product))}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className=" mttt">₹{product.price * product.qty}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end1">
            <button className="text-danger btn" onClick={() =>{DeleteSingCart(product); toastr.warning('Product is Deleted');}}><i className="fas fa-trash fa-lg"></i></button>
       
            {/* <button onClick={notify}>delete< /button> */}
         
          </div>
        </div>
      </div>
    </div>
    

















       
            // <div className="col-md-9">
            //   <article className="card card-body mb-3" key={product.id}>
            //     <div className="row gy-3 align-items-center">
            //       <div className="col-md-6">
            //         <div className="aside">
            //           <img src={product.image} width='72' height='72' className="img-thumbnail img-sm" />
            //         </div>
            //         <div className="info">
            //           <p className="title">{product.title} </p> <span className="text-muted">
            //           </span>
            //         </div>
            //       </div>

            //       <div className="col-auto">
            //         <div className="input-group input-spinner">
            //           <button className="btn btn-light" type="button" onClick={() => dispatch(DeleteToCart(product))}>
            //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24"> <path d="M19 13H5v-2h14v2z"></path> </svg>
            //           </button>
            //           <input type="text" className="form-control" value={product.qty}
            //             readOnly />
            //           <button class="btn btn-light" type="button" onClick={() => dispatch(AddToCart(product))}>
            //             <svg xmlns="http://www.w3.org/ 2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24">
            //               <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"> </path> </svg>
            //           </button>
            //         </div>
            //       </div>

            //       <div className="col">
            //         <strong className="price">  Total ₹{product.price * product.qty}</strong>
            //       </div>



            //     </div>
            //   </article>
            // </div>

        



     





















        ))
        }
      </>
    );
  };






  // const Renderlist=()=>{
  //   return(
  //       <>
  //       <div className="row">
  //       <aside className="col-md-3">
  //             <div className="card">
  //               <div className="card-body">
  //                 <div class="input-group mb-3">
  //                   <input type="text" class="form-control" placeholder="Promo code" />
  //                   <button class="btn btn-light text-primary">Apply</button>
  //                 </div>



  //                 <dl className="dlist-align">
  //                   <dt>Discount:</dt>
  //                   <dd className="text-end text-success"> - $00.00 </dd>
  //                 </dl>



  //                 <dl class="dlist-align">
  //                   <dt>TAX:</dt>
  //                   <dd className="text-end text-danger"> + ₹00.00 </dd>
  //                 </dl>


  //                 <dl className="dlist-align">
  //                   <dt>Total:</dt>
  //                   <dd className="text-end text-dark h5"> ₹{totalCost} </dd>
  //                 </dl>


  //                 <hr />

  //                 <a href="#" class="btn btn-primary mb-2 w-100">Proceed payment</a>

  //               </div>
  //             </div>
  //           </aside>
        
  //        <ShowCart/>

         
   




         

  //        </div>

  //       </>

  //   )
  // }






  return (
    <div className="container" >
      {!state.length ? (
        <>
          <EmptyCart/>
        </>
      ) : (
        <>
         <Helmet>
        <title>Cart</title>
        <meta name="description" content={state.description}/>
        <meta name="keywords" content="shopping cart, payment "/>
      </Helmet>
<div className="container h-100 py-5">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-10">

    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fw-normal mb-0 text-black" style={{fontFamily:"verdana"}}>Shopping Cart</h3>
     
    </div>
 
       <ShowCart/>
      
       <button type="button" className="btn btn-custom1 btn-lg float-end1" onClick={() => dispatch(ClearCart())}>
     Clear Cart
       </button>
     
       <aside className="col-md-3 card-container ">
              <div className="card mb-3   ">
                <div className="card-body">
              

                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-end text-success"> - $00.00 </dd>
                  </dl>



                  <dl className="dlist-align">
                    <dt>TAX:</dt>
                    <dd className="text-end text-danger"> + ₹00.00 </dd>
                  </dl>


                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-end text-dark h5"> ₹{totalCost} </dd>
                  </dl>


                  <hr />
                 
                  <button className="btn btn-primary mb-2 w-100" style={{fontFamily:'verdana'}} data-bs-toggle="modal" data-bs-target="#exampleModal" >Proceed payment</button>
                </div>
              </div>
            </aside>
            </div>
            </div>
            </div>












   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title  fw-bold " id="exampleModalLabel" style={{fontFamily:'verdana',textAlign:'center'}}> Order Now</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body " style={{background:'#f9fafa'}}>

        <Googlepay product={totalCost} />
       
      </div>
   
    </div>
  </div>
           </div> 



        </>
      )}
    </div>
  );
}

export default Cart












