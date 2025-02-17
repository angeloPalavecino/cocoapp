import React from 'react';

function MarqueeSection() {
    return (
        <div className="marquee-section">
            <div className="marquee">
                {/* First Marquee Group */}
                <div className="marquee-group">
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*INSPIRED WITH CREATIVITY</div>
                    <div className="text">*Design & development craft</div>
                    <div className="text">*Desbloquea tu potencial</div>
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*INSPIRED WITH CREATIVITY</div>
                    <div className="text">*Design & development craft</div>
                    <div className="text">*Desbloquea tu potencial</div>
                    <div className="text">*Transform ideas into reality</div>
                </div>

                {/* Second Marquee Group (for continuous scroll effect) */}
                <div aria-hidden="true" className="marquee-group">
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*INSPIRED WITH CREATIVITY</div>
                    <div className="text">*Design & development craft</div>
                    <div className="text">*Desbloquea tu potencial</div>
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*Transform ideas into reality</div>
                    <div className="text">*INSPIRED WITH CREATIVITY</div>
                    <div className="text">*Design & development craft</div>
                    <div className="text">*Desbloquea tu potencial</div>
                    <div className="text">*Transform ideas into reality</div>
                </div>
            </div>
        </div>
    );
}

export default MarqueeSection;
