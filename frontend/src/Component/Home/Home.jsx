import React from "react";
import {Link} from 'react-router-dom'
import img from "../../assets/schoolImages/Aligarh-scaled.webp";
import img2 from "../../assets/schoolImages/Rectangle-1-3.webp";
import img3 from '../../assets/schoolImages/Group-3-1.webp'
import img4 from '../../assets/schoolImages/Border.webp'
import img5 from '../../assets/schoolImages/Border-1-1.webp'
import img6 from '../../assets/schoolImages/Removed-overflow-hidden-from-the-main-wrapper-to-allow-pop-out-effect-1-1-scaled.webp'
import img7 from '../../assets/schoolImages/Cutout-PNG-Image-Container-h-120-to-h-130-to-pop-out-the-top-→-Student-Cutout-1.webp'
import "./Home.css";
import { FaUserGraduate, FaLandmark, FaBookReader, FaArrowAltCircleRight, FaDownload, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">

          <div className="left">
            <span className="campus">● Aligarh Campus</span>

            <h1>
              Nurturing Future Leaders
              <br />
              Through Holistic Education
            </h1>

            <h3>#BeYourself</h3>

            <button>Admission Open</button>
          </div>

          <div className="right">
            <img src={img2} alt="" />
          </div>

        </div>
      </section>
      <section className="section2">

        <h2 className="title">Impact of Pavna School Legacy</h2>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={7000}
          spaceBetween={20}
          slidesPerView={4}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="item">
              <FaBookReader className="icon" />
              <h1>30000+</h1>
              <p>Learners Base</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <FaUserFriends className="icon" />
              <h1>20000+</h1>
              <p>Happy Parents</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <FaUserGraduate className="icon" />
              <h1>6000+</h1>
              <p>Alumni Base</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <FaLandmark className="icon" />
              <h1>28+</h1>
              <p>Year Legacy</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <FaChalkboardTeacher className="icon" />
              <h1>250+</h1>
              <p>Educators</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="section3">
        <div className="section3-container">

          <div className="section3-left">
            <h1>Welcome to Pavna School, Aligarh</h1>

            <p>
              Founded in 1998 by Shri Pawan Jain (Founder, Pavna Group),
              Pavna School (formerly DPS Aligarh) began as a dream to provide
              innovative, world-class education, shaping young minds in a
              supportive environment.
            </p>

            <p>
              We strive to ignite a passion for learning and develop practical
              skills for a rapidly evolving world. Our cultural tapestry
              cohesively envelops a nurturing, inclusive community where every
              student is empowered to achieve their full potential.
            </p>

            <p>
              Guided by our commitment to excellence, we dedicate ourselves to
              preparing students to be ethical, knowledgeable, and impactful
              leaders, ready to contribute to society and excel in their chosen
              fields.
            </p>

            <button>Read More</button>
          </div>

          <div className="section3-right">
            <img src={img3} alt="Pavna School" />
          </div>

        </div>
      </section>
      <section className="section4">
        <h2>Management</h2>
        <h1 className="section4-title">School Board of Management</h1>

        <div className="management-card">
          <div className="section4-image">
            <img src={img4} alt="Chairperson" />
          </div>

          <div className="section4-content">
            <h2>Ms. Priya Jain</h2>
            <h4>Our Chairperson</h4>

            <p>
              At Pavna School (formerly DPS Aligarh), we take pride in shaping not only bright minds but also compassionate hearts. For us, education is a holistic journey that extends beyond academic success, nurturing emotional well-being, moral values, and resilience. We believe learning should be a joyful and enriching experience, free from undue pressure. By fostering a positive and stress-free environment, we empower students to explore their unique potential with confidence. This approach instills a genuine love for learning, sharpens focus, and helps shape well-rounded individuals prepared to thrive in all aspects of life.
            </p>
          </div>
        </div>

        <div className="management-card reverse">
          <div className="section4-image">
            <img src={img5} alt="Principal" />
          </div>

          <div className="section4-content">
            <h2>Ms. Arti Jha</h2>
            <h4>Principal</h4>

            <p>
              I am pleased and privileged to be the principal of Pavna School, Aligarh. Formerly known as DPS Aligarh, the institution has established a reputation for academic and holistic excellence through the hard work of our students, teachers, parents, and staff at a school with such a rich tradition both in and out of the classroom. We, on the other hand, do not believe in complacency. Our country’s education is changing into a new form, shifting from content to concept. We, too, are committed and dedicated to overcoming the paradigm shift difficulty. The school is embracing and adjusting the modifications in a comprehensive manner.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section5"
        style={{ backgroundImage: `url(${img6})` }}
      >
        <div className="section5-container">

          <div className="section5-left">
            <p className="section5-tag">
              • Inspiring Students to Learn, Grow and Lead
            </p>

            <h1>Discover the Future of <span style={{ color: 'yellow' }}>Learning at Pavna</span> </h1>

            <div className="section5-border">
              <h3>Academic Excellence • Leadership Skills</h3>
              <p>Understanding the path of learning at Pavna.</p>
            </div>

            <button>Download Brochure</button>
          </div>

          <div className="section5-right">
            <img src={img7} alt="Student" />
          </div>

        </div>
      </section>
     
    </>
  );
}