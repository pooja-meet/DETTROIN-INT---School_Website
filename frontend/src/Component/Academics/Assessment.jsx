import React from 'react'
import img1 from '../../assets/schoolImages/Aligarh-scaled.webp'
import './academic.css'

export default function Assessment() {
    return (
        <>
            <section
                className="assessment-hero"
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className="assessment-overlay">
                    <h1>Assessment & Evaluation Policy</h1>
                </div>
            </section>

            <section className="assessment-section">
                <div className="assessment-container">

                    <h2>Assessment & Evaluation Policy</h2>

                    <p>
                        The school follows a comprehensive and continuous assessment
                        system that focuses on the overall development of the learner.
                        Assessment is viewed as a tool to support learning, recognise
                        strengths, identify areas for improvement, and help every child
                        progress at their own pace.
                    </p>

                    <p>
                        The assessment process is designed to be age-appropriate,
                        competency-based, and reflective, in accordance with the
                        recommendations of the National Education Policy and the
                        National Curriculum Framework, while also following CBSE
                        guidelines for the relevant classes.
                    </p>

                    <p>
                        Assessment includes observation, participation, projects,
                        written work, presentations, and examinations, depending on
                        the age of the child.
                    </p>

                </div>
            </section>
        </>
    )
}