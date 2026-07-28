import React from 'react'
import img1 from '../../assets/schoolImages/Aligarh-scaled.webp'
import "./Infrastructure.css";

export default function Infrastructure() {
    return (
        <section
            className="infrastructure-hero"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="overlay"></div>

            <div className="infrastructure-content">
                <h1>Infrastructure</h1>

                <p>
                    Our state-of-the-art infrastructure is thoughtfully designed to
                    support holistic learning in a safe, secure, and inspiring
                    environment that encourages both academic excellence and personal
                    growth. Every facility on campus reflects our commitment to providing
                    the best resources for our students, from advanced laboratories and
                    modern digital learning spaces to well-planned sports, wellness, and
                    residential facilities. Each space is carefully curated to promote
                    innovation, collaboration, and comfort, ensuring that students have
                    access to an environment where they can fully engage in their learning
                    journey. With a perfect blend of technology, functionality, and
                    aesthetics, our infrastructure empowers students to explore new
                    possibilities, enhance their skills, and grow into confident, capable
                    individuals ready to take on future challenges.
                </p>
            </div>
        </section>
    );
}