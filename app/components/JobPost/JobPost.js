// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useEffect, useRef, useState } from "react";
// import { Col, Container, Nav, Navbar, Row, Spinner } from "react-bootstrap";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { Radio, RadioGroup } from "react-radio-group";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.svg";
// import JobDetails from "./JobDetails";
// import "./jobPost.css";

// function JobPost() {
//   const [cvFile, setCvFile] = useState();
//   const [avatar, setAvatar] = useState();
//   const [gender, setGender] = useState("male");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [failureMessage, setFailureMessage] = useState("");
//   const [resetBtn, setResetBtn] = useState(false);
//   const [jobId, setJobId] = useState(0);
//   console.log(gender);

//   // clear form data after submit
//   const ref = useRef(null);
//   useEffect(() => {
//     ref.current.click();
//   }, [resetBtn]);

//   const initialValues = {
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     eduction: "",
//     presentAddress: "",
//     permanentAddress: "",
//     mobileNumber: "",
//     email: "",
//     nationality: "",
//     department: "",
//     position: "",
//     currentVacation: "",
//     cv: "cv",
//   };
//   const validate = values => {
//     const errors = {};

//     // name validation start
//     if (!values.firstName) {
//       errors.firstName = "Required";
//     } else if (values.firstName.length < 2) {
//       errors.firstName = "name is too short!";
//     }
//     if (!values.lastName) {
//       errors.lastName = "Required";
//     } else if (values.lastName.length < 2) {
//       errors.lastName = "name is too short!";
//     }
//     // name validation end

//     // Educational Qualification validation start
//     if (!values.eduction) {
//       errors.eduction = "Required";
//     }
//     // Educational Qualification validation end

//     // address validation start
//     if (!values.presentAddress) {
//       errors.presentAddress = "Required";
//     }
//     if (!values.permanentAddress) {
//       errors.permanentAddress = "Required";
//     }
//     // address validation end

//     // contact number and phone validation start
//     const numberValidate = new RegExp(
//       /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/
//     );
//     if (!values.mobileNumber) {
//       errors.mobileNumber = "Required";
//     } else if (!numberValidate.test(values.mobileNumber)) {
//       errors.mobileNumber = "Invalid mobile number";
//     }
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = "Invalid email address";
//     }
//     // contact number and phone validation start

//     // nationality validation start
//     if (!values.nationality) {
//       errors.nationality = "Required";
//     }
//     // nationality validation end

//     // department and position validation start
//     if (!values.department) {
//       errors.department = "Required";
//     }
//     if (!values.position) {
//       errors.position = "Required";
//     }
//     if (!values.currentVacation) {
//       errors.currentVacation = "Required";
//     }
//     // department and position validation end

//     // cv validation
//     if (!values.cv) {
//       errors.cv = "Required";
//     }

//     return errors;
//   };

//   const onSubmit = (values, { resetForm }) => {
//     // loading state change
//     setLoading(true);
//     setSuccessMessage("");
//     setFailureMessage("");

//     const {
//       firstName,
//       middleName,
//       lastName,
//       eduction,
//       presentAddress,
//       permanentAddress,
//       mobileNumber,
//       email,
//       nationality,
//       department,
//       position,
//       currentVacation,
//     } = values;

//     const fullName = `${firstName} ${middleName} ${lastName}`;
//     const data = new FormData();

//     data.append("name", fullName);
//     data.append("sex", gender);
//     data.append("eduction", eduction);
//     data.append("presentAddress", presentAddress);
//     data.append("permanentAddress", permanentAddress);
//     data.append("contactNumber", mobileNumber);
//     data.append("email", email);
//     data.append("nationality", nationality);
//     data.append("department", department);
//     data.append("position", position);
//     data.append("currentVacation", currentVacation);
//     data.append("file", cvFile);
//     data.append("avatar", avatar);

//     axios
//       .post("https://fierce-fortress-97953.herokuapp.com/sendApplication", data)
//       .then(res => {
//         setLoading(false);
//         setFailureMessage("");
//         setSuccessMessage(res.data);
//         setResetBtn(true);
//         resetForm();
//       })
//       .catch(err => {
//         setLoading(false);
//         setSuccessMessage("");
//         setFailureMessage("Request Failed!!");
//       });
//   };

//   const formik = useFormik({
//     initialValues,
//     validate,
//     onSubmit,
//   });

