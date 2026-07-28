import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import img from "../../assets/schoolImages/Link-Logo-→-Pavna-School-Logo.webp";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    <img src={img} alt="Logo" />
                </div>
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setActiveMenu("about")}
                        onMouseLeave={() => setActiveMenu("")}
                    >
                        <Link className="menu-title">
                            About Us
                            {activeMenu === "about" ? <IoChevronUp /> : <IoChevronDown />}
                        </Link>

                        {activeMenu === "about" && (
                            <ul className="dropdown-menu">
                                <li><Link to="/overview">Overview</Link></li>
                                <li><Link to="/cbse-policy">CBSE & School Policies</Link></li>
                                <li><Link to="/school-committee">School Managing Committee</Link></li>
                                <li><Link to="/blog">Blog</Link></li>

                            </ul>
                        )}
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setActiveMenu('academics')}
                        onMouseLeave={() => setActiveMenu('')}
                    >
                        <Link className="menu-title">
                            Academics {activeMenu === 'academics' ? <IoChevronUp /> : <IoChevronDown />}
                        </Link>

                        {activeMenu === 'academics' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/faculty">Faculty</Link></li>
                                <li><Link to="/assessment-evaluation-policy">Assessment & Evaluation Policy </Link></li>

                            </ul>
                        )}
                    </li>

                    <li><HashLink smooth to="/beyond-academic/" onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }>Beyond Academics</HashLink></li>

                    <li><Link to="/infrastructure/" onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }>Infrastructure</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setActiveMenu('admission')}
                        onMouseLeave={() => setActiveMenu('')}>
                        <Link className="menu-title">
                            Admission {activeMenu === 'admission' ? <IoChevronUp /> : <IoChevronDown />}
                        </Link>
                        {activeMenu === 'admission' && (
                            <ul className="dropdown-menu">
                                <li><Link to="#">Admission Process</Link></li>
                                <li><Link to="#">Apply Online</Link></li>
                                <li><Link to="#">Interaction Syllabus</Link></li>
                                <li><Link to="#">Fee Structure</Link></li>
                                <li><Link to="#">Enquiry</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><HashLink smooth to="/#contact">
                        Contact Us
                    </HashLink></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setActiveMenu('alumni')}
                        onMouseLeave={() => setActiveMenu('')}>
                        <Link className="menu-title">
                            Our Alumni {activeMenu === 'alumni' ? <IoChevronUp /> : <IoChevronDown />}
                        </Link>
                        {activeMenu === 'alumni' && (
                            <ul className="dropdown-menu">
                                <li><Link to="#">Alumni Login</Link></li>
                                <li><Link to="#">Profile Display</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="#" onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }>Hostel</Link></li>
                </ul>

                <Link to="/login" className="login-btn">
                    <FaUser />
                    Login
                </Link>

            </nav>

            <Outlet />
        </>
    );
}