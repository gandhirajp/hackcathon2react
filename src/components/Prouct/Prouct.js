import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

const Prouct = () => {
  return (
    <>
      {/* Audi start */}
      <div className='row'>
        <div className='row'>
          <div className='col-sm'>
            <div className='card mt-2 m-3 px-3 p-1 bg-primary  '>
              <h2 >Audi Car Collection</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsA4" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://cdn.bigboytoyz.com/new-version/products/2E40E6B9-17D1-4A2A-889C-DF1C3073E393.jpg" class="d-block w-100" alt="Audi A4" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdn.audi.ua/media/Kwc_Box_MetaTagsContent_OpenGraphImage_Component/59036-metaTags-ogImage/dh-1500-23ade3/97ec2a7d/1627886852/A4-model.jpg" class="d-block w-100" alt="Audi A4" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://img.dtnext.in/Articles/2021/Jan/202101081611230283_New-Audi-A4-arrives-in-Coimbatore_SECVPF.gif" class="d-block w-100" alt="Audi A4" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsA4" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsA4" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">Audi A4</h5>
                <hr />
                <h4>Price: {`₹ 3000 /day`}</h4>
                <p class="card-text">Is the Audi A4 a good car?
                  Is the Audi A4 a Good Car? Yes, the 2021 A4 is a good luxury small car.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsRs7" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200623123243_Audi-RS7_Sportback.jpg&w=700&q=90&c=1" class="d-block w-100" alt="Audi Rs7" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://www.topgear.com/sites/default/files/cars-car/image/2019/09/ttsc0048.jpg" class="d-block w-100" alt="Audi Rs7" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cached-images.bonnier.news/bnl01/standard-article/496b8f04-bd0f-4d24-a896-de507cf6b606/40458022-dc7d-4e65-9387-1b88fb6e5374/annan/0/original.jpg" class="d-block w-100" alt="Audi Rs7" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsRs7" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsRs7" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">Audi Rs7</h5>
                <hr />
                <h4>Price: {`₹ 4000 /day`}</h4>
                <p class="card-text">The RS7 interior doesn't scream "supercar" performance either.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsE-tron" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Audi_e-tron_55_quattro_IAA_2019_JM_0502.jpg/800px-Audi_e-tron_55_quattro_IAA_2019_JM_0502.jpg" class="d-block w-100" alt="Audi E-tron" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://i0.wp.com/der-autotester.de/wp-content/uploads/2021/02/IMG_1366.jpg" class="d-block w-100" alt="Audi E-tron" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://www.autozeitung.de/assets/styles/article_image/public/field/images/audi-3-tron-55-quattro-1.jpg" class="d-block w-100" alt="Audi E-tron" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsE-tron" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsE-tron" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">Audi E-tron</h5>
                <hr />
                <h4>Price: {`₹ 3500 /day`}</h4>
                <p class="card-text">The 2022 e-tron is definitely worth your consideration as you research the luxury hybrid and electric SUV class.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Audi start */}

        {/* Bmw car  */}
        <div className='row'>
          <div className='col-sm'>
            <div className='card mt-2 m-3  px-3  bg-primary '>
              <h2 >BMW Car Collection</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsX6" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://cdni.autocarindia.com/ExtraImages/20200608074149_2020-BMW-X6-front.jpg" class="d-block w-100" alt="BMW X6" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://bharathautos.com/wp-content/uploads/2020/06/all-new-3rd-generation-2020-bmw-x6-front-fascia-india-pictures-images-photos-snaps.jpg" class="d-block w-100" alt="BMW X6" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FNews%2F2020-BMW-X6-side.jpg&c=0" class="d-block w-100" alt="BMW X6" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsX6" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsX6" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">BMW X6</h5>
                <hr />
                <h4>Price: {`₹ 5500 /day`}</h4>
                <p class="card-text">The BMW X6 Reliability Rating is 2.0 out of 5.0, which ranks it 16th out of 19 for luxury fullsize SUVs.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsZ4" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/2019_BMW_Z4_M40i_Front.jpg" class="d-block w-100" alt="BMW Z4" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/BMW_Z4_M40i_2020_blue_1.jpg" class="d-block w-100" alt="BMW Z4" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdn.bmwblog.com/wp-content/uploads/2019/02/BMW-Z4-Misano-Blue-1.jpg" class="d-block w-100" alt="BMW Z4" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsZ4" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsZ4" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">BMW Z4</h5>
                <hr />
                <h4>Price: {`₹ 5000 /day`}</h4>
                <p class="card-text">Highs Two perky powertrains, well-tuned chassis, hushed cabin with top in place.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsSeries" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://cdni.autocarindia.com/ExtraImages/20201014012716_BMW-2-Series-Gran-Coupe-front-tracking-02.jpg" class="d-block w-100" alt="BMW 2 Series" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://www.financialexpress.com/wp-content/uploads/2020/10/2020-BMW-2-Series-Gran-Coupe-Review8-620x400.jpg" class="d-block w-100" alt="BMW 2 Series" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://www.motorbeam.com/wp-content/uploads/2020-BMW-2-Series-Gran-Coupe-31-1200x900.jpg" class="d-block w-100" alt="BMW 2 Series" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsSeries" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsSeries" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body ">
                <h5 class="card-title fw-bold fs-2">BMW 2 Series</h5>
                <hr />
                <h4>Price: {`₹ 4000 /day`}</h4>
                <p class="card-text"> Its design is inspired by the 8 Series Gran Coupé. It features frameless door windows.</p>
                <div className='text-center'>
                  <div className='text-center'>
                    <Link to='/cart' className='cart'>
                      <a class="btn btn-primary  ">Book</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bmw end */}

        {/* Rolls rouse start */}
        <div className='row'>
          <div className='col-sm'>
            <div className='card mt-2 m-3 px-3 p-1 bg-primary  '>
              <h2 >Rolls Royce Collection</h2>
            </div>
          </div>
        </div>
        <div className='row  d-flex justify-content-center'>
          <div className='col-sm-4 '>
            <div class="card m-3 p-2" >
              <div id="carouselExampleControlsrolls" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Ghost/8051/1601280317407/front-left-side-47.jpg" class="d-block w-100" alt="rolls-royce ghost" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.ytimg.com/vi/L42-aFe8bMo/maxresdefault.jpg" class="d-block w-100" alt="Audi RS7" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1pAM-vFUyyzBHViP5JG0sSZlVAKDhRnbP2BurrvTcum4xujYWXD1leMA-Z71ZbwIPkI&usqp=CAU" class="d-block w-100" alt="Audi e-tron" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsrolls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsrolls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold fs-2">Rolls-Royce Ghost</h5>
                <h4>Price: {`₹ 10000 /day`}</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/cart' className='cart'>
                  <a class="btn btn-primary  ">Book</a>
                </Link>
              </div>
            </div>
          </div>


        </div>
        {/* Rolls rouse end */}
      </div>
    </>
  )
}

export default Prouct