//   const [technology, setTechnology] = useState(false);
//   const [market, setMarket] = useState(false);
//   const [sales, setSales] = useState(false);
//   const [operations, setOperations] = useState(false);

//   const options = [
//     { value: 1, label: "Frontend Developer" },
//     { value: 2, label: "Backend Developer" },
//   ];
//   const options2 = [
//     { value: 3, label: "Marketing Executive(Digital channel)" },
//     { value: 4, label: "Marketing Executive B2B" },
//   ];
//   const options3 = [
//     { value: 5, label: "Sales Manager" },
//     { value: 6, label: "Sales Executive" },
//   ];
//   const options4 = [{ value: 7, label: "Key Account Manager" }];

//   return (
//     <>
//       <Navbar
//         id="top"
//         bg="white"
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#fbb034",
//           backgroundImage: "linear-gradient(315deg, #ffa81c 0%, #e8c900 74%)",
//           boxShadow: "0 0 5px 0 #817f7c",
//           position: "fixed",
//           top: "0",
//           width: "100%",
//           zIndex: 9999,
//         }}
//       >
//         <Link to="/">
//           <img
//             className="w-20"
//             src={logo}
//             alt="HawkEyes Digital Monitoring Ltd."
//             style={{ border: "2px solid #ffc61b", borderRadius: "5px" }}
//           />
//         </Link>
//         <Nav className="ml-auto">
//           <Link
//             className="hover:bg-gray-700 text-white focus:text-black px-3 py-2 rounded-md text-lg font-bold"
//             to="/"
//           >
//             {" "}
//             BACK TO HOME
//           </Link>
//         </Nav>
//       </Navbar>
//       <div style={{ paddingBottom: "50px", marginTop: "80px" }}>
//         <Container>
//           <Row style={{ paddingTop: "30px" }}>
//             <Col>
//               <div>
//                 <h4 className="job-header mb-5">Find Jobs By Skills</h4>

//                 <div className="job-group-container">
//                   <Dropdown
//                     options={options}
//                     onChange={e => {
//                       setJobId(e.value);
//                       setTimeout(() => {
//                         window.scrollTo(0, document.body.scrollHeight);
//                       }, 100);
//                     }}
//                     value="Technology"
//                     placeholder="Select an option"
//                   />
//                 </div>

//                 <div className="job-group-container">
//                   <Dropdown
//                     options={options2}
//                     onChange={e => {
//                       setJobId(e.value);
//                       setTimeout(() => {
//                         window.scrollTo(0, document.body.scrollHeight);
//                       }, 100);
//                     }}
//                     value="Marketing"
//                     placeholder="Select an option"
//                   />
//                 </div>

//                 <div className="job-group-container">
//                   <Dropdown
//                     options={options3}
//                     onChange={e => {
//                       setJobId(e.value);
//                       setTimeout(() => {
//                         window.scrollTo(0, document.body.scrollHeight);
//                       }, 100);
//                     }}
//                     value="Sales"
//                     placeholder="Select an option"
//                   />
//                 </div>

//                 <div className="job-group-container">
//                   <Dropdown
//                     options={options4}
//                     onChange={e => {
//                       setJobId(e.value);
//                       setTimeout(() => {
//                         window.scrollTo(0, document.body.scrollHeight);
//                       }, 100);
//                     }}
//                     value="Operations"
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>
//             </Col>
//             <Col md={6} className="job-form-container" id="apply">
//               <form onSubmit={formik.handleSubmit}>
//                 <div className="form-group d-flex justify-content-between">
//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="firstName">First Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="First Name"
//                       name="firstName"
//                       id="firstName"
//                       value={formik.firstName}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.firstName && formik.errors.firstName ? (
//                       <p className="error-message">
//                         <small>{formik.errors.firstName}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="middleName">Middle Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Middle Name"
//                       name="middleName"
//                       id="middleName"
//                       value={formik.middleName}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                   </div>
//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="lastName">Last Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Last Name"
//                       name="lastName"
//                       id="lastName"
//                       value={formik.lastName}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.lastName && formik.errors.lastName ? (
//                       <p className="error-message">
//                         <small>{formik.errors.lastName}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                 </div>

//                 <div className="gender-container">
//                   <p className="gender-title">Sex</p>

