import React from 'react'
import './style.css'
import featuretop1 from '../../images/feature-top-1.png'
import featuremid1 from '../../images/feature-mid-1.png'
import featuremid2 from '../../images/feature-mid-2.png'
import featurebottom1 from '../../images/feature-bottom-1.png'


const Feature = () => {
    return (
        <div className="container-fluid feature-container">
            <div className="row">
                <div className="col" align="center">
                    <div className="row gx-0" style={{height:'472px',width:'1760px'}}>
                        <div className="col-8">
                            <img className="img-fluid feature-img" src={featuretop1} alt="featuretop1" />
                        </div>
                        <div className="col-4 feature-lettering">
                            <a href="/" className="feature-link">
                                Entrepreneurship <br />
                                made fun
                            </a>
                            <br />
                            <button className="feature-btn">Explore Here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col" align="center">
                    <div className="row gx-0" style={{height:'472px',width:'1760px'}}>
                        <div className="col-6">
                            <img className="img-fluid feature-img" src={featuremid1} alt="featuremid1" />
                        </div>
                        <div className="col-3 feature-lettering">
                            <a href="/" className="feature-link">
                                Digital <br />
                                Marketing
                            </a>
                            <br />
                            <button className="feature-btn">Explore Here</button>
                        </div>
                        <div className="col-3">
                            <img className="img-fluid feature-img" src={featuremid2} alt="featuremid2" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col" align="center">
                    <div className="row gx-0" style={{height:'472px',width:'1760px'}}>
                        <div className="col-6 feature-lettering">
                            <a href="/" className="feature-link">
                                Product Management <br />
                                like a pro
                            </a>
                            <br />
                            <button className="feature-btn">Explore Here</button>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid feature-img" src={featurebottom1} alt="featurebottom1" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Feature
