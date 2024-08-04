import React from 'react'
import { mypic } from '../imagedata'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div className={`text-${props.mode === 'light' ? 'white' : 'dark'}`}>
            <div className='container my-5 py-5'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='home_1'>
                            <h2>Hello, <span> I'm</span></h2>
                            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>Vijay G</h1>
                            <h3 className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>React Developer</h3>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                                A React Developer is responsible for developing and maintaining
                                web applications using the React.js library. React is a popular JavaScript library that is widely
                                used for building user interfaces. React Developers are typically responsible for writing clean,
                                reusable, and efficient code that meets the needs of the project.</p>
                            {/* <button type='button' className="btn2 mx-2"><Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>Contact Now</Link></button> */}
                            <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                                <button type='button' className="btn2 mx-2">Contact Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='home_2'>
                            <img src={mypic} className='img-fluid' alt='my-pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
