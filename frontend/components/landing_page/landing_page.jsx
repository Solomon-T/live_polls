import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }


    demoLogin(e) {
        e.preventDefault();
        const guestUser = {
            username: 'Guest',
            password: 'password'
        }
        // debugger
        this.props.login(guestUser)
            // .then(() => this.props.history.push('/'));
    }

    render(){
        
        return(
        
            <div className='landing-page-full'>

                <header className='header'>
                    <div className='header-logo-nav'>
                        <div className='header-logo-div'>
                            <div className='logo'>
                                <Link to='/'>
                                    <h1 >Live Polls</h1>
                                </Link>
                            </div>
                        </div>
                        <div className='header-nav'>
                            <a className='header-nav-link' href='https://www.polleverywhere.com/' target="_blank">Real site</a>
                            <a className='header-nav-link' href='https://github.com/Solomon-T/live_polls' target="_blank">Github repo</a>
                            <a className='header-nav-link' href="https://www.linkedin.com/in/solomon-timothy-manyaga-305a51b4/" target="_blank">LinkedIn</a>
                            <a className='header-nav-link' href="https://solomon-t.github.io/" target="_blank">Developer</a>
                        </div>
                    </div>
                    <nav className="login-signup-nav">
                        <button className="demo-login" onClick={this.demoLogin}>Demo User</button>
                        <Link className='nav-session-link' to="/signup">Sign up</Link>
                        <Link id='login-next' className='nav-session-link' to="/login">Login</Link>
                        <a className='hamburger-dropdown' href="">
                            <img className='hamburger-img' src={window.hamburgerUrl} />
                        </a>
                        <ul className="dropdown-contetnt">
                            <li>
                                <Link className='drop-down-link' to="/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link className='drop-down-link' to="/login">Login</Link>
                            </li>
                            <li>
                                <a className='drop-down-link'>How it works</a>
                            </li>
                            <li>
                                <a className='drop-down-link'>Real site</a>
                            </li>
                            <li>
                                <a className='drop-down-link'>Stack</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            
                <main>
                    <div className='intro-div'>
                        <div className='intro-div-text-content-div'>
                            <h1>Your remote audience engagement tool</h1>
                            <p>Live polling for virtual meetings, events,
                                classes, and conferences
                            </p>
                            <Link className='into-signup' to="/signup">Get Started
                            </Link>
                        </div>
                        <img className='computer-img' src={window.computerUrl} alt="try"/>
                    </div>
                    <div className='blue-band'>
                        <p>
                            Live Polls provides instant updates as your audiance renspond.
                        </p>
                        <Link className='blue-band-signup' to="/signup">
                            Sign up for free
                        </Link>
                    </div>
                    <div className='seond-intro-div'>
                        <div className='second-intro-div-content'>
                            <img className='remote-img' src={window.remoterUrl} alt="interactive remote" />
                            <h4>Interactive remote meetings</h4>
                            <p>Collect and visualize audience feedback in real time.</p>
                        </div>
                        <div className='second-intro-div-content'>
                            <img className='remote-img' src={window.presentationUrl} alt="interactive remote" />
                            <h4>Engaging distance learning</h4>
                            <p>Use Poll Everywhere activities to take attendance, 
                                give quizzes, and gauge understanding whether your
                                students are near or far.</p>
                        </div>
                        <div className='second-intro-div-content'>
                            <img className='remote-img' src={window.distanceUrl} alt="interactive remote"/>
                            <h4>Apps that work where you do</h4>
                            <p>Visit the app anytime to create a poll in just a few clicks.</p>
                        </div>
                    </div>
                    <div className='media-div' id='demo-video'> 
                        {/* <iframe width="628" height="426" src="https://www.youtube.com/embed/ARe9FupzuOA" frameBorder="0" allowFullScreen></iframe> */}
                        {/* <iframe width="628" height="426" src={`https://www.youtube.com/embed/dT3aZ5Ph8e8&t=4s`} frameBorder="10" allowFullScreen></iframe> */}
                        {/* <iframe src={`https://www.youtube.com/embed/dT3aZ5Ph8e8`} frameBorder="8" allowFullScreen></iframe>   */}
                        <img className="demo_livepolls_gif" src={window.demo_livepolls} alt="apo demo"/>
                    </div>
                    <div className='who-needs-this'>
                        <h1>Over 75% of the Fortune 500 use simmilar application</h1>
                        <p>This is to focilitale fast and easy to interprete feedback</p>
                        <div className='logos-div'>
                            {/* <img src='window.alllogosUrl' /> */}
                            <img className='logo-div-img' src={window.applelogoUrl}/>
                            <img className='logo-div-img' src={window.attlogoUrl}/>
                            <img className='logo-div-img' src={window.cocacolalogoUrl}/>
                            <img className='logo-div-img' src={window.googlelogoUrl}/>
                            <img className='logo-div-img' src={window.hplogoUrl}/>
                            <img className='logo-div-img' src={window.jpmorganlogoUrl}/>
                            <img className='logo-div-img' src={window.mlynchlogoUrl}/>
                            <img className='logo-div-img' src={window.microsoftlogoUrl}/>
                            <img className='logo-div-img' src={window.navylogoUrl}/>
                            <img className='logo-div-img' src={window.spotifylogoUrl}/>
                            <img className='logo-div-img' src={window.targetlogoUrl}/>
                            <img className='logo-div-img' src={window.verizonlogoUrl} />
                        </div>
                    </div>
                    <div className='sign-up-div'>
                        <h1>Sign up for your free account.</h1>
                        <Link className='footer-signup' to="/signup">Sign up now
                            </Link>
                    </div>
                    <div className='intergration-div'>
                        <div className='intergration-title-div'>
                            <h1> LivePolls slideware integrations comming soon</h1>
                            <p>Live Polls is comming soon on PowerPoint, Keynote, and Google
                                Slides</p>
                        </div>
                        <div className='slides-intergrsation-div'>
                            
                            <div className='power-point-div'>
                                <img className='power-point-div-img' src={window.powerpointUrl} />
                                <div className='power-point-div-content'>
                                    <h4>POWERPOINT</h4>
                                    <p>Easily add live Polls to your presentations</p>
                                </div>
                            </div>
                            <div className='power-point-div'>
                                <img className='power-point-div-img' src={window.keynoteUrl} />
                                <div className='power-point-div-content'>
                                    <h4>KEYNOTE</h4>
                                    <p>Easily add live Polls to your presentations</p>
                                </div>
                            </div>
                            <div className='power-point-div'>
                                <img className='power-point-div-img' src={window.googleslidesUrl} />
                                <div className='power-point-div-content'>
                                    <h4>GOOGLE SLIDES</h4>
                                    <p>Easily add live Polls to your presentations</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className='after-intergration-div'>
                        <p>, Keynote, and Google Slides</p>
                    </div> */}
                    
                    {/* <div className='the-rest-div'>
                        <div className='last-logo'>
                            <h1> Live Polls </h1>
                        </div>
                        <div className='last-section'>
                            <div className='last-section-divs'>
                                <h4>Services</h4>
                                <p>Events</p>
                                <p>Learning {'&'} Development</p>
                                <p>K-12</p>
                                <p>Higher-ed</p>
                                <p>International</p>
                                <p>Enterprise</p>
                            </div>
                            <div className='last-section-divs'>
                                <h4>Presentation apps</h4>
                                <p>PowerPoint</p>
                                <p>Keynote</p>
                                <p>Google Slides</p>
                            </div>
                            <div className='last-section-divs'>
                                <h4>Mobile apps</h4>
                                <p>iOS</p>
                                <p>Android</p>
                            </div>
                            <div className='last-section-divs'>
                                <h4>Supprot</h4>
                                <p>Plans {"&"} pricing</p>
                                <p>Premium features</p>
                                <p>How it works</p>
                                <p>Support</p>
                                <p>Case studies</p>
                                <p>Guides</p>
                                <p>Video guide</p>
                                <p>Webinars</p>
                            </div>
                            <div className='last-section-divs'>
                                <h4>Company</h4>
                                <p>About</p>
                                <p>Blog</p>
                                <p>Jobs</p>
                                <p>Security</p>
                            </div>
                        </div> 
                    </div>*/}
                </main>
                <footer className='footer'>
                    {/* <ul class="icons">
                       <li><a target="_blank" href="https://www.linkedin.com/in/solomon-timothy-manyaga-305a51b4/" class="icon brands fa-linkedin"><span class="label">linkedin</span></a></li>
                        <li><a target="_blank" href="https://github.com/Solomon-T" class="icon brands fa-github"><span class="label">Github</span></a></li>
                        <li><a target="_blank" href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                    </ul> */}
                    {/* <i class="fab fa-linkedin-in"></i> */}
                    {/* <i className="fab fa-github"></i> */}


                </footer>
            </div>
        );
    }
}

export default LandingPage;