//                   <RadioGroup name="gender" onChange={e => setGender(e)}>
//                     <label style={{ marginRight: "10px" }}>
//                       <Radio value="male" style={{ marginRight: "3px" }} />
//                       Male
//                     </label>
//                     <label style={{ marginRight: "10px" }}>
//                       <Radio value="female" style={{ marginRight: "3px" }} />
//                       Female
//                     </label>
//                     <label style={{ marginRight: "10px" }}>
//                       <Radio value="other" style={{ marginRight: "3px" }} />
//                       Other
//                     </label>
//                   </RadioGroup>
//                 </div>

//                 <div className="education-container">
//                   <label htmlFor="eduction" className="education-title">
//                     Educational Qualification
//                   </label>
//                   <select
//                     name="eduction"
//                     id="eduction"
//                     value={formik.eduction}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className="select-box"
//                   >
//                     <option value="">Select</option>
//                     <option value="CSE">CSE</option>
//                     <option value="BBA">BBA</option>
//                     <option value="MBA">MBA</option>
//                     <option value="Bsc">BSc</option>
//                     <option value="MSc">MSc</option>
//                     <option value="Honors">Honors</option>
//                     <option value="HSC">HSC</option>
//                   </select>
//                   {formik.touched.eduction && formik.errors.eduction ? (
//                     <p className="error-message">
//                       <small>{formik.errors.eduction}</small>
//                     </p>
//                   ) : null}
//                 </div>

//                 <div className="form-group d-flex justify-content-between address-container">
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="presentAddress">Present Address</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Present Address"
//                       name="presentAddress"
//                       id="presentAddress"
//                       value={formik.presentAddress}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.presentAddress &&
//                     formik.errors.presentAddress ? (
//                       <p className="error-message">
//                         <small>{formik.errors.presentAddress}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="permanentAddress">Permanent Address</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Permanent Address"
//                       name="permanentAddress"
//                       id="permanentAddress"
//                       value={formik.permanentAddress}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.permanentAddress &&
//                     formik.errors.permanentAddress ? (
//                       <p className="error-message">
//                         <small>{formik.errors.permanentAddress}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                 </div>

//                 <div className="form-group d-flex justify-content-between contact-container">
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="mobileNumber">Contact Mobile No:</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Contact Mobile Number"
//                       name="mobileNumber"
//                       id="mobileNumber"
//                       value={formik.mobileNumber}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.mobileNumber &&
//                     formik.errors.mobileNumber ? (
//                       <p className="error-message">
//                         <small>{formik.errors.mobileNumber}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                       className="form-control"
//                       type="email"
//                       placeholder="Email"
//                       name="email"
//                       id="email"
//                       value={formik.email}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                       <p className="error-message">
//                         <small>{formik.errors.email}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                 </div>

