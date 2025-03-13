import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

function VideoSectionTwo() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="video-section-two pull-down">
                <div className="bg bg-pattern-10"></div>
                <div className="icon-lines-6"></div>
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <button
                            onClick={() => setOpen(true)}
                            className="play-btn"
                            aria-label="Play Video"
                        >
                            <i className="icon fa fa-play" aria-hidden="true"></i>
                        </button>
                        <h2>
                        Partner oficial <br />
                            de <span className="selected">Microsoft</span>
                        </h2>
                    </div>
                </div>
            </section>

            {/* Modal Video Component */}
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="RW-ihpgNSYs"
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default VideoSectionTwo;
