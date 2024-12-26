import { useState } from "react";
import Logo from "../assets/iiitkotalogo.png";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HouseIcon from "@mui/icons-material/House";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
    const [currentDiv, setCurrentDiv] = useState(0);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const [formData, setFormData] = useState({
		name: "",
		instituteId: "",
		branch: "",
		personalEmail: "",
		phoneNumber: "",
		city: "",
		state: "",
		country: "",
		graduationYear: "",
		pastCompanies: "",
		currentCompany: "",
		role: "",
		linkedin: "",
		achievements: "",
		password: "",
	});
	const [selectedFile, setSelectedFile] = useState(null); // State to manage the selected file
	const [fileName, setFileName] = useState("No file chosen"); // State to manage the file name display

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setSelectedFile(selectedFile);
		setFileName(selectedFile ? selectedFile.name : "No file chosen");
	};

	const validateFormData = () => {
		const emailRegex = /^\d{4}(ku(cp|ec))\d{4}@iiitkota\.ac\.in$/;
		const instituteIdRegex = /^\d{4}(ku(cp|ec))\d{4}$/;

		if (!instituteIdRegex.test(formData.instituteId)) {
			alert("Invalid institute ID format.");
			return false;
		}

		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateFormData()) {
			return;
		}

		setLoading(true);

		// Create a FormData object to hold the form data and the file
		const formDataObj = new FormData();

		// Append the form data fields to the FormData object
		formDataObj.append("name", formData.name);
		formDataObj.append("instituteId", formData.instituteId);
		formDataObj.append("branch", formData.branch);
		formDataObj.append("personalEmail", formData.personalEmail);
		formDataObj.append("phoneNumber", formData.phoneNumber);
		formDataObj.append("city", formData.city);
		formDataObj.append("state", formData.state);
		formDataObj.append("country", formData.country);
		formDataObj.append("graduationYear", formData.graduationYear);
		formDataObj.append("pastCompanies", formData.pastCompanies);
		formDataObj.append("currentCompany", formData.currentCompany);
		formDataObj.append("role", formData.role);
		formDataObj.append("linkedin", formData.linkedin);
		formDataObj.append("achievements", formData.achievements);
		formDataObj.append("password", formData.password);

		// Append the file to the FormData object if a file is selected
		if (selectedFile) {
			formDataObj.append("profilePicture", selectedFile);
		}

		try {
			const response = await axios.post(
				"https://alumportal-iiitkotaofficial.onrender.com/api/auth/signup",
				// "http://localhost:5000/api/auth/signup",
				formDataObj,
				{
					headers: {
						"Content-Type": "multipart/form-data", // The request is sent as form-data
					},
				}
			);

			// Reset the form data state
			setFormData({
				name: "",
				instituteId: "",
				branch: "",
				personalEmail: "",
				phoneNumber: "",
				city: "",
				state: "",
				country: "",
				graduationYear: "",
				pastCompanies: "",
				currentCompany: "",
				role: "",
				linkedin: "",
				achievements: "",
				password: "",
			});

			// Reset the selected file state and file name
			setSelectedFile(null);
			setFileName("No file chosen");
			setCurrentDiv(0);
			setLoading(false);

			// Toast notification
			toast.success("Registration Successful");
		} catch (error) {
			console.error("There was an error registering the user:", error);

			// Handle specific error for duplicate instituteId or email
			if (
				error.response &&
				error.response.status === 400 &&
				error.response.data.message
			) {
				toast.error(error.response.data.message);
			} else {
				// General error handling
				toast.error(
					"There was an error registering the user. Please try again later."
				);
			}
			setLoading(false);
		}
	};

	const divs = [
		// page 1 -------------------------------------------------------------------------------------------------------------
		<div className="h-full w-full flex flex-col justify-center max-md:items-center">
			<h2 className="text-4xl text-center md:text-start md:text-5xl font-sans font-normal text-[#32325D]">
				Alumni Details <span className="text-sm md:text-lg">(1/4)</span>
			</h2>
			<br />
			<br />
			<div className="mb-8 w-full max-sm:mt-5 flex items-center max-md:justify-center">
				<PersonIcon className="mr-2 text-[#32325D]" />
				<input
					type="text"
					id="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your Name*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<LockIcon className="text-[#32325D] mr-2" />
				<input
					type="text"
					id="CollegeID"
					name="instituteId"
					value={formData.instituteId}
					onChange={handleChange}
					placeholder="Institute ID*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<ComputerIcon className="text-[#32325D] mr-2" />
				<select
					id="Branch"
					name="branch"
					value={formData.branch}
					onChange={handleChange}
					required
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				>
					<option value="" disabled>
						Select your Branch
					</option>
					<option value="CSE">CSE</option>
					<option value="ECE">ECE</option>
				</select>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<PermContactCalendarIcon className="text-[#32325D] mr-2" />
				<div className="w-full md:w-4/5">
					<select
						id="graduationYear"
						name="graduationYear"
						value={formData.graduationYear}
						onChange={handleChange}
						required={true}
						className="w-full px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
					>
						<option value="" disabled>
							Select Graduation Year
						</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
					</select>
				</div>
			</div>
		</div>,
		// page 2 --------------------------------------------------------------------------------------------------------------
		<div className="h-full w-full flex flex-col justify-center max-md:items-center">
			<h2 className="text-4xl text-center md:text-start md:text-5xl font-sans font-normal text-[#32325D]">
				Alumni Details <span className="text-sm md:text-lg">(2/4)</span>
			</h2>
			<br />
			<br />
			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<EmailIcon className="text-[#32325D] mr-2" />
				<input
					type="email"
					id="PersonalEmail"
					name="personalEmail"
					value={formData.personalEmail}
					onChange={handleChange}
					placeholder="Personal Email ID*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<CallIcon className="text-[#32325D] mr-2" />
				<input
					type="tel"
					id="PhoneNumber"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
					placeholder="Contact Number*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<HouseIcon className="text-[#32325D] mr-2" />
				<div className="flex w-full h-auto gap-4">
					<input
						type="text"
						className="w-1/2 md:w-2/5 px-4 max-sm:w-full py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
						id="City"
						name="city"
						value={formData.city}
						onChange={handleChange}
						placeholder="City / Town*"
						required={true}
					/>
					<input
						type="text"
						className="w-1/2 md:w-2/5 px-4 max-sm:w-full py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
						id="State"
						name="state"
						value={formData.state}
						onChange={handleChange}
						placeholder="State*"
						required={true}
					/>
				</div>
			</div>
			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<PublicIcon className="text-[#32325D] mr-2" />
				<input
					type="text"
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
					id="Country"
					name="country"
					value={formData.country}
					onChange={handleChange}
					placeholder="Country*"
					required={true}
				/>
			</div>
		</div>,
		// page 3 ----------------------------------------------------------------------------------------------------------------
		<div className="h-full w-full flex flex-col justify-center max-md:items-center">
			<h2 className="text-4xl text-center md:text-start md:text-5xl font-sans font-normal text-[#32325D]">
				Alumni Details <span className="text-sm md:text-lg">(3/4)</span>
			</h2>
			<br />
			<br />

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<BusinessIcon className="text-[#32325D] mr-2" />
				<input
					type="text"
					id="PastCompanies"
					name="pastCompanies"
					value={formData.pastCompanies}
					onChange={handleChange}
					placeholder="Past Companies / Institutes*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<BusinessIcon className="text-[#32325D] mr-2" />
				<input
					type="text"
					id="CurrentCompany"
					name="currentCompany"
					value={formData.currentCompany}
					onChange={handleChange}
					required={true}
					placeholder="Current Company / Institute*"
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<EngineeringIcon className="text-[#32325D] mr-2" />
				<input
					type="text"
					id="Role"
					name="role"
					value={formData.role}
					onChange={handleChange}
					placeholder="Role / Degree*"
					required={true}
					className="w-full md:w-4/5 px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<LinkedInIcon className="text-[#32325D] mr-2" />
				<div className="w-full md:w-4/5">
					<input
						type="text"
						id="LinkedIn"
						name="linkedin"
						value={formData.linkedin}
						onChange={handleChange}
						placeholder="LinkedIn URL"
						required={true}
						className="w-full px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
					/>
				</div>
			</div>
		</div>,
		// page 4 ------------------------------------------------------------------------------------------------------
		<div className="h-full w-full flex flex-col justify-center max-md:items-center">
			<h2 className="text-4xl text-center md:text-start md:text-5xl font-sans font-normal text-[#32325D]">
				Alumni Details <span className="text-sm md:text-lg">(4/4)</span>
			</h2>
			<br />
			<br />

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<EmojiEventsIcon className="text-[#32325D] mr-2" />
				<textarea
					type="text"
					id="Achievements"
					name="achievements"
					value={formData.achievements}
					onChange={handleChange}
					placeholder="Achievements"
					className="w-full md:w-4/5 px-4 py-3 h-[7rem] resize-none border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
				/>
			</div>

			<div className="mb-8 w-full flex items-center max-md:justify-center">
				<VpnKeyIcon className="text-[#32325D] mr-2" />
				<div className="w-full md:w-4/5 relative">
					<input
						type={showPassword ? "text" : "password"}
						id="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Set Password*"
						required={true}
						className="w-full px-4 py-3 pr-10 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
					/>
					<div
						className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? (
							<VisibilityOffIcon className="text-[#0E407C]" />
						) : (
							<VisibilityIcon className="text-[#0E407C]" />
						)}
					</div>
				</div>
			</div>

			<div className="w-auto h-auto flex md:items-center max-md:w-full">
				<div className="w-auto h-[70%] mr-2 mt-6 max-md:mb-16">
					<AccountCircleIcon className="text-[#32325D]" />
				</div>
				<div className="w-full md:w-4/5 flex flex-col">
					<div className="relative w-full max-md:w-full h-16">
						<input
							type="file"
							id="file-input"
							className="absolute inset-0 opacity-0 cursor-pointer"
							onChange={handleFileChange}
							required={false}
						/>
						<label
							htmlFor="file-input"
							className="px-4 py-2 bg-white border border-[#0E407C] text-gray-400 text-center rounded-md cursor-pointer hover:bg-blue-600 h-full flex items-center justify-center"
						>
							Recent Profile Picture
						</label>
					</div>
					<span className="block mt-2 text-gray-700 italic mb-8">
						{fileName}
					</span>
				</div>
			</div>
		</div>,
	];

	const nextDiv = () => {
		if (currentDiv < divs.length - 1) {
			setCurrentDiv(currentDiv + 1);
		}
	};

	const prevDiv = () => {
		if (currentDiv > 0) {
			setCurrentDiv(currentDiv - 1);
		}
	};

	return (
		<div className="w-screen md:h-screen min-h-screen py-8 md:py-0 bg-[#1A1C4E] flex justify-center items-center">
			<Toaster position="top-right" />
			<div className="md:w-[85%] md:h-[85%] h-auto w-[95%] max-md:py-8 bg-white rounded-2xl shadow-2xl flex  flex-col md:flex-row">
				<div className="h-auto py-8 w-full md:h-full md:w-1/2 flex flex-col justify-center items-center">
					<a href="/" className="w-auto h-auto flex justify-center items-center"><img src={Logo} className="md:w-3/5 w-2/5 mb-4" alt="Kota Logo" /></a>
					<p className="mt-4 text-gray-600">
						Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In here</Link>
					</p>
				</div>
				<div className="h-auto w-full md:h-full md:w-1/2 flex flex-col justify-center items-center md:p-8 p-4">
					<form
						className="w-full h-full flex flex-col justify-between"
						onSubmit={handleSubmit}
					>
						{divs[currentDiv]}
						<div className="flex justify-between w-full">
							{currentDiv > 0 ? (
								<button
									type="button"
									onClick={prevDiv}
									className="bg-[#0E407C] text-white p-2 w-[5rem] h-[3rem] shadow-xl rounded-md mr-auto"
								>
									Previous
								</button>
							) : (
								""
							)}
							{currentDiv < divs.length - 1 ? (
								<button
									type="button"
									onClick={nextDiv}
									className="bg-[#0E407C] text-white p-2 w-[5rem] h-[3rem] shadow-xl rounded-md ml-auto"
								>
									Next
								</button>
							) : (
								<button
									type="submit"
									className="px-4 py-2 bg-[#0E407C] text-white rounded-md shadow-xl"
									disabled={loading}
								>
									{loading ? (
										<>
											<span className="inline-block w-4 h-4 border-2 border-t-2 border-gray-200 border-t-blue-500 rounded-full animate-spin mr-2" />{" "}
											Registering...
										</>
									) : (
										"Submit"
									)}
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp
