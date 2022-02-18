import React from 'react'
import "./Services.css"

const Service = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 ' >
        <div className='car mt-5 mx-5 car '>
          <img src="http://themes.potenzaglobalsolutions.com/html/cardealer/revolution/assets/e13ec-06-audi-s2.png" class="rounded mx-auto d-block w-100" alt="Audi RS7" />
        </div>
      </div>
      <div className='col-sm-6 '>
        <u> <h2 className='text-center mt-3'><span className='fs-1 '>S</span>ervices</h2></u>
        <div class="card text-center mx-4 mt-3 my-4">
          <div class="card-header fs-2">
            Bike Rent
          </div>
          <div class="card-body">
            <img src="https://m.economictimes.com/thumb/msid-71939224,width-1200,height-900,resizemode-4,imgsize-482211/the-amb-001-by-aston-martin.jpg" width="400" class="mx-auto d-block img-thumbnail m-3" />

            <h5 class="card-title">Expensive Bike</h5>
            <p class="card-text">Most Expensive Big Motor Bikes in the World.And more bike available heare</p>
          </div>
          <div class="card-footer text-muted">
           
          </div>
        </div>


      </div>
    </div>
  )
}

export default Service