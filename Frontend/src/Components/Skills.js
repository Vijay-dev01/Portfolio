import React from 'react';
import node from '../assets/images/nodejs.png'
import css from '../assets/images/css.png'
import github from '../assets/images/icons8-github-100.png'
import git from '../assets/images/git.png'
import html from '../assets/images/html-5.png'
import react from '../assets/images/react.png'
import js from '../assets/images/java-script.png'
import bootstarp from '../assets/images/bootstrap.png'
import postman from '../assets/images/62cc1b3a150d5de9a3dad5f7.png'
import gitlab from '../assets/images/icons8-gitlab-96.png'
import material from '../assets/images/icons8-material-ui-96.png'
import npm from '../assets/images/icons8-npm-96.png'
import { ParticlesJs, TreeJs, VantaJs } from '../imagedata';

export default function Skills(props) {
    return (
        <div id="skills" className="container mt-4 mb-4">
            <h1 className={`text-2xl font-weight-bold text-center text-${props.mode === 'light' ? 'dark' : 'white'}`}>Skills</h1>
            <p className="font-light text-muted text-center">My skills include:</p>

            <div className="container mt-4">
                <div className="row">
                <div className="col-md-3">
                <div className="text-center mb-5">
                    <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>HTML</h3>
                    <img src={html} alt="HTML" width="80" height="80"/>
                </div>
                </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>CSS</h3>
                            <img src={css} alt="CSS" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>React</h3>
                            <img src={react} alt="React" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>JavaScript</h3>
                            <img src={js} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>NPM</h3>
                            <img src={npm} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Material UI</h3>
                            <img src={material} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Postman</h3>
                            <img src={postman} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Node JS</h3>
                            <img src={node} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Bootstrap</h3>
                            <img src={bootstarp} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Git</h3>
                            <img src={git} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>GitHub</h3>
                            <img src={github} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>GitLab</h3>
                            <img src={gitlab} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Tree Js</h3>
                            <img src={TreeJs} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Vanta Js</h3>
                            <img src={VantaJs} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center mb-5">
                            <h3 className={`font-weight-bold text-${props.mode === 'light' ? 'dark' : 'white'}`}>Particles Js</h3>
                            <img src={ParticlesJs} alt="JavaScript" width="80" height="80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

