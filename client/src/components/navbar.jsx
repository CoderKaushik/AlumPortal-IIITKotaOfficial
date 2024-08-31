import { useState } from "react";
import Logo from "../assets/iiitkotalogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopLayer from "./topLayer.jsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubMenuToggle = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-auto fixed top-0 left-0 z-[10] shadow-md">
      <TopLayer />
      <div className="w-full h-[6.875rem] max-w-980:h-[90px] max-w-492:h-[70px] bg-white flex p-4">
        <div className="w-1/3 max-w-1464:w-[10%] max-w-980:w-[80%] h-full flex gap-2 items-center pl-2">
          <div className="w-auto h-full flex justify-center items-center">
            <a href="/">
              <img
                src={Logo}
                alt="iiit kota logo"
                className="w-[4.5rem] h-[4.5rem] max-w-980:w-[58px] max-w-980:h-[58px] max-w-492:h-[40px] max-w-492:w-[40px]"
              />
            </a>
          </div>
          <div className="w-auto h-full flex flex-col justify-center">
            <h6
              className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] text-[#19194D] max-w-1464:hidden max-w-980:block"
              style={{ fontWeight: "700" }}
            >
              Alumni Cell
            </h6>
            <h6
              className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] font-bold text-[#19194D] max-w-1464:hidden max-w-980:block"
              style={{ fontWeight: "1000" }}
            >
              Indian Institute of Information Technology, Kota
            </h6>
            <h6
              className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] font-bold text-[#19194D] font-sans max-w-1464:hidden max-w-980:block"
              style={{ fontWeight: "1000" }}
            >
              (An Institute of National Importance under an Act of Parliament)
            </h6>
          </div>
        </div>
        <div
          className={`w-2/3 max-w-1464:w-[90%] max-w-980:w-[20%] h-full flex ${
            window.innerWidth <= 980
              ? "justify-center items-center"
              : "pl-16 max-w-1464:pl-0"
          }`}
        >
          <div className="w-1/6 h-full flex relative group items-center text-[#19194D] max-w-980:hidden max-w-1464:ml-44">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              ABOUT US
            </p>
            <div className="rounded-md absolute top-12 hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[14rem]">
              <ul className="w-full">
                <li className="hover:bg-gray-100 p-2 w-full">
                  <a href="/about-institute">About Institute</a>
                </li>
                <li className="hover:bg-gray-100 p-2 w-full">
                  <a href="/partnership">Partnership</a>
                </li>
                <li className="hover:bg-gray-100 p-2 w-full">
                  <a href="/annual-reports">Annual Reports</a>
                </li>
                <li className="hover:bg-gray-100 p-2 w-full">
                  <a href="/statutes">Statutes and PPP Act</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              ALUMNI ASSIST
            </p>
            <div className="rounded-md absolute top-12 hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
              <ul className="w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/alumni">Alumni</a>
                </li>
                <li className="hover:bg-gray-100 p-2">
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
            <a href="/directory">
              <p
                className="text-[0.9rem] font-sans hover:cursor-pointer"
                style={{ fontWeight: "400" }}
              >
                DIRECTORY
              </p>
            </a>
          </div>
          <div className="w-1/6 h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              EVENTS
            </p>
            <div className="rounded-md absolute top-12 hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
              <ul className="w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/events">Events</a>
                </li>
                <li className="hover:bg-gray-100 p-2">
                  <a href="/newsletters">Newsletters</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              NEWSLETTERS
            </p>
            <div className="rounded-md absolute top-12 hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
              <ul className="w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/newsletters">Newsletters</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              PLACEMENTS
            </p>
            <div className="rounded-md absolute top-12 hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[8rem]">
              <ul className="w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/placements">Placements</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden w-full h-full text-[#19194D] max-w-980:flex max-w-980:justify-center max-w-980:items-center">
            <MenuIcon onClick={toggleMobileMenu} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <div
        className={`fixed -top-20 left-5 w-full h-full flex items-center justify-center z-50 transition-transform duration-300 ${
          isMobileMenuOpen ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className={`bg-white rounded-lg shadow-2xl w-4/5 max-w-md p-6 transition-transform duration-300 transform ${
            isMobileMenuOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <CloseIcon
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-4">
            <ul>
              <li className="py-2 border-b border-gray-200">
                <button
                  onClick={() => handleSubMenuToggle('about')}
                  className="w-full text-left"
                >
                  About Us
                </button>
                {activeSubMenu === 'about' && (
                  <ul className="pl-4 mt-2">
                    <li className="py-2 border-b border-gray-200">
                      <a href="/about-institute">About Institute</a>
                    </li>
                    <li className="py-2 border-b border-gray-200">
                      <a href="/partnership">Partnership</a>
                    </li>
                    <li className="py-2 border-b border-gray-200">
                      <a href="/annual-reports">Annual Reports</a>
                    </li>
                    <li className="py-2 border-b border-gray-200">
                      <a href="/statutes">Statutes and PPP Act</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-2 border-b border-gray-200">
                <button
                  onClick={() => handleSubMenuToggle('alumni')}
                  className="w-full text-left"
                >
                  Alumni Assist
                </button>
                {activeSubMenu === 'alumni' && (
                  <ul className="pl-4 mt-2">
                    <li className="py-2 border-b border-gray-200">
                      <a href="/alumni">Alumni</a>
                    </li>
                    <li className="py-2 border-b border-gray-200">
                      <a href="/support">Support</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="/directory">Directory</a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <button
                  onClick={() => handleSubMenuToggle('events')}
                  className="w-full text-left"
                >
                  Events
                </button>
                {activeSubMenu === 'events' && (
                  <ul className="pl-4 mt-2">
                    <li className="py-2 border-b border-gray-200">
                      <a href="/events">Events</a>
                    </li>
                    <li className="py-2 border-b border-gray-200">
                      <a href="/newsletters">Newsletters</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="/newsletters">Newsletters</a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a href="/placements">Placements</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
