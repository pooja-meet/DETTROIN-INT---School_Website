import React from 'react'
import img1 from '../../assets/schoolImages/Aligarh-scaled.webp'
import './About.css'
export default function Blog() {
  return (
    <>
       <section
                className="overview-hero"
                style={{ backgroundImage: `url(${img1})` }}>
                <div>
                    <h1>Blog</h1>
                    <p>Our Managing Committee oversees the effective functioning of the institution, ensuring that policies and plans are implemented efficiently. With a hands-on approach and dedication to quality, they support day-to-day operations and work closely with the team to maintain high standards in all areas.</p>

                </div>
            </section > 
    </>
  )
}
