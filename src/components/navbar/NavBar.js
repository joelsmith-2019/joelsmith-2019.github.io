import './NavBar.scss';

function NavBar() {

    return (
        <nav id="navbar" className="navbar navbar-expand-md">
            <div className="container-sm">

                {/* JS Logo  */}
                <a className="n-link ps-0" href="#home">
                    <div className="logo-container">
                        <span className="logo">JS</span>
                    </div>
                </a>

                {/* Toggle Dropdown */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* List items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-sm-auto">
                        <li>
                            <a className="n-link" href="#about">About</a>
                        </li>
                        <li>
                            <a className="n-link" href="#experience">Experience</a>
                        </li>
                        <li>
                            <a className="n-link" href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className="n-link" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="n-link" href="#contact">Contact</a>
                        </li>
                        <li className="pt-2 pt-md-0">
                            <a className="n-link" href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <span id="resume">Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;