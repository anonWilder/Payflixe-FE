import React from 'react'

function Footer() {
  return (
    <footer className="footer-area pt-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-widget" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
                        data-aos-once="true">
                        <div className="widget-logo">
                            <img src="assets/images/logo.png" className="black-logo" alt="image"/>
                            <img src="assets/images/logo-2.png" className="white-logo" alt="image"/>
                        </div>
                        <p>To get exclusive updates and benefits.</p>
                        <form className="newsletter-form" data-bs-toggle="validator">
                            <input type="email" className="input-newsletter" placeholder="Enter email" name="EMAIL" required
                                autocomplete="off"/>
                            <button type="submit" className="default-btn">Subscribe</button>
                            <div id="validator-newsletter" className="form-result"></div>
                        </form>
                        <ul className="widget-social">
                            <li>
                                <a href="https://www.facebook.com/EnvyTheme" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/?lang=en" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/signup" target="_blank">
                                    <i className="ri-linkedin-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="60"
                        data-aos-duration="600" data-aos-once="true">
                        <h3>Company And Team</h3>
                        <ul className="quick-links">
                            <li><a href="team.html">Company And Team</a></li>
                            <li><a href="blog.html">News And Blog</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="help-center.html">Affiliates And Partnerships</a></li>
                            <li><a href="about-us.html">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="70"
                        data-aos-duration="700" data-aos-once="true">
                        <h3>Resources</h3>
                        <ul className="quick-links">
                            <li><a href="help-center.html">Security</a></li>
                            <li><a href="faq.html">FAQ's</a></li>
                            <li><a href="help-center.html">Community</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-widget" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800"
                        data-aos-once="true">
                        <h3>Contact Info</h3>
                        <ul className="info-links">
                            <li><span>Location:</span> 27 Division St, 1100. E Denver, CO 80237, USA</li>
                            <li><span>Email:</span> <a
                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#096a66677d686a7d4960676f66276a6664"><span
                                        className="__cf_email__"
                                        data-cfemail="f98a978c9f9fb99e94989095d79a9694">[email&#160;protected]</span></a>
                            </li>
                            <li><span>Phone:</span> <a href="tel:44789289524329">+44 7892 8952 4329</a></li>
                            <li><span>Fax:</span> <a href="tel:1212-9876543">+1-212-9876543</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <p>
                        Copyright @
                        <script data-cfasync="false"
                            src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                        <script>document.write(new Date().getFullYear())</script> Snuff All Rights Reserved by
                        <a href="https://hibootstrap.com/" target="_blank">
                            HiBootstrap
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer