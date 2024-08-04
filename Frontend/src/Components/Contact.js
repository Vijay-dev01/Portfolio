import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l27trtp', 'template_740sjbz', form.current, 'X_FO5tghyXehWlhBn')
      .then((result) => {
        console.log(result.text);
        toast.success("Successfully Submitted", {
          position: toast.POSITION.BOTTOM_CENTER
        })
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        toast.error("Error", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      });
  };

  return (
    <div className={`text-${props.mode === 'light' ? 'white' : 'dark'}`}>
      <section className= "py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'} fs-6 text-secondary mb-2 text-uppercase text-center`}>Get in Touch</h3>
              <h2 className={`text-${props.mode === 'light' ? 'dark' : 'white'} display-5 mb-4 mb-md-5 text-center`}>We're always on the lookout to work with new clients.</h2>
              <hr
                className={`w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle text-${props.mode === 'light' ? 'dark' : 'white'}`}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
            <div className="col-12 col-lg-6">
              {/* <img className="img-fluid rounded" loading="lazy" src="./assets/img/contact-img-1.jpg" alt="Get in Touch" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.8666875128647!2d76.37062302462087!3d12.18947303154386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba58957b9e94f41%3A0x3c90aa4a03b75970!2sGaddige%2C%20Karnataka%20571189!5e0!3m2!1sen!2sin!4v1700031860352!5m2!1sen!2sin"
                width="600"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='Get in Touch'
                className="mx-auto d-block rounded"
                style={{ border: 'none' }}
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <div className={`bg-${props.mode === 'light' ? 'white' : 'dark'} border rounded shadow-sm overflow-hidden`}>

                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                          <label htmlFor="fullname" className={`text-${props.mode === 'light' ? 'dark' : 'white'} form-label`}>Full Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="fullname" name="user_name" required />
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className={`text-${props.mode === 'light' ? 'dark' : 'white'} form-label`}>Email <span className="text-danger">*</span></label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input type="email" className="form-control" id="email" name="user_email" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="subject" className={`text-${props.mode === 'light' ? 'dark' : 'white'} form-label`}>Subject <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="subject" name="user_subject" required />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className={`text-${props.mode === 'light' ? 'dark' : 'white'} form-label`}>Message <span className="text-danger">*</span></label>
                          <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button className="btn btn-primary btn-lg" type="submit" value="Send">Send Message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact