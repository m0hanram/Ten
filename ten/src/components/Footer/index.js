import React from 'react'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import './style.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{height:'285px'}}>
                <div className="row">
                    <div className="col" align="center">
                        <div className="row" style={{height:'253px'}}>
                            <div className="col-3">
                            </div>
                            <div className="col-2 socialmedia">
                                <img src={facebook} className='img-fluid socialmedia-img'  alt="insta" />
                                <img className='socialmedia-img' src={twitter} style={{height:'50px'}} alt="insta" />
                                <img className='socialmedia-img' src={instagram} style={{height:'50px'}} alt="insta" />
                            </div>
                            <div className="col-3">
                                <div className="container form-container">
                                    <div className="row">
                                        <p>Subscribe to our news letter</p>
                                    </div>
                                    <div className="row" style={{justifyContent:'space-between'}}>
                                        <div className="col-6">
                                            <input type="text" placeholder="Full Name" style={{padding:'10px',width:'180px'}}></input>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" placeholder="Full Name" style={{padding:'10px',width:'180px'}}></input>
                                        </div>
                                    </div>
                                    <div className="row" style={{justifyContent:'space-between',marginTop:'10px'}}>
                                        <div className="col-6">
                                            <input type="text" placeholder="Full Name" style={{padding:'10px',width:'180px'}}></input>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" placeholder="Full Name" style={{padding:'10px',width:'180px'}}></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2" align="end">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="col-10" align="start">
                                            <p>Join TEN discord server</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" align="center">
                                            <button type="button" class="btn btn-outline-dark" style={{width:'100px'}}>Submit</button>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 links" style={{justifyContent:'center',alignContent:'center'}}>
                                <div className="row">
                                    <a href="/" style={{textDecoration:'None',color:'black'}}>About us</a>
                                </div>
                                <div className="row">
                                    <a href="/" style={{textDecoration:'None',color:'black'}}>Contact us</a>
                                </div>
                                <div className="row">
                                    <a href="/" style={{textDecoration:'None',color:'black'}}>FAQ's</a>
                                </div>
                            </div>
                            <div className="col-3">
                            </div>
                        </div>
                        <div className="row copyrights-bar" style={{height:'32px'}}>
                            <p style={{fontSize:'20px'}}>© 2020 Limitless Technologies - The Entrepreneurship Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
