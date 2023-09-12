const Header = () => {
    return ( 
        <div className="navbar-area navbar-style-two">
        <div className="main-responsive-nav">
            <div className="container">
                <div className="main-responsive-menu">
                    <div className="logo">
                        <a href="index.html">
                            <img src="assets/images/logo.png" className="black-logo" alt="image"/>
                            <img src="assets/images/logo-2.png" className="white-logo" alt="image"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-navbar">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/images/logo.png" className="black-logo" alt="image"/>
                        <img src="assets/images/logo-2.png" className="white-logo" alt="image"/>
                    </a>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    Online Banking
                                    <i className="ri-arrow-down-s-line"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link">Money Transfer Demo - 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-2.html" className="nav-link">Money Transfer Demo - 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-3.html" className="nav-link active">Online Banking Demo</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="about-us.html" className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="compare-pricing.html" className="nav-link">Compare Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Pages
                                    <i className="ri-arrow-down-s-line"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Others Pages
                                            <i className="ri-arrow-right-s-line"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="help-center.html" className="nav-link">Help Center</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="coverage.html" className="nav-link">Coverage</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="protecting-your-money.html" className="nav-link">Protecting Your
                                                    Money</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="use-cases.html" className="nav-link">Use Cases</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="getting-started.html" className="nav-link">Getting Started</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="features.html" className="nav-link">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pricing.html" className="nav-link">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="team.html" className="nav-link">Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="faq.html" className="nav-link">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="testimonials.html" className="nav-link">Testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            User Pages
                                            <i className="ri-arrow-right-s-line"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="login.html" className="nav-link">Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="register.html" className="nav-link">Register</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="forgot-password.html" className="nav-link">Forgot Password</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="terms-of-service.html" className="nav-link">Terms of Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="error-404.html" className="nav-link">404 Error</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Blog
                                    <i className="ri-arrow-down-s-line"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="blog.html" className="nav-link">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog-details.html" className="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div className="others-options d-flex align-items-center">
                            <div className="option-item">
                                <a href="login.html" className="optional-btn">Log In</a>
                            </div>
                            <div className="option-item">
                                <a href="register.html" className="default-btn">Register Now</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="others-option-for-responsive">
            <div className="container">
                <div className="dot-menu">
                    <div className="inner">
                        <div className="circle circle-one"></div>
                        <div className="circle circle-two"></div>
                        <div className="circle circle-three"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="option-inner">
                        <div className="others-options d-flex align-items-center">
                            <div className="option-item">
                                <a href="login.html" className="optional-btn">Log In</a>
                            </div>
                            <div className="option-item">
                                <a href="register.html" className="default-btn">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default Header;