//                 <div className="nationality-container">
//                   <label htmlFor="nationality" className="nationality-title">
//                     Nationality
//                   </label>
//                   <select
//                     name="nationality"
//                     value={formik.nationality}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className="select-box"
//                   >
//                     <option value="">-- select one --</option>
//                     <option value="afghan">Afghan</option>
//                     <option value="albanian">Albanian</option>
//                     <option value="algerian">Algerian</option>
//                     <option value="american">American</option>
//                     <option value="andorran">Andorran</option>
//                     <option value="angolan">Angolan</option>
//                     <option value="antiguans">Antiguans</option>
//                     <option value="argentinean">Argentinean</option>
//                     <option value="armenian">Armenian</option>
//                     <option value="australian">Australian</option>
//                     <option value="austrian">Austrian</option>
//                     <option value="azerbaijani">Azerbaijani</option>
//                     <option value="bahamian">Bahamian</option>
//                     <option value="bahraini">Bahraini</option>
//                     <option value="bangladeshi">Bangladeshi</option>
//                     <option value="barbadian">Barbadian</option>
//                     <option value="barbudans">Barbudans</option>
//                     <option value="batswana">Batswana</option>
//                     <option value="belarusian">Belarusian</option>
//                     <option value="belgian">Belgian</option>
//                     <option value="belizean">Belizean</option>
//                     <option value="beninese">Beninese</option>
//                     <option value="bhutanese">Bhutanese</option>
//                     <option value="bolivian">Bolivian</option>
//                     <option value="bosnian">Bosnian</option>
//                     <option value="brazilian">Brazilian</option>
//                     <option value="british">British</option>
//                     <option value="bruneian">Bruneian</option>
//                     <option value="bulgarian">Bulgarian</option>
//                     <option value="burkinabe">Burkinabe</option>
//                     <option value="burmese">Burmese</option>
//                     <option value="burundian">Burundian</option>
//                     <option value="cambodian">Cambodian</option>
//                     <option value="cameroonian">Cameroonian</option>
//                     <option value="canadian">Canadian</option>
//                     <option value="cape verdean">Cape Verdean</option>
//                     <option value="central african">Central African</option>
//                     <option value="chadian">Chadian</option>
//                     <option value="chilean">Chilean</option>
//                     <option value="chinese">Chinese</option>
//                     <option value="colombian">Colombian</option>
//                     <option value="comoran">Comoran</option>
//                     <option value="congolese">Congolese</option>
//                     <option value="costa rican">Costa Rican</option>
//                     <option value="croatian">Croatian</option>
//                     <option value="cuban">Cuban</option>
//                     <option value="cypriot">Cypriot</option>
//                     <option value="czech">Czech</option>
//                     <option value="danish">Danish</option>
//                     <option value="djibouti">Djibouti</option>
//                     <option value="dominican">Dominican</option>
//                     <option value="dutch">Dutch</option>
//                     <option value="east timorese">East Timorese</option>
//                     <option value="ecuadorean">Ecuadorean</option>
//                     <option value="egyptian">Egyptian</option>
//                     <option value="emirian">Emirian</option>
//                     <option value="equatorial guinean">
//                       Equatorial Guinean
//                     </option>
//                     <option value="eritrean">Eritrean</option>
//                     <option value="estonian">Estonian</option>
//                     <option value="ethiopian">Ethiopian</option>
//                     <option value="fijian">Fijian</option>
//                     <option value="filipino">Filipino</option>
//                     <option value="finnish">Finnish</option>
//                     <option value="french">French</option>
//                     <option value="gabonese">Gabonese</option>
//                     <option value="gambian">Gambian</option>
//                     <option value="georgian">Georgian</option>
//                     <option value="german">German</option>
//                     <option value="ghanaian">Ghanaian</option>
//                     <option value="greek">Greek</option>
//                     <option value="grenadian">Grenadian</option>
//                     <option value="guatemalan">Guatemalan</option>
//                     <option value="guinea-bissauan">Guinea-Bissauan</option>
//                     <option value="guinean">Guinean</option>
//                     <option value="guyanese">Guyanese</option>
//                     <option value="haitian">Haitian</option>
//                     <option value="herzegovinian">Herzegovinian</option>
//                     <option value="honduran">Honduran</option>
//                     <option value="hungarian">Hungarian</option>
//                     <option value="icelander">Icelander</option>
//                     <option value="indian">Indian</option>
//                     <option value="indonesian">Indonesian</option>
//                     <option value="iranian">Iranian</option>
//                     <option value="iraqi">Iraqi</option>
//                     <option value="irish">Irish</option>
//                     <option value="israeli">Israeli</option>
//                     <option value="italian">Italian</option>
//                     <option value="ivorian">Ivorian</option>
//                     <option value="jamaican">Jamaican</option>
//                     <option value="japanese">Japanese</option>
//                     <option value="jordanian">Jordanian</option>
//                     <option value="kazakhstani">Kazakhstani</option>
//                     <option value="kenyan">Kenyan</option>
//                     <option value="kittian and nevisian">
//                       Kittian and Nevisian
//                     </option>
//                     <option value="kuwaiti">Kuwaiti</option>
//                     <option value="kyrgyz">Kyrgyz</option>
//                     <option value="laotian">Laotian</option>
//                     <option value="latvian">Latvian</option>
//                     <option value="lebanese">Lebanese</option>
//                     <option value="liberian">Liberian</option>
//                     <option value="libyan">Libyan</option>
//                     <option value="liechtensteiner">Liechtensteiner</option>
//                     <option value="lithuanian">Lithuanian</option>
//                     <option value="luxembourger">Luxembourger</option>
//                     <option value="macedonian">Macedonian</option>
//                     <option value="malagasy">Malagasy</option>
//                     <option value="malawian">Malawian</option>
//                     <option value="malaysian">Malaysian</option>
//                     <option value="maldivan">Maldivan</option>
//                     <option value="malian">Malian</option>
//                     <option value="maltese">Maltese</option>
//                     <option value="marshallese">Marshallese</option>
//                     <option value="mauritanian">Mauritanian</option>
//                     <option value="mauritian">Mauritian</option>
//                     <option value="mexican">Mexican</option>
//                     <option value="micronesian">Micronesian</option>
//                     <option value="moldovan">Moldovan</option>
//                     <option value="monacan">Monacan</option>
//                     <option value="mongolian">Mongolian</option>
//                     <option value="moroccan">Moroccan</option>
//                     <option value="mosotho">Mosotho</option>
//                     <option value="motswana">Motswana</option>
//                     <option value="mozambican">Mozambican</option>
//                     <option value="namibian">Namibian</option>
//                     <option value="nauruan">Nauruan</option>
//                     <option value="nepalese">Nepalese</option>
//                     <option value="new zealander">New Zealander</option>
//                     <option value="ni-vanuatu">Ni-Vanuatu</option>
//                     <option value="nicaraguan">Nicaraguan</option>
//                     <option value="nigerien">Nigerien</option>
//                     <option value="north korean">North Korean</option>
//                     <option value="northern irish">Northern Irish</option>
//                     <option value="norwegian">Norwegian</option>
//                     <option value="omani">Omani</option>
//                     <option value="pakistani">Pakistani</option>
//                     <option value="palauan">Palauan</option>
//                     <option value="panamanian">Panamanian</option>
//                     <option value="papua new guinean">Papua New Guinean</option>
//                     <option value="paraguayan">Paraguayan</option>
//                     <option value="peruvian">Peruvian</option>
//                     <option value="polish">Polish</option>
//                     <option value="portuguese">Portuguese</option>
//                     <option value="qatari">Qatari</option>
//                     <option value="romanian">Romanian</option>
//                     <option value="russian">Russian</option>
//                     <option value="rwandan">Rwandan</option>
//                     <option value="saint lucian">Saint Lucian</option>
//                     <option value="salvadoran">Salvadoran</option>
//                     <option value="samoan">Samoan</option>
//                     <option value="san marinese">San Marinese</option>
//                     <option value="sao tomean">Sao Tomean</option>
//                     <option value="saudi">Saudi</option>
//                     <option value="scottish">Scottish</option>
//                     <option value="senegalese">Senegalese</option>
//                     <option value="serbian">Serbian</option>
//                     <option value="seychellois">Seychellois</option>
//                     <option value="sierra leonean">Sierra Leonean</option>
//                     <option value="singaporean">Singaporean</option>
//                     <option value="slovakian">Slovakian</option>
//                     <option value="slovenian">Slovenian</option>
//                     <option value="solomon islander">Solomon Islander</option>
//                     <option value="somali">Somali</option>
//                     <option value="south african">South African</option>
//                     <option value="south korean">South Korean</option>
//                     <option value="spanish">Spanish</option>
//                     <option value="sri lankan">Sri Lankan</option>
//                     <option value="sudanese">Sudanese</option>
//                     <option value="surinamer">Surinamer</option>
//                     <option value="swazi">Swazi</option>
//                     <option value="swedish">Swedish</option>
//                     <option value="swiss">Swiss</option>
//                     <option value="syrian">Syrian</option>
//                     <option value="taiwanese">Taiwanese</option>
//                     <option value="tajik">Tajik</option>
//                     <option value="tanzanian">Tanzanian</option>
//                     <option value="thai">Thai</option>
//                     <option value="togolese">Togolese</option>
//                     <option value="tongan">Tongan</option>
//                     <option value="trinidadian or tobagonian">
//                       Trinidadian or Tobagonian
//                     </option>
//                     <option value="tunisian">Tunisian</option>
//                     <option value="turkish">Turkish</option>
//                     <option value="tuvaluan">Tuvaluan</option>
//                     <option value="ugandan">Ugandan</option>
//                     <option value="ukrainian">Ukrainian</option>
//                     <option value="uruguayan">Uruguayan</option>
//                     <option value="uzbekistani">Uzbekistani</option>
//                     <option value="venezuelan">Venezuelan</option>
//                     <option value="vietnamese">Vietnamese</option>
//                     <option value="welsh">Welsh</option>
//                     <option value="yemenite">Yemenite</option>
//                     <option value="zambian">Zambian</option>
//                     <option value="zimbabwean">Zimbabwean</option>
//                   </select>
//                   {formik.touched.nationality && formik.errors.nationality ? (
//                     <p className="error-message">
//                       <small>{formik.errors.nationality}</small>
//                     </p>
//                   ) : null}
//                 </div>

