import React from 'react'
import video from '../../videos/consulting.mp4'
import './style.css'

const VideoComponent = () => {
    return (
        <div className="container-fluid" style={{height:'392px'}}>
            <div className="row">
                <div className="col" align="center">
                    <div className="row video-container">
                        <video autoPlay muted loop src={video} className="bg-video" />
                        <p className="video-h">
                            Power of TEN Consulting
                        </p>
                        <button className="video-btn"><p className="btn-wording">Explore Here ►</p></button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default VideoComponent
