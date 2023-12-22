import './About.scss';
import logo from '../../images/profile.jpg';

function About() {
    return (
        <div id="about" className="container-sm section-container">

            <div className="section-content">

                <div className="row">

                    {/* About Details */}
                    <div className="col-md-8">

                        <div className="section-header">
                            <h1>About me</h1>
                        </div>

                        <div className="section-body">
                            <p>
                                Hello, my name is Joel Smith and I am a software developer. Ever since my introduction
                                to programming at the age of 12, I have been fascinated with software and technology.
                                I enjoy solving problems and making life easier through code. Whether it's building a
                                back-end API or developing an intuitive website, I am passionate about creating beneficial
                                software.
                            </p>
                            <p>
                                Some of my favorite programming languages and technologies that I have been recently working
                                with include Java, TypeScript, Angular, Golang, CosmosSDK, Rust, and CosmWasm. In addition to
                                programming, I spend my free time researching and getting involved in cryptocurrency.
                            </p>
                            <p>
                                I am actively seeking an opportunity to not only gain hands-on experience in the software industry
                                and expand upon my technical skillset, but to also provide meaningful value to a development team.
                                Please feel free to contact me if you'd like to discuss potential collaboration or job opportunities.
                            </p>
                        </div>

                    </div>

                    {/* Profile Picture */}
                    <div className="col-md-4">
                        <div className="section-photo h-100">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="profile-picture ">
                                    <img src={logo} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;