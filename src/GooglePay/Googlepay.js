import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import './Googlepay.css';

const Googlepay = ({product}) => {
  return (

    <GooglePayButton
    environment="TEST"
    paymentRequest={{
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: product,
        currencyCode: 'INR',
        countryCode: 'IN',
      },
       shippingAddressRequired:true,
       callbackIntents:["PAYMENT_AUTHORIZATION"]
    }}
  
  
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}
  
  
    onPaymentAuthorized={paymentData=>{
      console.log(paymentData);
      return {transactionState:'SUCCESS'}
  }}
  
    existingPaymentMethodRequired='false'
    buttonColor="white"
    buttonType="Pay"
    buttonLocale="en"
    buttonSizeMode="fill" className='googlepay'
  
     /> 
 
 

  )
}

export default Googlepay







