import React from 'react'
import {Helmet} from 'react-helmet'

const Contact = () => {
 const btnStyle={
 background:'rgb(98,83,243)',
 color:'white',
 fontFamily:'verdana'

 }





const heading={

    fontSize: '2.5rem',
    fontWeight: '600',
    color:'rgb(28,28,29)',
    fontFamily:'verdana'
}
  return (
   <>

<Helmet>
        <title>Contact us</title>
        <meta name="description" content="Feel free to contact us"/>
        <meta name="keywords" content="contact us "/>
      </Helmet>
   <div className="container-fluid  py-5"style={{background:"#f9fafa"}} >
        <div className="col-md-6 m-auto text-center">
            <h3  style={heading}>Contact Us</h3>
           
        </div>
    </div>
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.531446943956!2d78.7746603!3d29.5300138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a24ffffffffff%3A0x3017b72d3d253fd7!2sJim%20Corbett%20National%20Park!5e0!3m2!1sen!2sin!4v1665779613764!5m2!1sen!2sin" width="100%" height="450px" 
    style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


<div className="container py-5" style={{background:"#f9fafa",fontFamily:'verdana'}}>
        <div className="row py-5">
            <form className="col-md-9 m-auto" method="post" role="form" action="https://formspree.io/f/mjvzodqb">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputname">Name</label>
                        <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" autoComplete='off' required/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputemail">Email</label>
                        <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" autoComplete='off' required/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputsubject">Mobile Number</label>
                    <input type="number" className="form-control mt-1" id="subject" name="Mobile" placeholder="Mobile Number" autoComplete='off' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputmessage">Message</label>
                    <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"/>
                </div>
                <div className="row">
                    <div className="col text-end mt-2 ">
                        <button type="submit" className="btn btn-lg px-3" style={btnStyle}>Let’s Talk</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    
    </>
  )
}

export default Contact