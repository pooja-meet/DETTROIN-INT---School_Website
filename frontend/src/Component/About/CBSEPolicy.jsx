import React from 'react'
import img1 from '../../assets/schoolImages/Aligarh-scaled.webp'
import './About.css'
export default function CBSEPolicy() {
    return (
        <>
            <section
                className="overview-hero"
                style={{ backgroundImage: `url(${img1})` }}>
                <div>
                    <h1 style={{color:"orange"}}>CBSE & School Policies</h1>
                </div>
            </section >
        </>
    )
}
