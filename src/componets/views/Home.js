import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../system/Carousel';

const images = [
    { caption: 'Royal Enfield Classic 650', label: 'Royal Enfield Classic 650', alt: 'Royal Enfield Classic 650', src: 'https://car.zigcdn.com/images/uploadimages/1743059318388/02_Royal-Enfield-Classic-650_ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: 'Honda Activa e', label: 'Honda Activa e', alt: 'Honda Activa e', src: 'https://car.zigcdn.com/images/uploadimages/1742874852894/Honda-Activa-e-_ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: 'Hero Xtreme 250R', label: 'Hero Xtreme 250R', alt: 'Hero Xtreme 250R', src: 'https://car.zigcdn.com/images/uploadimages/1742874995562/Hero-Xtreme-250R_ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: '2025 Suzuki Access 125', label: '2025 Suzuki Access 125', alt: '2025 Suzuki Access 125', src: 'https://car.zigcdn.com/images/uploadimages/1742875228789/2025-Suzuki-Access-125_ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: 'ZW MasterHead', label: 'ZW MasterHead', alt: 'ZW MasterHead', src: 'https://car.zigcdn.com/images/uploadimages/1742281497498/ZW-MasterHead-Desktop_1686x548px(4).jpg' },
    { caption: 'Kia EV6 Facelift', label: 'Kia EV6 Facelift', alt: 'Kia EV6 Facelift', src: 'https://car.zigcdn.com/images/uploadimages/1743079564541/Kia-EV6-Facelift_ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: 'ZW MasterHead', label: 'ZW MasterHead', alt: 'ZW MasterHead', src: 'https://car.zigcdn.com/images/uploadimages/1741263141351/ZW-MasterHead-Desktop_1686x548px-(1).jpg' },
    { caption: 'ZW MasterHead', label: 'ZW MasterHead', alt: 'ZW MasterHead', src: 'https://car.zigcdn.com/images/uploadimages/1739939623905/ZW-MasterHead-Desktop_1686x548px.jpg' },
    { caption: 'BMW iX1 LWB', label: 'BMW iX1 LWB', alt: 'BMW iX1 LWB', src: 'https://car.zigcdn.com/images/uploadimages/1738573255281/BMW-iX1-LWB_ZW-MasterHead-Desktop_1686x548px.jpg' }
];
const Home = () => {
    return (<>
        <Carousel items={images} />

        <div className="container py-5">

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-3 text-primary">
                        Welcome to TrustBank
                    </h1>
                    <p className="lead text-secondary mb-4">
                        Secure. Simple. Smart. Manage your finances with confidence and ease. Join TrustBank for seamless banking, anytime, anywhere.
                    </p>
                    <a
                        href="#open-account"
                        className="btn btn-lg btn-success px-4 me-2"
                    >
                        Open an Account
                    </a>
                    <a
                        href="#learn-more"
                        className="btn btn-outline-primary btn-lg px-4"
                    >
                        Learn More
                    </a>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
                        alt="Banking Illustration"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '350px' }}
                    />
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow h-100">
                        <div className="card-body">
                            <i className="bi bi-shield-lock-fill text-primary fs-1 mb-3"></i>
                            <h5 className="card-title fw-bold">Secure Banking</h5>
                            <p className="card-text">
                                Advanced security features to keep your money and data safe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow h-100">
                        <div className="card-body">
                            <i className="bi bi-phone-fill text-success fs-1 mb-3"></i>
                            <h5 className="card-title fw-bold">Mobile Access</h5>
                            <p className="card-text">
                                Bank on the go with our easy-to-use mobile app.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card border-0 shadow h-100">
                        <div className="card-body">
                            <i className="bi bi-cash-stack text-warning fs-1 mb-3"></i>
                            <h5 className="card-title fw-bold">Personalized Services</h5>
                            <p className="card-text">
                                Get tailored financial solutions for your unique needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Home;