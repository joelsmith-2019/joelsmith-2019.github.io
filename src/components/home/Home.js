import NavBar from "../navbar/NavBar";

function Home() {
    return (
        <>
            <div id="home" className="container-sm page-container">

                <div className="page-content">

                    <div className="page-header">
                        <h1>Joel Smith</h1>
                        <h2>Software Developer</h2>
                    </div>

                    <div className="page-body">
                        <div className="d-flex justify-content-start">

                            {/* Linked In */}
                            <div className="social-icon">
                                <a href="https://github.com/joelsmith-2019" target="_blank">
                                    <i className="fa-brands fa-github fa-3x fa-fw"></i>
                                </a>
                            </div>

                            {/* GitHub */}
                            <div className="social-icon ms-3">
                                <a href="https://linkedin.com/in/joelsmith-2019" target="_blank">
                                    <i className="fa-brands fa-linkedin fa-3x fa-fw"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;