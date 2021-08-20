import React from 'react'
import image1 from '../../images/home-img-1.png'
import image2 from '../../images/home-img-2.png'
import './style.css'

const ImageSection = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col" align="center">
                    <img className="img-fluid home-img-1" src={image1} alt="image1" />
                </div>
            </div>
            <div className="row">
                <div className="col" align="center">
                    <div className="row home-img-2-container">
                        <div className="container-fluid">
                            <div className="row home-img-2-header">
                                <p>About us</p>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-4 home-img-2-leftbox">
                                    <p className="home-img-2-lettering">Learning Together <br />
                                    From the Comfort <br />
                                    of Your Home</p>
                                    <button type="button" className="btn btn-outline-dark home-img-2-btn">Learn More</button>
                                </div>
                                <div className="col-4 home-img-2-rightbox">
                                    <img className="img-fluid home-img-2-image" src={image2} alt="image2" />
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col" align="center">
                    <div className="row parallax">
                        <p className="parallax-heading-1">Welcome to</p>
                        <p className="parallax-heading-2">THE NEXT BIG THING</p>
                        <button className="parallax-btn">Join TEN Virtual Campus</button>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default ImageSection
