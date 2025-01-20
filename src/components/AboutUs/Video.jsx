import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

function VideoSectionTwo({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section-two pull-down ${className || ''}`}>
                <div className="bg bg-pattern-10"></div>
                <div className="icon-lines-6"></div>
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <button
                            onClick={() => setOpen(true)}
                            className="play-btn"
                            data-fancybox="gallery"
                            data-caption=""
                            
                        >
                            <i className="icon fa fa-play" aria-hidden="true"></i>
                        </button>
                        <h2>
                            IT Solutions services built specifically <br />
                            for your <span className="selected">business</span>
                        </h2>
                    </div>
                </div>
            </section>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4"
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default VideoSectionTwo;
