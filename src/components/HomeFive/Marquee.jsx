import React from 'react';

function MarqueeSection() {
    return (
        <div className="marquee-section">
            <div className="marquee">
                {/* First Marquee Group */}
                <div className="marquee-group">
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*INSPIRADOS POR LA CREATIVIDAD</div>
                <div className="text">*El arte del diseño y desarrollo</div>
                <div className="text">*Desbloquea el potencial</div>
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*INSPIRADOS POR LA CREATIVIDAD</div>
                <div className="text">*El arte del diseño y desarrollo</div>
                <div className="text">*Desbloquea el potencial</div>
                <div className="text">*Transforma ideas en realidad</div>
                </div>

                {/* Second Marquee Group (for continuous scroll effect) */}
                <div aria-hidden="true" className="marquee-group">
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*INSPIRADOS POR LA CREATIVIDAD</div>
                <div className="text">*El arte del diseño y desarrollo</div>
                <div className="text">*Desbloquea el potencial</div>
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*Transforma ideas en realidad</div>
                <div className="text">*INSPIRADOS POR LA CREATIVIDAD</div>
                <div className="text">*El arte del diseño y desarrollo</div>
                <div className="text">*Desbloquea el potencial</div>
                <div className="text">*Transforma ideas en realidad</div>
                </div>
            </div>
        </div>
    );
}

export default MarqueeSection;
