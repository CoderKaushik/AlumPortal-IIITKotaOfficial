import Logo from "../assets/iiitkotalogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
	return (
		<div className="w-full h-[500px] max-w-980:h-[750px] max-w-492:h-[1000px] bg-[#19194D] flex flex-col max-w-492:gap-8">
			<div className="flex flex-row max-w-980:flex-col p-2 max-w-980:p-1 w-full h-[90%] items-center">
				<div className="w-[75%] max-w-980:w-full h-4/5 border-r max-w-980:border-0 border-slate-700 pl-8 text-xl pr-8">
					<div className="w-full h-[27px] mt-16 text-white flex max-w-980:flex-col max-w-980:gap-6">
						<a
							href="https://goo.gl/maps/KfBmHcSVKmzt3hvj7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LocationOnIcon /> IIIT Kota Permanent Campus, Kota, 325003
						</a>
						<a
							href="mailto:alumni@iiitkota.ac.in"
							className="ml-8 max-w-980:ml-0"
						>
							<EmailIcon /> alumni@iiitkota.ac.in
						</a>
					</div>
					<div className="w-full h-[27px] mt-6 max-w-980:mt-20 text-white">
						<a href="tel:0744-2667000">
							<LocalPhoneIcon /> 0744-2667000, 0744-2667010
						</a>
					</div>
					<div className="w-full h-[27px] max-w-492:h-[150px] mt-12 text-sm flex max-w-492:flex-col gap-16 max-w-492:gap-2 border-b border-slate-700 pb-[3rem]">
						<a href="" className="text-[#38B6FF]">
							ABOUT <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							TEAM <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							ANNOUNCEMENTS <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							EVENTS <ArrowRightAltIcon />
						</a>
					</div>
					<div className="w-full h-[27px] max-w-492:h-[150px] mt-8 max-w-980:mb-8 text-sm flex max-w-492:flex-col gap-16 max-w-492:gap-2 border-b border-slate-700 pb-[3rem]">
						<a href="" className="text-[#38B6FF]">
							ABOUT <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							TEAM <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							ANNOUNCEMENTS <ArrowRightAltIcon />
						</a>
						<a href="" className="text-[#38B6FF]">
							EVENTS <ArrowRightAltIcon />
						</a>
					</div>
				</div>
				<div className="w-[25%] max-w-980:w-full h-4/5 pl-8 max-w-492:mb-16">
					<img
						src={Logo}
						alt=""
						className="w-28 h-28 max-w-980:w-24 max-w-980:h-24"
					/>
					<p className="mt-4 mb-6 text-[1.25rem] leading-10 text-[#CED4DA]">
						ALUMNI CELL, <br /> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY KOTA
					</p>
					<a
						href="https://goo.gl/maps/KfBmHcSVKmzt3hvj7"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#38B6FF] hover:text-white transition-colors duration-300 ease-in-out"
					>
						VISIT IIIT KOTA <ArrowRightAltIcon />
					</a>
				</div>
			</div>
			<div className="w-full h-[10%] bg-[#0E407C] flex justify-center items-center">
				<div className="w-full h-1/2 max-w-492:h-full flex max-w-492:flex-col max-w-492:py-1">
					<div className="w-1/2 h-full max-w-492:w-full max-w-492:h-1/3 flex justify-start max-w-492:justify-center items-center pl-8 max-w-492:pl-0 text-white max-w-492:text-sm">
						© 2024 Alumni Cell, IIIT Kota
					</div>
					<div className="w-1/2 h-full max-w-492:w-full max-w-492:h-2/3 flex justify-end max-w-492:justify-center items-center pr-4 max-w-492:pr-0 max-w-492:gap-8 gap-4">
						<XIcon className="text-white hover:text-[#38B6FF] transition-colors duration-300 ease-in-out cursor-pointer" />
						<FacebookIcon className="text-white hover:text-[#38B6FF] transition-colors duration-300 ease-in-out cursor-pointer" />
						<InstagramIcon className="text-white hover:text-[#38B6FF] transition-colors duration-300 ease-in-out cursor-pointer" />
						<LinkedInIcon className="text-white hover:text-[#38B6FF] transition-colors duration-300 ease-in-out cursor-pointer" />
						<YoutubeIcon className="text-white hover:text-[#38B6FF] transition-colors duration-300 ease-in-out cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
