import React from 'react'
import img from '../../assets/schoolImages/Section-4-1-scaled.webp'
import "./hostel.css"
export default function Hostel() {
  return (
    <>
      <section
        className="hotel-hero"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="overlay"></div>

        <div className="hotel-content">
          <h1>Where Character Is Built Alongside Academics</h1>

          <p>
            Pavna School Boarding Campus offers a nurturing, structured, and inspiring
            environment — giving every child the freedom to grow, learn, and thrive far
            beyond the ordinary classroom.
          </p>
        </div>
      </section>

    </>
  )
}
