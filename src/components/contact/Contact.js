import './Contact.scss';

function Contact() {
    return (
        <div id="contact" className="container-sm">

            <div className="row justify-content-evenly align-items-center">

                {/* Contact Me */}
                <div className="col-10 col-sm-4">
                    <h1>Contact</h1>
                    <p>
                        Please connect with me on LinkedIn, GitHub, or send me an email.
                    </p>
                </div>

                {/* Social Links */}
                <div className="col-10 col-sm-4">

                    <div className="d-flex justify-content-center align-items-center">
                        {/* Linked In Icon */}
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/joelsmith-2019" target="_blank">
                                <i className="fa-brands fa-linkedin fa-4x"></i>
                            </a>
                        </div>

                        {/* GitHub Icon */}
                        <div className="social-icon ms-3">
                            <a href="https://github.com/joelsmith-2019" target="_blank">
                                <i className="fa-brands fa-github fa-4x"></i>
                            </a>
                        </div>

                        {/* Email Icon */}
                        <div className="social-icon ms-3">
                            <a href="mailto:joelsmith.2019@gmail.com" target="_blank">
                                <i className="fa-solid fa-envelope fa-4x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;