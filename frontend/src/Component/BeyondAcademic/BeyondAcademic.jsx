import React from "react";
import "./Beyond.css";

import img1 from "../../assets/schoolImages/Aligarh-scaled.webp";
import img2 from "../../assets/schoolImages/1-1-1-1.webp";
import img3 from "../../assets/schoolImages/1-532-1.webp";
import img4 from "../../assets/schoolImages/2-1-1-1.webp";
import img5 from "../../assets/schoolImages/2-561-1.webp";
import img6 from "../../assets/schoolImages/2-562-1.webp";
import img7 from "../../assets/schoolImages/3-1-1-1.webp";
import img8 from "../../assets/schoolImages/3-51-1.webp";
import img9 from "../../assets/schoolImages/3-52-2.webp";
import img10 from "../../assets/schoolImages/6-10-1.webp";
import img11 from "../../assets/schoolImages/7-1-1-1.webp";
import img12 from "../../assets/schoolImages/7-2-1-1.webp";
import img13 from "../../assets/schoolImages/7-3-1-1.webp";

export default function BeyondAcademic() {
    const images = [
        img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img11, img12, img13,
    ];

    return (
        <>
            <section
                className="beyond-hero"
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className="overlay"></div>

                <div className="beyond-content">
                    <h1>Beyond Academics</h1>
                </div>
            </section>

            <section className="beyond-section">

                <div className="beyond-text">
                    <p>
                        Beyond academics, our school fosters a vibrant and dynamic ecosystem
                        where students are encouraged to explore, engage, and excel through
                        a wide spectrum of co-curricular experiences. We believe that true
                        education extends beyond textbooks, nurturing curiosity,
                        creativity, and critical thinking at every step.
                    </p>
                </div>

                <div className="gallery">
                    {images.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={image} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}