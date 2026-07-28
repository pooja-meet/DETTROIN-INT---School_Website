import React from "react";
import img1 from "../../assets/schoolImages/Aligarh-scaled.webp";
import "./academic.css";

export default function Faculty() {
    return (
        <>
            <section
                className="faculty-hero"
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className="faculty-overlay">
                    <h1>Faculty</h1>
                </div>
            </section>

            <section className="faculty-section">
                <div className="faculty-container">

                    <h2>Our Faculty</h2>

                    <p>
                        Pavna School, Aligarh has a well-qualified, experienced and
                        hardworking staff, not only expert in their own fields but
                        trained to motivate students towards holistic learning. Our
                        institute consists of 45 full-time highly qualified teachers,
                        who have extensive teaching experience in their respective
                        fields.
                    </p>

                    <p>
                        Each staff member imbibes the Pavna School culture and ethos,
                        which is the thread that binds the entire fraternity of the
                        Pavna Group. This academic community not only imparts
                        instruction through regular teaching periods but also engages
                        students in classroom activities, house competitions, special
                        assemblies, educational trips, science exhibitions, and many
                        other enriching experiences.
                    </p>

                    <p>
                        The teaching staff is enthusiastic, dedicated, conscientious,
                        and highly motivated to adopt innovative teaching methods.
                        They are role models who inspire students to develop strong
                        values, confidence, leadership qualities, and a sense of
                        responsibility toward society and the nation.
                    </p>

                </div>
            </section>
        </>
    );
}