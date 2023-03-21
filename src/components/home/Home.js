import './Home.scss';

function Home() {
    return (
        <div id="home" className="container-sm page-container">
            <div className="page-content">

                <div className="page-header">
                    <h1>Joel Smith</h1>
                    <h2>Software Developer</h2>
                </div>

                <div className="page-body">
                    <div className="d-flex">

                        {/* Linked In */}
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/joelsmith-2019" target="_blank">
                                <i className="fa-brands fa-linkedin fa-4x"></i>
                            </a>
                        </div>

                        {/* GitHub */}
                        <div className="social-icon ms-3">
                            <a href="https://github.com/joelsmith-2019" target="_blank">
                                <i className="fa-brands fa-github fa-4x"></i>
                            </a>
                        </div>
                    </div>

                    {/* Go to experience */}
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="arrow-button">
                            <a href="#about">
                                <span>
                                    <i className="fa-solid fa-arrow-down me-3"></i>
                                    About Me
                                    <i className="fa-solid fa-arrow-down ms-3"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;