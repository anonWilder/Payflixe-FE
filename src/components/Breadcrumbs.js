import React from 'react'

function Breadcrumbs() {
  return (
    <div className="page-banner-area">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-6">
                    <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500"
                        data-aos-once="true">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="page-banner-image" data-aos="fade-left" data-aos-delay="50" data-aos-duration="500"
                        data-aos-once="true">
                        <img src="assets/images/page-banner/banner.png" alt="image"/>
                        <div className="banner-shape">
                            <img src="assets/images/page-banner/shape.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumbs