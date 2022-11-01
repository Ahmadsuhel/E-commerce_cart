import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'
import {Helmet} from 'react-helmet'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Buy Eshopspot product"/>
        <meta name="keywords" content="Our Services,Free Shipping,24/7 support,Secure Payment,Secure,Our Brands
       Hassle free,Fast delivery "/>
      </Helmet>
    <section className="about_section layout_padding long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p style={{fontFamily:'"Gill Sans Extrabold", sans-serif'}}>
           We believe that accessories complete the look,our goal is to create stunning high
           quality accessories and bring them to you!<br/>
           We are here for you every step of the way making sure you are matched with the perfect accessories.
            </p>
            <NavLink to='/contact' className='btn btn-lg btn-color'>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/features-4.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>


<section id="service" className="atf-service-area atf-section-padding">
	 <div className="container">
          <div className='text-center'>
          <h2 className='mb-4'style={{fontFamily:"verdana"}}>Our Services</h2>
          </div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 mt-lg-0 mt-md-0 mt-4">
							<div className="atf-single-service-wrap text-center">
								<div className="atf-single-service-wrap">
									<div className="atf-services-icon text-center mb-4">
										<i className="fas fa-shipping-fast"></i>
									</div>
									<div className="atf-service-content">
										<h4 className='fw-bold' style={{fontFamily:"verdana"}}>Free Shipping</h4>
										<p>Hassle free and Fast delivery available to each of our customers</p>
									</div>
								</div>
							</div>   
						</div>
						
						<div className="col-lg-4 col-md-6  mt-lg-0 mt-md-0 mt-4">
							<div className="atf-single-service-wrap text-center">
								<div className="atf-single-service-wrap">
									<div className="atf-services-icon text-center mb-4">
										<i className="fas fa-envelope-open-text"></i>
									</div>
									<div className="atf-service-content">
										<h4  className='fw-bold' style={{fontFamily:"verdana"}}>24/7 support</h4>
										<p>We are up 24X7 feel free to contact us. +919870677997</p>
									</div>
								</div>
							</div>   
						</div>
						
						<div className="col-lg-4 col-md-6  mt-lg-0  mt-4">
							<div className="atf-single-service-wrap text-center">
								<div className="atf-single-service-wrap">
									<div className="atf-services-icon text-center mb-4">
										<i className="fas fa-money-bill-alt"></i>
									</div>
									<div className="atf-service-content">
										<h4  className='fw-bold'  style={{fontFamily:"verdana"}}>Secure Payment</h4>
										<p>Our servers are always updated with best in class security.</p>
									</div>
								</div>
							</div>   
						</div>
					</div>
				</div>
</section>

<section className="mb-4 bg-lighti">
     <div className="container ">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h2  style={{fontFamily:"verdana"}}>Our Brands</h2>
                   
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel ">
                    <div className="row d-flex flex-row">
                       
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                <i className="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>
                      
                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                          
                                <div className="carousel-inner product-links-wap" role="listbox">

                           
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                               <img className="img-fluid brand-img" src="./images/brand_01.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                               <img className="img-fluid brand-img" src="./images/brand_02.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                               <img className="img-fluid brand-img" src="./images/brand_03.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_04.png" alt="Brand Logo"/>
                                            </div>
                                        </div>
                                    </div>


									<div className="carousel-item">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_01.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_02.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_03.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_04.png" alt="Brand Logo"/>
                                            </div>
                                        </div>
                                    </div>



									<div className="carousel-item ">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_01.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_02.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_03.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <img className="img-fluid brand-img" src="./images/brand_04.png" alt="Brand Logo"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                

                                </div>
                               
                            </div>
                        </div>
                     
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>


</>


  )
}

export default About