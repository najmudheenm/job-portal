import { Radio } from 'antd';
import React from 'react'


const JobCreate = () => {
  return (
    <React.Fragment>
       <section id="page-title" className="text-light" data-bg-parallax="images/parallax/contact-banner.jpeg">
            <div className="container">
                <div className="page-title">
                    <h1>Single Job Detail</h1>
                </div>
                <div className="breadcrumb">
                    <ul>
                        <li><a href="#">Home</a>
                        </li>
                        /
                        <li className="active"><a href="#">Job Details</a>
                        </li>
                        /
                        <li className="active"><a href="#">Single Job Detail</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        {/* <!-- Breadcrumb Section Start --> */}
        <div className="breadcrumb-section section bg_color--5 pt-60 pt-sm-50 pt-xs-40 pb-60 pb-sm-50 pb-xs-40">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-breadcrumb-content">
                            
                            <h1>Senior PHP Web Developer</h1>
                        </div>
                        <div className="job-meta-detail">
                            <ul>
                                <li className="posted">
                                    <i className="ml-10 mr-2 fa fa-clock"></i>
                                    <span className="text">Posted date: </span> 
                                    <span className="time">8 months ago </span>
                                </li> 
                                
                                <li className="expries">
                                    <i className="fa fa-hourglass"></i>
                                    <span className="text">Expries in: </span>
                                    <span className="date theme-color"> October 26, 2019 </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Breadcrumb Section Start --> */}

        {/* <!-- Job Meta Detail Box Section Start --> */}
        <div className="job-meta-detail-box section bg_color--5 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
            <div className="container">
                <div className="row g-0">

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-location-dot"></i>
                                <span>Work Location: </span>
                            </div>
                            <div className="field-value">Chicago, Illinois</div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-money-bill"></i>
                                <span>Salary </span>
                            </div>
                            <div className="field-value salary">$500 - $1,000 / month</div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-briefcase"></i>
                                <span>Type </span>
                            </div>
                            <div className="field-value"><a className="fw-600" href="#">Part Time</a></div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-tag"></i>
                                <span>Category </span>
                            </div>
                            <div className="field-value"><a href="#">Accounting</a></div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-graduation-cap"></i>
                                <span>Experience </span>
                            </div>
                            <div className="field-value"><a href="#"> 5 years</a></div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Single Meta Field Start --> */}
                        <div className="single-meta-field">
                            <div className="field-label">
                                <i className="fa fa-trophy"></i>
                                <span>Skills </span>
                            </div>
                            <div className="field-value">
                                <div className="job-skill-tag">
                                    <a href="#">CSS</a>
                                    <a href="#">PHP</a>
                                    <a href="#">WordPress</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Meta Field Start --> */}
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- Job Meta Detail Box Section End --> */}

        {/* <!-- Job Details Section Start --> */}
        <div className="job-details-section section pt-120 pt-lg-100 pt-md-80 pt-sm-50 pt-xs-40 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
            <div className="container">
                <div className="row">

                   

                    <div className="col-lg-8 order-lg-1 order-1 pr-55 pr-md-15 pr-sm-15 pr-xs-15">

                        <div className="job-detail-content">
                            <div className="field-descriptions mb-60 mb-sm-30 mb-xs-30">
                                <p>We are Looking for a skilled Ul/UX designer for our&nbsp;&nbsp;as&nbsp;&nbsp;product which includes a responsive web application, an Android app and an rOS app. Our ideal candidate should have the ability to turn client’s visions into intuitive designs.</p>

                                <h3>Job Description</h3>

                                <ul>
                                    <li>To interact with <strong>US Design Team</strong> in developing elesig-nsfiuvireframes in order to meet feature requirements in new/existing software systems.</li>
                                    <li>To provide graphics and styles for the design of wirefrarnes.</li>
                                    <li>To track daily progress and communicate changes (and their impact) to management team</li>
                                    <li>To work with project teams to create the best possible application design, understanding our clients’ requirements and users’ needs. Projects may be any combination of web, applications, and mobile.</li>
                                </ul>

                                <h3>Your Skills and Experience</h3>

                                <p><strong>Your Experience and Qualifications</strong></p>

                                <ul>
                                    <li>1-3 years of Ul/UX design experience for software, web apps and/or mobiLe devices.</li>
                                    <li>Mastery of core design concepts (composition &amp; Layout, coLor theory, typography, etc).</li>
                                    <li>Wire framing and Light technicaL documentation,</li>
                                    <li>Experience with user interface and visual design patterns.</li>
                                    <li>AbiLity to take a design from concept to wireframe to pixel perfect</li>
                                    <li>Understanding of the iterative design process.</li>
                                    <li>AbiLity to collaborate and take input from others and learn quickLy.</li>
                                    <li>AbiLity to clearly communicate and work with opinionated individuaLs.</li>
                                    <li>Understand the technicaL feasibfLities of both web and mobile.</li>
                                    <li>AbiLity to explain design decisions.</li>
                                </ul>

                                <p><strong>Nice-to-haves</strong></p>

                                <ul>
                                    <li>AbiLityto create front-end code (HTML/C5S/jQuery).</li>
                                    <li>Experience designing interfaces and interactions for reaL-worLd applications.</li>
                                    <li>Mobile app experiences a pLus.</li>
                                    <li>Experience with user interface and visual design patterns.</li>
                                    <li>Experience working in a structured, coLlaborative team environment (with cross-functionaL roles</li>
                                    <li>Like project managers, business associates and deveLopers).</li>
                                </ul>

                                <p><strong>How to apply?</strong></p>

                                <p>PLease send us a Resume and PortfoLios. Pixel-perfect mockups, UX )AraLkthroughs, UI designs, Live product Links and code are aft accepted. Send us via clinavine@career.com</p>

                                <h3>Why Youll Love Working Here</h3>

                                <ul>
                                    <li>Opportunities to work abroad (US, AUS)</li>
                                    <li>Compliance tufty to Vietnam Labor code</li>
                                    <li>Company trip, team-building events</li>
                                    <li>13th salary and project bonus</li>
                                    <li>Work-from-home poLicy</li>
                                    <li>Support Laptop</li>
                                    <li>Extra healthcare package</li>
                                </ul>
                            </div>
                            
                            <div className="job-apply">
                                <button className="btn btn-light" type="submit" id="widget-subscribe-submit-button"><i
                                    className="fa fa-paper-plane"></i>&nbsp;Apply Now</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        {/* <!-- Job Details Section End --> */}

        


       


        <footer id="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="widget">
                                <div className="widget-title clear-padd">Freston ANALYTICS Private limited</div>
                                <p className="mb-5"><br/> We provide organisations with premium software, web development
                                    services and access to a pool of expert developers who are extremely passionate
                                    about what they do.</p>
                                <a href="contact.html" className="btn btn-inverted" target="_blank">Get in Touch</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col">
                                    <div className="widget">
                                        <div className="widget-title">Discover</div>
                                        <ul className="list">
                                            <li><a href="#">GDPR</a></li>
                                            <li><a href="#">Terms of Use</a></li>
                                            <li><a href="#">Cookie Policy</a></li>

                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col">
                                    <div className="widget">
                                        <div className="widget-title">Pages</div>
                                        <ul className="list">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#section4">About</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="widget">
                                        <div className="widget-title">Support</div>
                                        <ul className="list">

                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-content">
                <div className="container">
                    <div className="copyright-text text-center">&copy; 2022 <a target="_blank" href="https://frestonanalytics.com/">Freston Analytics.</a>  
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default JobCreate