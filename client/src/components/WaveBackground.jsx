import React from 'react';

const WaveBackground = ({ color = "#00FFFF", opacity = 0.1 }) => {
    return (
        <div className="wave-background">
            <svg
                className="wave-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    fillOpacity={opacity}
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,133.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    className="wave-path wave-1"
                />
            </svg>
            <svg
                className="wave-svg wave-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    fillOpacity={opacity * 0.7}
                    d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    className="wave-path"
                />
            </svg>
            <svg
                className="wave-svg wave-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    fillOpacity={opacity * 0.5}
                    d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    className="wave-path"
                />
            </svg>
        </div>
    );
};

export default WaveBackground;
