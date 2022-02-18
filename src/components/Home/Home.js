import React, { useState } from 'react'
import "./Home.css";

const Home = () => {
 

  return (
    <>

      <div className='row  brand '>
        <h2 className='text-center '><u>Brand Cars   <span></span> </u></h2>
      
        <div className='row mt-3 d-flex justify-content-around  '>
          <div className='col-sm-4 '>
            <div class="card m-3"   >
              <div class="card-body">
                <h5 class="card-title text-center fs-3 ">AUDI </h5>
                <img src="https://wallpaperaccess.com/full/5084449.jpg" width="400" h class="mx-auto d-block img-thumbnail m-3" />
              </div>
            </div>
          </div>
          
          <div className='col-sm-4 '>
            <div class="card m-3"   >
              <div class="card-body">
                <h5 class="card-title text-center fs-3 ">BMW</h5>
                <img src="https://www.teahub.io/photos/full/37-371956_bmw-cars-wallpapers-2014-hd-bmw-car-image.jpg" width="400"  class="mx-auto d-block img-thumbnail m-3" />
              </div>
            </div>
          </div>
         
          <div className='col-sm-4 '>
            <div class="card m-3"   >
              <div class="card-body">
                <h5 class="card-title fs-3">Rolls Royce</h5>
                <img src="https://cdn.wallpapersafari.com/52/42/kh6AtF.jpg" width="400" class="mx-auto d-block img-thumbnail m-3" />
              </div>
            </div>
          </div>
         
          
        </div>

      </div> 

    </>
  )
}

export default Home