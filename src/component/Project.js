import React from 'react'
import portfolio from "./image/portfolio.png"
import shoemart from "./image/shoemart.png"
import quiz from "./image/quiz.png"

export default function Project() {
  return (
    <section id='project' >
  
    <div className="container-fluid mt-5">
      <div className='project' >
      <h1 className='text-white  mt-5' >  My <span id='skill' >  Project's</span></h1>

      <div className="row">
        <div className="col-lg-4">
          
          <div className="card mt-5" data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <img src={portfolio} class="card-img-top h-100" alt='simple portfolio'/>
            <div class="card-body">
              <h5 class="card-title text-white">Simple Portfolio</h5>
              
              <a href="https://rgcbrajesh.github.io/portfoliobj/#home" class="btn btn-primary fw-bold">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        
          <div className="card mt-5" data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <img src={shoemart} class="card-img-top h-100" alt='simple portfolio'/>
            <div class="card-body">
              <h5 class="card-title text-white">Shoemart</h5>
              
              <a href="https://rgcbrajesh.github.io/Shoemart/" class="btn btn-primary fw-bold">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          
          <div className="card mt-5" data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <img src={quiz} class="card-img-top h-100" alt='simple portfolio'/>
            <div class="card-body">
              <h5 class="card-title text-white">Quiz Webpage</h5>
              
              <a href="https://rgcbrajesh.github.io/responsivequiz/" class="btn btn-primary fw-bold">Live Preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
