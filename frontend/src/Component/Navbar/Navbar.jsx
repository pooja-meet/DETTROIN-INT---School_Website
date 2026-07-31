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
    const handleNavigate = () => {
        window.scrollTo(0, 0);
    };
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
                                <li><Link to="/overview" onClick={handleNavigate}>Overview</Link></li>
                                <li><Link to="/cbse-policy" onClick={handleNavigate}>CBSE & School Policies</Link></li>
                                <li><Link to="/school-committee" onClick={handleNavigate}>School Managing Committee</Link></li>
                                <li><Link to="/blog" onClick={handleNavigate}>Blog</Link></li>

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
                                <li><Link to="/faculty" onClick={handleNavigate}>Faculty</Link></li>
                                <li><Link to="/assessment-evaluation-policy" onClick={handleNavigate}>Assessment & Evaluation Policy </Link></li>

                            </ul>
                        )}
                    </li>

                    <li><HashLink smooth to="/beyond-academic/" onClick={handleNavigate
                    }>Beyond Academics</HashLink></li>

                    <li><Link to="/infrastructure/" onClick={handleNavigate}>Infrastructure</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setActiveMenu('admission')}
                        onMouseLeave={() => setActiveMenu('')}>
                        <Link className="menu-title">
                            Admission {activeMenu === 'admission' ? <IoChevronUp /> : <IoChevronDown />}
                        </Link>
                        {activeMenu === 'admission' && (
                            <ul className="dropdown-menu">
                                <li><Link to="/admission-process" onClick={handleNavigate}>Admission Process</Link></li>
                                <li><Link to="#" onClick={handleNavigate}>Apply Online</Link></li>
                                <li><Link to="#" onClick={handleNavigate}>Interaction Syllabus</Link></li>
                                <li><Link to="#" onClick={handleNavigate}>Fee Structure</Link></li>
                                <li><Link to="#" onClick={handleNavigate}>Enquiry</Link></li>
                                <li><Link to="/faq" onClick={handleNavigate}>FAQ</Link></li>
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
                                <li><Link to="#" onClick={handleNavigate}>Alumni Login</Link></li>
                                <li><Link to="#" onClick={handleNavigate}>Profile Display</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/hotel" onClick={handleNavigate}>Hostel</Link></li>
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