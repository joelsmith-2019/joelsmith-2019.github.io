import './Contact.scss';

function Contact() {
    return (
        <div id="contact" className="container-sm">

                {/* Contact Me */}
                <div className="row mx-3">
                    <h1>Contact</h1>
                </div>

                {/* Social Links */}
                <div className="row mx-3 w-100">


                    <div className="row justify-content-between">

                        <div className="col-12 col-sm-6">
                            <p>
                                Please connect with me on LinkedIn, GitHub, or send me an email.
                            </p>
                        </div>

                        <div className="col-12 col-sm-6">

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