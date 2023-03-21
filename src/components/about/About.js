import './About.scss';
import logo from '../../images/profile.jpg';

function About() {
    return (
        <div id="about" className="container-sm page-container">

            <div className="page-content">

                <div className="row">

                    {/* About Details */}
                    <div className="col-md-8">

                        <div className="page-header">
                            <h1>About Me</h1>
                        </div>

                        <div className="page-body">
                            <p>
                                Hello! My name is Joel Smith and I am a passionate software developer. Ever since the age of 12,
                                I have fallen in love with computers and technology. This passion has led me to pursue a degree in
                                Software Development at Grand Canyon University. I am currently in my final semester and will be
                                graduating April 28, 2023.
                            </p>
                            <p>
                                I am currently seeking an opportunity to not only gain hands-on experience in the software industry
                                and expand upon my technical skillset, but to also provide meaningful value to a development team.
                            </p>
                        </div>

                    </div>

                    {/* Profile Picture */}
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="profile-picture ">
                                <img src={logo} alt="Profile" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="arrow-button">
                        <a href="#experience">
                            <span>
                                <i className="fa-solid fa-arrow-down me-3"></i>
                                Experience
                                <i className="fa-solid fa-arrow-down ms-3"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;