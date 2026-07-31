import React from 'react'
import img from '../../../assets/schoolImages/Rectangle-1-3.webp'
import './admission.css'
export default function Addmission() {
  return (
    <>
      <section className='admission'>
        <div
          className="admission-hero"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="overlay">


            <div className="admission-content">
              <h1>Admission Process</h1>
              <p>Pavna School Aligarh has scheduled to open admissions for classes Playgroup to Class IX & XI. The school yearns to build students who are not only magnificent in academics but at the same time inculcating and instilling social and ethical values, skills and attitudes to contribute positively toward the upliftment of the society. Thus, the admission process is designed in such a way that it tests both aptitude and attitude of the child. While the test assesses the proficiency in various subjects, it will also reveal the child’s problem-solving skills. Portions integrated in the admission process will also examine the applicant’s belief and value system on the basis of decisions they make. We believe that this method of testing the student will allow us to look at them holistically.</p>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className='admission-container'>
          <h2>Registration :</h2>
          <h2>Application forms are available at Pavna School City Office and respective school offices/Online.</h2>
          <h3>Age Requirement For Admission</h3>
          <div>
            <ul><li>Playgroup: 3 years as on 1st April in the admission year.</li>
              <li>Nursery: 4 years as on 1st April in the admission year.</li>
              <li>Prep: 5 years as on 1st April in the admission year.</li>
              <li>Class I: 6 years as on 1st April in the admission year.</li>
            </ul>
          </div>
          <h2>REGISTRATION ONLINE</h2>
          <p>Online Registration link for Admission will stay open throughout the year for the Academic Session 2026-2027 will be available from 1st January 2026 at our school website.</p>
          <h2>Points to Remember at the time of Registration Online:</h2>
          <div><ul>
            <li>The Registration Form should be duly filled in all respects after logging onto the school website.</li>
            <li>A special Registration No. will be assigned to the student after filling the form. Registration Fees will be collected online only while filling the online registration form.</li>
            <li>The applications will be scrutinized and only those found complete in all respects will be selected for Observation/Entrance Test.</li>
            <li>Intimation of the exact date and time of the entrance exam, along with the Admit Card will be provided over mail and also our front desk will call you for the same.</li>
          </ul>
            <p><strong>Note :</strong>Applying for registration does not imply admission, which is subject to Observation cum-Interaction/ Assessment Test. It is also subject to the availability of seats.</p>
            <h2>Documents Required For Registration Offline:</h2>
            <ul>
              <li>Duly filled and signed application form.</li>
              <li>1 Passport size photograph of ward.</li>
              <li>Photocopy of Date of Birth certificate.</li>
            </ul>
            <h2>Admission Credentials</h2>
            <ul>
              <li>Admission to Play Group, Nursery & Prep. is allotted on the basis of interaction with the child and the parents.</li>
              <li>For classes I onwards there is an eligibility test followed by an interaction with parents.</li>
            </ul>
            <h2>Entrance Test</h2>
            <ul><li>Play Group, Nursery, Preparatory and Class I will be granted admission on the basis of the Interview which will be conducted at school.</li>
              <li>From Class II onwards, a Written Assessment test will be conducted which will be followed by an Interactive Session.</li>
              <li>Parents will get the acknowledge receipt (Downloadable) after the registration, which will be shown at school reception when report for the entrance test.</li>
            </ul>
            <h2>Syllabus of the Entrance:</h2>
            <p>Please note that the syllabus of the assessment for admission has been designed by a professional team of educationists and psychologists to make it stress free for children. The details of the syllabus are uploaded at the website under the Academics section.</p>
            <h2>Section List</h2>
            <p>List of all successful candidates will be displayed on the notice board of the school and will be published at our school website. The parents of successful candidates will be required to contact the school office for the completion of admission formalities by depositing the required fee and other charges along with the necessary documents.</p>
          </div>
        </div>

      </section>
    </>
  )
}
