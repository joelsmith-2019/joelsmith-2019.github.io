import './Contact.scss';

function Contact() {
    return (
        <div id="contact" className="container-sm" style={{ overflow: 'hidden' }}>

            <div className="mx-3">

                {/* Contact Me */}
                <div className="row">
                    <div className="col text-center">
                        <h1>Contact me</h1>
                    </div>
                </div>

                {/* Social Links */}
                <div className="row justify-content-center align-items-center">

                    {/* Contact Text */}
                    <div className="col-7 col-sm-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="text-center text-sm-start">
                                Connect with me on LinkedIn, GitHub, or via email.
                            </span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="col-7 col-sm-6">
                        <div className="d-flex justify-content-center align-items-center">

                            {/* Linked In Icon */}
                            <div className="social-icon">
                                <a href="https://linkedin.com/in/joelsmith-2019" target="_blank">
                                    <i className="fa-brands fa-linkedin fa-4x"></i>
                                </a>
                            </div>

                            {/* GitHub Icon */}
                            <div className="social-icon mx-3">
                                <a href="https://github.com/joelsmith-2019" target="_blank">
                                    <i className="fa-brands fa-github fa-4x"></i>
                                </a>
                            </div>

                            {/* Email Icon */}
                            <div className="social-icon">
                                <a href="mailto:joelsmith.2019@gmail.com" target="_blank">
                                    <i className="fa-solid fa-envelope fa-4x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;