// src/pages/ContactUs.jsx
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TextField, Checkbox, Button, FormControlLabel } from "@mui/material";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		batch: "",
		graduationYear: "",
		collegeId: "",
		phoneNumber: "",
		email: "",
		message: "",
		agree: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Integrate with Nodemailer API here
		console.log("Form data submitted:", formData);
	};

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gray-100">
			<Navbar />
			<div className="flex justify-center items-center w-full md:h-[80vh] mt-[9rem] md:px-2">
				<div className="w-[95%] h-[95%] bg-white rounded-md shadow-lg flex p-2 group">
					{/* Left dark blue section with a large ring */}
					<div className="w-[40%] h-full bg-gradient-to-tr from-blue-700 to-blue-900 rounded-xl relative overflow-hidden">
						<div className="absolute -top-[22rem] -right-[22rem] w-[40rem] h-[40rem] border-[4rem] border-blue-700 rounded-full opacity-50 transition-hover duration-[2s] ease-out group-hover:-top-[20rem] group-hover:-right-[20rem]"></div>
						<div className="absolute inset-0 w-full h-full text-white py-12 px-6 space-y-6">
							<h2 className="text-4xl font-bold mb-8">How can we help you?</h2>
							<div className="flex items-center text-xl mb-3">
								<PhoneIcon fontSize="large" />{" "}
								<span className="ml-3">54615136421</span>
							</div>
							<div className="flex items-center text-xl mb-3">
								<EmailIcon fontSize="large" />{" "}
								<span className="ml-3">alumnicell@iiitkota.ac.in</span>
							</div>
							<div className="flex items-center text-xl">
								<LocationOnIcon fontSize="large" />{" "}
								<span className="ml-3">IIIT Kota, Kota, Rajasthan</span>
							</div>
						</div>
					</div>

					{/* Right side for form */}
					<div className="w-[60%] h-full p-4 flex flex-col justify-center">
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<TextField
									label="Name"
									name="name"
									fullWidth
									variant="outlined"
									value={formData.name}
									onChange={handleChange}
								/>
								<TextField
									label="Batch"
									name="batch"
									fullWidth
									variant="outlined"
									value={formData.batch}
									onChange={handleChange}
								/>
								<TextField
									label="Graduation Year"
									name="graduationYear"
									fullWidth
									variant="outlined"
									value={formData.graduationYear}
									onChange={handleChange}
								/>
								<TextField
									label="College ID"
									name="collegeId"
									fullWidth
									variant="outlined"
									value={formData.collegeId}
									onChange={handleChange}
								/>
							</div>
							<TextField
								label="Phone Number"
								name="phoneNumber"
								fullWidth
								variant="outlined"
								value={formData.phoneNumber}
								onChange={handleChange}
							/>
							<TextField
								label="Email"
								name="email"
								type="email"
								fullWidth
								variant="outlined"
								value={formData.email}
								onChange={handleChange}
							/>
							<TextField
								label="Message"
								name="message"
								fullWidth
								multiline
								rows={4}
								variant="outlined"
								value={formData.message}
								onChange={handleChange}
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={formData.agree}
										onChange={handleChange}
										name="agree"
										color="primary"
									/>
								}
								label="I agree to share the above information for the contact."
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								disabled={!formData.agree}
								fullWidth
							>
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
