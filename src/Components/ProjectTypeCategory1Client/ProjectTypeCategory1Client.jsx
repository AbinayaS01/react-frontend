import { useState, useEffect } from 'react';
import './ProjectTypeCategory1Client.css';
import { useNavigate } from 'react-router-dom';

const ProjectTypeCategory1Client = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="construction-categories-container">
            <h1 className="animated-title">Construction Services</h1>
            
            <div className="construction-cards-container">
                <div 
                    className={`construction-card ${isVisible ? 'slide-in-left' : ''} ${isHovered === 'new-home' ? 'card-hover' : ''}`}
                    onMouseEnter={() => setIsHovered('new-home')}
                    onMouseLeave={() => setIsHovered(null)}
                    onClick={() => navigate('/new-home')}
                >
                    <div className="card-image new-home pulse"></div>
                    <div className="card-content">
                        <h2 className="bounce-text">New Home Construction</h2>
                        <p className="fade-in-text">Turn your dream home into reality with our premium construction services:</p>
                        <ul>
                            <li>Premium quality materials</li>
                            <li>Expert craftsmanship</li>
                            <li>Energy-efficient solutions</li>
                        </ul>
                    </div>
                </div>

                <div 
                    className={`construction-card ${isVisible ? 'slide-in-right' : ''} ${isHovered === 'renovation' ? 'card-hover' : ''}`}
                    onMouseEnter={() => setIsHovered('renovation')}
                    onMouseLeave={() => setIsHovered(null)}
                    onClick={() => navigate('/renovation')}
                >
                    <div className="card-image renovation pulse"></div>
                    <div className="card-content">
                        <h2 className="bounce-text">Home Renovation</h2>
                        <p className="fade-in-text">Breathe new life into your existing space:</p>
                        <ul>
                            <li>Complete home makeovers</li>
                            <li>Modern upgrades</li>
                            <li>Structural improvements</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTypeCategory1Client; 