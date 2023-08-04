// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import job from "./job.json";

// function JobDetails({ id }) {
//   if (id === null || id === undefined || id === 0) {
//     return null;
//   }

//   const availableJob = job.find(doc => doc.jobId === id);
//   // const {
//   //     companyName, companyAddress, companyIntroduction, jobNature, jobLocation, jobName, jobDescription, skillRequirements, experience, salary, applicationDeadline
//   // } = availableJob;

//   // console.log(companyName, companyAddress, companyIntroduction, jobNature, jobLocation, jobName, jobDescription, skillRequirements, experience, salary, applicationDeadline)
//   return (
//     <div className="job-details-container pb-5">
//       <Container id="details">
//         <div className="job-description-header">
//           <h2 className="job-header">JOB DETAILS</h2>
//         </div>
//         <div>
//           <Row className="details-container">
//             <Col md={8}>
//               <h4 className="single-header">Job Title</h4>
//               <h6 style={{ fontWeight: 600 }}>
//                 {availableJob?.jobName[0]?.name}
//               </h6>
//               <p className="single-details">
//                 {availableJob?.jobName[0]?.description}
//               </p>

//               {availableJob?.jobDescription ? (
//                 <>
//                   <h5 className="single-header">
//                     Job Description / Responsibility
//                   </h5>
//                   <ul style={{ listStyleType: "circle", marginLeft: "35px" }}>
//                     {availableJob?.jobDescription.map((doc, i) => (
//                       <li key={i}>{doc?.point}</li>
//                     ))}
//                   </ul>
//                 </>
//               ) : null}
//               <h5 className="single-header">Job Nature</h5>
//               <p className="single-details">{availableJob?.jobNature}</p>
//               <h5 className="single-header">Salary</h5>
//               <p className="single-details">{availableJob?.salary} BDT</p>

//               {availableJob?.experience ? (
//                 <>
//                   <h5 className="single-header">Experience Requirements</h5>
//                   <p className="single-details">{availableJob?.experience}</p>
//                 </>
//               ) : null}
//               <h5 className="single-header">Additional Job Requirements</h5>
//               <ul style={{ listStyleType: "circle", marginLeft: "35px" }}>
//                 {availableJob?.skillRequirements.map((doc, i) => (
//                   <li key={i}>{doc?.point}</li>
//                 ))}
//               </ul>
//               <h5 className="single-header">Gender</h5>
//               <p className="single-details">{availableJob?.gender}</p>

//               <h5 className="single-header">Application Deadline</h5>
//               <p className="single-details">
//                 {availableJob?.applicationDeadline}
//               </p>

//               <h5 className="single-header">Job Location</h5>
//               <p className="single-details">{availableJob?.jobLocation}</p>

//               <h5 className="single-header">Other Benifits</h5>
//               <p className="single-details">{availableJob?.otherBenifits}</p>

//               <a href="#top">
//                 <button className="btn btn-primary mb-3">Apply Now</button>
//               </a>
//             </Col>
//             <Col md={4} className="job-summary">
//               <div>
//                 <p className="summary-header">
//                   {availableJob?.jobName[0]?.name}
//                 </p>
//                 <hr />
//                 <div className="d-flex">
//                   <div>
//                     <p>
//                       <b>Job Nature :</b> {availableJob?.jobNature}
//                     </p>
//                     {availableJob?.experience ? (
//                       <p>
//                         <b>Experience :</b> {availableJob?.experience}
//                       </p>
//                     ) : null}
//                     <p>
//                       <b>Salary :</b> {availableJob?.salary} BDT
//                     </p>
//                   </div>
//                   <div>
//                     <p>
//                       <b>Application Deadline :</b>{" "}
//                       {availableJob?.applicationDeadline}
//                     </p>
//                     <p>
//                       <b>Job Location :</b> {availableJob?.jobLocation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default JobDetails;
