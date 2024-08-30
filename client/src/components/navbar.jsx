import Logo from "../assets/iiitkotalogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import TopLayer from "./topLayer.jsx";

const Navbar = () => {
  return (
    <div className="w-full h-auto fixed top-0 left-0 z-[10] shadow-md">
      <TopLayer />
      <div className="w-full h-[6.875rem] max-w-980:h-[90px] max-w-492:h-[70px] bg-white flex p-4">
        <div className="w-1/3 max-w-1464:w-[10%] max-w-980:w-[80%] h-full flex gap-2 items-center pl-2">
          <div className="w-auto h-full flex justify-center items-center">
            <a href="/"><img
              src={Logo}
              alt="iiit kota logo"
              className="w-[4.5rem] h-[4.5rem] max-w-980:w-[58px] max-w-980:h-[58px] max-w-492:h-[40px] max-w-492:w-[40px]"
            /></a>
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
          <div className="w-1/6 h-full flex relative group  items-center text-[#19194D] max-w-980:hidden max-w-1464:ml-44">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              ABOUT US
            </p>
            <div className="rounded-md absolute top-12  hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[14rem]">
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
          <div className="w-1/6 h-full relative group flex  items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              ALUMNI ASSIST
            </p>
            <div className="rounded-md absolute  top-12  hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
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
          <div className="w-1/6 h-full relative group flex  items-center text-[#19194D] max-w-980:hidden">
            <a href="/directory"><p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              DIRECTORY
            </p></a>
          </div>
          <div className="w-1/6 h-full relative group flex  items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              EVENTS
            </p>
            <div className="rounded-md absolute top-12  hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
              {" "}
              <ul classname=" w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/events">Events</a>
                </li>

                <li className="hover:bg-gray-100 p-2">
                  <a href="/newsletters">Newsletters</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex  items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              NEWSLETTERS
            </p>
            <div className="rounded-md absolute top-12  hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[12rem]">
              <ul classname=" w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/newsletters">Newsletters</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/6 h-full relative group flex  items-center text-[#19194D] max-w-980:hidden">
            <p
              className="text-[0.9rem] font-sans hover:cursor-pointer"
              style={{ fontWeight: "400" }}
            >
              PLACEMENTS
            </p>
            <div className=" rounded-md absolute top-12  hidden group-hover:block bg-white drop-shadow-2xl py-2 mt-2 w-[8rem]">
              <ul className=" w-full">
                <li className="hover:bg-gray-100 p-2">
                  <a href="/newsletters">Placements</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden w-full h-full text-[#19194D] max-w-980:flex max-w-980:justify-center max-w-980:items-center">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
