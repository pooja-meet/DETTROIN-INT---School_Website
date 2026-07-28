import React from 'react'
import img1 from '../../assets/schoolImages/Aligarh-scaled.webp'
import './About.css'
import img2 from '../../assets/schoolImages/Image-Section.webp'
import img3 from '../../assets/schoolImages/Image-Section-1.webp'
export default function Overview() {
    return (
        <>
            <section
                className="overview-hero"
                style={{ backgroundImage: `url(${img1})` }}>
                <div>
                    <h1>Overview</h1>
                    <p>With a proud legacy of 28 years, Pavna School stands as a symbol of excellence in education, dedicated to nurturing young minds through a balanced blend of academic rigor and holistic development. The school fosters a learning environment that encourages curiosity, creativity, and critical thinking, supported by experienced educators and dynamic curriculums. Emphasizing values, discipline, and life skills, Pavna School prepares students to face future challenges with confidence and integrity.</p>
                </div>
            </section >
            <section className="overview-section">
                <div className="overview-container">

                    {/* Vision */}
                    <div className="overview-box">
                        <div className="overview-content">
                            <h2>VISION</h2>
                            <p>
                                To enable every learner to become the best version of themselves –
                                confident in their identity, grounded in values, and inspired to
                                learn, lead, and live with purpose.
                            </p>

                            <p>
                                We envision Pavna Schools as vibrant ecosystems that blend
                                intellect with humility, tradition with innovation, ambition with
                                compassion, and individuality with community.
                            </p>
                        </div>

                        <div className="overview-image">
                            <img src={img2} alt="Vision" />
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="overview-box reverse">
                        <div className="overview-content">
                            <h2>MISSION</h2>

                            <p>
                                Our mission is to provide a nurturing and inspiring educational
                                environment where every learner feels valued, respected,
                                empowered to reach their full potential, and express themselves
                                freely.
                            </p>

                            <p>
                                Through innovative teaching practices, dedicated faculty, and a
                                unified curriculum, we aim to shape confident, compassionate,
                                and curious learners who are prepared to thrive in a dynamic
                                world.
                            </p>
                        </div>

                        <div className="overview-image">
                            <img src={img3} alt="Mission" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
