import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
 import './Footer.css'
 const Footer = () => {
    const footerStyle = {
        backgroundColor: "#181a20", 
        color: "#fff", 
        padding: "60px 0 0", 
        justifycontent: "space-between",
    };
  return (
    <div className="main-footer" style={footerStyle}>
    <div className="container">
        <div className="row">
            {/* column-1   */}
            <div className="col-md-3 col-sm-6">
                <a className="footer-logo" href="index.html">
                    {/* <img className="mb-3" src={logo} alt="" /> */}
                </a>

                <div className="contact-info">
                    <p className="text text-white mb-2">Address</p>
                    <h6 className="info-phone">
                        <a>Younity,<br />Om Tower Main Dwarka Expressway,<br /> Gurgoan
                        </a>
                    </h6>

                    <span >Customer Care No.</span>
                    <br />
                    <span className="info-phone"><a href="+919289051300">+91 92890 51300</a></span>

                    <div className="contact-info">
                        <span className="info-title">Email</span>
                        <h6 className="info-mail">
                            <Link href="mailto:info@silvertone.co.in">info@Younity.co.in</Link>
                        </h6>
                    </div>


                </div>



            </div>
            {/* column2 */}
            <div className="col-md-3 col-sm-6">
                <h5>Popular Search</h5>
                <ul className=" footerlist list-unstyled">
                    <li><Link to="#">Web Design</Link></li>
                    <li><Link to="#">Fullstack Web Developer</Link></li>
                    <li><Link to="#">App Developer</Link> </li>
                    <li> <Link to="#">Data Science</Link></li>
                </ul>

            </div>
            {/* column3 */}
            <div className="col-md-3 col-sm-6">
                <h5>Quick Links</h5>
                <ul className=" footerlist list-unstyled">
                    <li><Link to="#">Terms of Use</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Pricing Plans</Link></li>
                </ul>


            </div>
            {/* column4 */}
            <div className="col-md-3 col-sm-6">

                <ul className=" footerlist list-unstyled">
                    <li><Link to="#">Our Services</Link></li>
                    <li><Link to="#">Contact Support</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">FAQs</Link></li>
                </ul>


            </div>

        </div>

<hr className="footerLine"/>

<div className="container white-bdrt1 py-4">
<div className="row">
<div className="col-sm-6">
  <div className="text-center text-lg-start">
    <p className="copyright-text text-gray ff-heading"> Younity &Copyright;{new Date().getFullYear()} ©Younity. All Rights Reserved</p>
  </div>
</div>

<div className="col-sm-6">
  <div className="social-widget text-center text-sm-end">
    <div className="social-style1">
      <a className="text-white me-2 fw600 fz15" href="#">Follow us</a>
      <a href="#" target="_blank">
      <CiYoutube className="list-inline-item"  />
      </a>
      <a href="#">
        <FaTwitter className="list-inline-item" />
      </a>
      <a href="https://www.instagram.com/younity.in/" target="_blank">
        <FaInstagram className="list-inline-item" />
      </a>
      <a href="https://www.linkedin.com/company/younity-in/?originalSubdomain=in">
        <FaLinkedinIn className="list-inline-item" />
      </a>
    </div>
  </div>
</div>
</div>
</div>



    </div>
</div>
  )
}
export default Footer
