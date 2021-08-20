import React from 'react'
import './style.css'

const Testimonial = () => {
    return (
        <div className="container" style={{height:'580px'}}>
            <div className="row testimonial-h">
                <p>Testimonials</p>
            </div>
            <div className="testimonial-hr">
                <hr />
            </div>
            <div className="row testimonial-allcontainer">
                <div id="carouselExampleControls" className="carousel slide testimonial-container" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="testimonial-card">
                                <p className="testimonial-card-h">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
                                <p className="testimonial-card-p">-Harsh Rajput, General Management Intern</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial-card">
                                <p className="testimonial-card-h">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
                                <p className="testimonial-card-p">-Anjali Srivastava, Content Intern</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial-card">
                                <p className="testimonial-card-h">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
                                <p className="testimonial-card-p">-Harsh Rajput, General Management Intern</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
