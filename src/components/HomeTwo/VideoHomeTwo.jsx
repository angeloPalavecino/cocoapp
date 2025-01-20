import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import VideoBackground from '../../assets/images/background/1.jpg';  

function VideoHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section ${className || ''}`}>
                <div className="icon-lines-4 bounce-y"></div>
                <div className="icon-arrow1 bounce-x"></div>
                <div className="auto-container">
                    <div className="video-box">
                        <div className="icon-shape"></div>
                        <div className="icon-shape-2"></div>
                        <div className="bg">
                            {/* Background image */}
                            <div className="bg bg-image" style={{ backgroundImage: `url(${VideoBackground})` }}></div>
                            <div className="overlay"></div>
                        </div>
                        <div className="content-box">
                            <div className="btn-box">
                                <a onClick={() => setOpen(true)} className="play-now">
                                    <i className="icon fa fa-play" aria-hidden="true"></i>
                                    <span className="ripple"></span>
                                </a>
                            </div>
                            <h3 className="title">
                                Professional IT <br />
                                technology <br />
                                services you <br />
                                can trust
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Video Component */}
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // Use your preferred video ID here
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default VideoHomeTwo;
