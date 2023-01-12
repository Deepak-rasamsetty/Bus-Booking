import React from 'react'

export default function LoadingPage() {
  return (
    <div class=" d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
  <div className='text-center'>
 <i class="bi bi-clock"></i>
     <h5>Please wait while we validate the payment</h5>
     <figcaption>Page will automatically redirect to confirmation page once done</figcaption>
    
  </div>
</div>
  )
}