//                 <div className="form-group d-flex justify-content-between department-container">
//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="department">Preferral Department</label>
//                     <select
//                       name="department"
//                       id="department"
//                       value={formik.department}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       className="select-box"
//                     >
//                       <option value="">Select</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Marketing">Marketing</option>
//                       <option value="Marketing">Sales</option>
//                       <option value="Operations">Operations</option>
//                       <option value="Accounts">Accounts & finance</option>
//                     </select>
//                     {formik.touched.department && formik.errors.department ? (
//                       <p className="error-message">
//                         <small>{formik.errors.department}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="position">Preferral Position</label>
//                     <select
//                       name="position"
//                       id="position"
//                       value={formik.position}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       className="select-box"
//                     >
//                       <option value="">Select</option>
//                       <option value="entry Level">Entry Level</option>
//                       <option value="mid management">Mid Management</option>
//                       <option value="management">Management</option>
//                       <option value="head of management">
//                         Head of Management
//                       </option>
//                       <option value="c-level">C-Level</option>
//                     </select>
//                     {formik.touched.position && formik.errors.position ? (
//                       <p className="error-message">
//                         <small>{formik.errors.position}</small>
//                       </p>
//                     ) : null}
//                   </div>

//                   <div style={{ width: "32%" }}>
//                     <label htmlFor="currentVacation">Current Vacation</label>
//                     <select
//                       name="currentVacation"
//                       id="currentVacation"
//                       className="w-100 select-box"
//                       value={formik.currentVacation}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Select</option>
//                       <option value="none">None</option>
//                       <option value="Frontend Developer">
//                         Frontend Developer
//                       </option>
//                       <option value="Backend Developer">
//                         Backend Developer
//                       </option>
//                       <option value="Marketing Executive(digital channel)">
//                         Marketing Executive(digital channel)
//                       </option>
//                       <option value="Marketing Executive B2B">
//                         Marketing Executive B2B
//                       </option>
//                       <option value="Sales Manager">Sales Manager</option>
//                       <option value="Sales Executive">Sales Executive</option>
//                       <option value="Key Account Manager">
//                         Key Account Manager
//                       </option>
//                     </select>
//                     {formik.touched.currentVacation &&
//                     formik.errors.currentVacation ? (
//                       <p className="error-message">
//                         <small>{formik.errors.currentVacation}</small>
//                       </p>
//                     ) : null}
//                   </div>
//                 </div>

