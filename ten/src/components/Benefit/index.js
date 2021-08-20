import React from 'react'
import './style.css'
import ribbon from '../../images/benefits-ribbon.png'
import img1 from '../../images/benefits-img-1.png'
import img2 from '../../images/benefits-img-2.png'
import img3 from '../../images/benefits-img-3.png'

const Benefit = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{height:'80px'}}>
                <img className="img-fluid" style={{height:'80px',paddingLeft:'300px',paddingRight:'300px'}} src={ribbon} alt="ribbon" />
            </div>
            <div className="row">
                <div className="col" align="center">
                    <div className="row m-2 p-2 bg-light" style={{height:'579px',width:'1760px'}}>
                        <div className="col-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <img className='img-fluid benefit-img' style={{height:'167px',width:'180px'}} src={img2} alt="img2" />
                                </div>
                                <div className="row benefit-h">
                                    <h3>Expert Teachers</h3>
                                </div>
                                <div className="benefit-hr">
                                    <hr />
                                </div>
                                <div className="row benefit-p">
                                    <p>
                                        Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                                        We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <img className='img-fluid benefit-img' style={{height:'167px',width:'180px'}} src={img3} alt="img3" />
                                </div>
                                <div className="row benefit-h">
                                    <h3>Online Community</h3>
                                </div>
                                <div className="benefit-hr">
                                    <hr />
                                </div>
                                <div className="row benefit-p">
                                    <p>
                                        Feel like home, with a <br />
                                        "family of invisible friends".
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <img className='img-fluid benefit-img' style={{height:'167px',width:'180px'}} src={img1} alt="img1" />
                                </div>
                                <div className="row benefit-h">
                                    <h3>Flexible Curriculum</h3>
                                </div>
                                <div className="benefit-hr">
                                    <hr />
                                </div>
                                <div className="row benefit-p">
                                    <p>
                                        Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
