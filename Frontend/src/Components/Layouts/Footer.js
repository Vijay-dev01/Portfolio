import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <>
            <div >
                <div className={`Footer bg-${props.mode === 'light' ? 'white' : 'dark'}
    text-${props.mode === 'light' ? 'white' : 'dark'}`} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-5 col-12 ft-1">
                                <h3><span>Vijay</span>CODES</h3>
                                <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                                    Passion for developing scalable web applications,
                                    Responsible for the design and implementation of user interfaces (UIs) and UI components using React,
                                    a front-end JavaScript library.</p>
                                <div className="footer-icons">
                                    <a href="https://github.com/Vijay-dev01" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github" />
                                    </a>
                                    <a href="https://instagram.com/thev_i_j_a_y?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                    <a href="https://instagram.com/thev_i_j_a_y?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vijay-g-918775236" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-12 ft-2">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li className="nav-item">
                                        <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="https://vijay-dev01.github.io/My_web/" target="_blank">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/certificates">Certificates</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/skills">Skills</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/project">Projects</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12 ft-3">
                                <h5>Contact me</h5>
                                <br />
                                <Link to="tel:+919148505856" className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-phone-volume"></i> <b>+91 9148505856</b>
                                </Link>
                                <br />
                                <br />
                                <Link to="mailto:vijayajay3535@gmail.com" className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-envelope"></i><b>vijayajay3535@gmail.com</b>
                                </Link>
                                <br />
                                <br />
                                <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}><i className="fa-solid fa-paper-plane"></i> Mysore, karnataka.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Last-footer'>
                    <p className='text-white'>Design By Vijay Ganesh</p>
                </div>
            </div>
        </>
    )
}

export default Footer