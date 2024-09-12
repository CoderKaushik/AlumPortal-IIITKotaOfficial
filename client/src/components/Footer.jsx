import React from "react";
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
		<div className="w-full h-[500px] bg-[#19194D] flex flex-col">
			<div className="flex p-2 w-full h-[90%] items-center">
				<div className="w-[75%] h-4/5 border-r border-slate-700 pl-16 text-xl pr-8">
					<div className="w-full h-[27px] mt-16 text-white flex">
						<a
							href="https://goo.gl/maps/KfBmHcSVKmzt3hvj7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LocationOnIcon /> IIIT Kota Permanent Campus, Kota, 325003
						</a>
						<a href="mailto:alumni@iiitkota.ac.in" className="ml-12">
							<EmailIcon /> alumni@iiitkota.ac.in
						</a>
					</div>
					<div className="w-full h-[27px] mt-6 text-white">
						<a href="tel:0744-2667000">
							<LocalPhoneIcon /> 0744-2667000, 0744-2667010
						</a>
					</div>
					<div className="w-full h-[27px] mt-12 text-sm flex gap-16 border-b border-slate-700 pb-[3rem]">
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
					<div className="w-full h-[27px] mt-8 text-sm flex gap-16 border-b border-slate-700 pb-[3rem]">
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
				<div className="w-[25%] h-4/5 pl-8">
					<img src={Logo} alt="" className="w-28 h-28" />
					<p className="mt-4 mb-6 text-[1.65rem] leading-10 text-[#CED4DA]">
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
				<div className="w-full h-1/2 flex">
					<div className="w-1/2 h-full flex justify-start items-center pl-8 text-white">
						© 2024 Alumni Cell, IIIT Kota
					</div>
					<div className="w-1/2 h-full flex justify-end items-center pr-4 gap-4">
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