//                 <div className="form-group d-flex justify-content-between contact-container">
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="avatar">Upload Photo</label>
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="avatar"
//                       id="avatar"
//                       required
//                       onChange={e => setAvatar(e.target.files[0])}
//                     />
//                     <p style={{ margin: "0", padding: "0" }}>
//                       <small>Max 3 MB, .jpg, jpeg, png are allowed.</small>
//                     </p>
//                   </div>
//                   <div style={{ width: "49%" }}>
//                     <label htmlFor="cv">Upload Your CV</label>
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="cv"
//                       id="cv"
//                       required
//                       onChange={e => setCvFile(e.target.files[0])}
//                     />
//                     <p style={{ margin: "0", padding: "0" }}>
//                       <small>Max 3 MB, .doc, .docx, .pdf</small>
//                     </p>
//                   </div>
//                 </div>

//                 <br />

//                 <input
//                   className="form-control btn-primary"
//                   type="submit"
//                   value="Send"
//                   style={{ backgroundColor: "#0d6efd" }}
//                 />
//                 <button style={{ visibility: "hidden" }} type="reset" ref={ref}>
//                   reset
//                 </button>
//                 <div className="mt-3 text-center">
//                   {loading ? <Spinner variant="primary" /> : null}
//                 </div>
//                 {successMessage.length > 0 ? (
//                   <p style={{ margin: "0", padding: "0", color: "green" }}>
//                     {successMessage}
//                   </p>
//                 ) : null}
//                 {failureMessage.length > 0 ? (
//                   <p style={{ margin: "0", padding: "0", color: "red" }}>
//                     {failureMessage}
//                   </p>
//                 ) : null}
//               </form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div>
//         <JobDetails id={jobId} />
//       </div>
//     </>
//   );
// }

// export default JobPost;
