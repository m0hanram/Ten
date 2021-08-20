import React from 'react';
import headerimg from '../../images/header-img-1.png';
import tenlogo from '../../images/header-logo.png';
import './style.css'

const Header = () => {
    return (
        <div className='container-fluid' style={{ height: '20vh' }}>
            <div className="row" style={{ height: '13vh' }}>
                <div className="col-lg-8 col-md-6 col-sm-6 justify-content-center">
                    <img className="rounded mx-auto d-block" style={{ height: '85%' }} src={headerimg} alt="ten" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="container-fluid">
                        <div className="row p-2">
                            <div className="col-6">
                                <button type="button" className="btn btn-danger cartbtn float-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-outline-dark loginbtn mx-auto d-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Log In
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" align="center">
                                <div className="input-group flex-nowrap searchtab">
                                    <input type="text" className="form-control searchtabinput" placeholder="Search here..." aria-label="Username" aria-describedby="addon-wrapping" />
                                    <span className="input-group-text searchtabimg" id="addon-wrapping">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ height: '5vh' }}>
                <div className="col-4">
                    <a href="/"><img className="headerlogo mx-auto d-block" src={tenlogo} alt="tenlogo" /></a>
                </div>
                <div className="col-8 float-start">
                    <ul className="nav headernavbar">
                        <li className="nav-item">
                            <a className="nav-link headernavbarlinks active" aria-current="page" href="/">Home</a>
                        </li>
                        <p className="divider">|</p>
                        <li className="nav-item">
                            <a className="nav-link headernavbarlinks" href="/">Online Courses</a>
                        </li>
                        <p className="divider">|</p>
                        <li className="nav-item ">
                            <a className="nav-link headernavbarlinks" href="/">We're Hiring</a>
                        </li>
                        <p className="divider">|</p>
                        <div className="dropdown">
                            <li className="nav-item">
                                <a className="nav-link headernavbarlinks" href="/">More</a>
                            </li>
                            <div className="dropdown-content">
                                <a href="/">Blog</a>
                                <a href="/">Certification</a>
                                <a href="/">Alumini Team</a>
                                <a href="/">Forum</a>
                                <a href="/">Hackathon</a>
                                <a href="/">Membership Registration</a>
                                <a href="/">Mentorship</a>
                                <a href="/">Social Media</a>
                                <a href="/">Testimonial</a>
                                <a href="/">Contact Us</a>
                                <a href="/">Complaints</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
