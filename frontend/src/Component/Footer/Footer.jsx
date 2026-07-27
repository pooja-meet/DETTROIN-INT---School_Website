import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {  FaArrowAltCircleRight, FaDownload} from 'react-icons/fa'
import img8 from '../../assets/schoolImages/Link-Logo-→-Pavna-School-Logo.webp'

export default function Footer() {
    return (
        <>
            <section className="section6">
                <div className="section6-container">

                    <div className="section6-left">
                        <h4>
                            Begin Your Journey at <span>Pavna</span>
                        </h4>

                        <p>
                            Step into a world of limitless possibilities. Join a vibrant
                            community of scholars, innovators, and future leaders today.
                        </p>
                    </div>

                    <div className="section6-right">

                        <div className="action-card">
                            <div>
                                <h2>Download Brochure</h2>
                                <p>Explore our Curriculum & Campus</p>
                            </div>

                            <FaDownload className="action-icon" />
                        </div>

                        <div className="action-card">
                            <div>
                                <h2>Apply Now</h2>
                                <p>Admission Open, Start Your Application Process</p>
                            </div>

                            <FaArrowAltCircleRight className="action-icon" />
                        </div>

                    </div>

                </div>
            </section>
            <section className="section7">
                <div className="section7-container">

                    {/* Top Row */}
                    <div className="footer-top">

                        <div className="footer-logo">
                            <img src={img8} alt="Pavna School" />
                        </div>

                        <div className="footer-description">
                            <p>
                                Empowering future leaders through holistic education, dynamic
                                global curriculum, and unwavering core values.
                            </p>
                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="footer-links">

                        <div className="footer-column">
                            <h2>OUR CAMPUSES</h2>

                            <h4>Pavna School, Aligarh</h4>
                            <p>Agra Highway, Near Gyan Mahavidyalaya, Aligarh</p>
                            <span>+91 8006409344</span>

                            <h4>Pavna International School, Sasni</h4>
                            <p>Aligarh–Agra Highway, Sasni, Hathras</p>
                            <span>+91 82669 54007</span>

                            <h4>Pavna School, Hathras</h4>
                            <p>SH-33, Hathras–Mathura Road</p>
                            <span>+91 7500182182</span>
                        </div>

                        <div className="footer-column">
                            <h2>ABOUT</h2>
                            <p>Overview</p>
                            <p>CBSE & School Policies</p>
                            <p>School Managing Committee</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>

                        <div className="footer-column">
                            <h2>ACADEMICS</h2>
                            <p>Faculty</p>
                            <p>Assessment & Evaluation Policy</p>
                            <p>Beyond Academics</p>
                            <p>Infrastructure</p>
                        </div>

                        <div className="footer-column">
                            <h2>ADMISSION</h2>
                            <p>Admission Process</p>
                            <p>Apply Online</p>
                            <p>Interaction Syllabus</p>
                            <p>Fee Structure</p>
                            <p>Enquiry</p>
                            <p>FAQ</p>
                        </div>

                        <div className="footer-column">
                            <h2>STUDENT & ALUMNI</h2>
                            <p>Alumni Login</p>
                            <p>Profile Display</p>
                            <p>Transfer Certificate</p>
                            <p>Hostel</p>
                            <p>Login</p>
                        </div>

                    </div>

                </div>
            </section>
            <footer className="footer-bottom">
                <div className="footer-bottom-container">

                    <span>
                        © 2026 Pavna School. All Rights Reserved. Design & Developed by
                        <strong> Mediagarh</strong>
                    </span>

                    <ul>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>

                        <li>
                            <Link to="#">Terms of Service</Link>
                        </li>

                        <li>
                            <Link to="#">Sitemap</Link>
                        </li>
                    </ul>

                </div>
            </footer>
        </>
    )
}
