import React from 'react'
import { Link } from 'react-router-dom'
import { GL_JavaScript, GL_ReactJs, ReactCertificate } from '../imagedata'

export default function Certificates(props) {
  return (
    <div className="container mx-auto mt-4">
    <div className="row">
        <div className="col-md-4">
            <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                <img src={ReactCertificate} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">React Js Certificate</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Issued by</h6>
                    <p className="card-text"><b>Thirumala Arohi</b> Senior Vice President and Head Education, Training and Assessment (ETA) Infosys Limited</p>
                    <Link to="https://drive.google.com/file/d/1tDwT_RBpWXuMGvLeHJl930Bv-jTbtmLh/view?usp=sharing" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                <img src="https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/3721190/original/Vijay20231123-73-lj8ma7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Graphic Design with Photoshop</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Issued by</h6>
                    <p className="card-text">Great Learning Academy.</p>
                    <Link to="https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/3721190/original/Vijay20231123-73-lj8ma7.jpg" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                </div>
            </div>
        </div>
                <div className="col-md-4">
            <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                <img src={GL_JavaScript} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">JavaScript Certificate</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Issued by</h6>
                    <p className="card-text">Great Learning Academy.</p>
                    <Link to="https://drive.google.com/file/d/1CzjJKQ7Bb0Lgp4C1HAFjiTryh_nHT7zE/view" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                </div>
            </div>
        </div>
                <div className="col-md-4">
            <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                <img src={GL_ReactJs} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">React Js Certificate</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Issued by</h6>
                    <p className="card-text">Great Learning Academy.</p>
                    <Link to="https://drive.google.com/file/d/1bW97AEnGx-XzBr_TuTKCtHH48u0l_w9o/view" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
