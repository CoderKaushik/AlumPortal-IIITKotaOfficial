import Marquee from "react-fast-marquee";

const InfiniteText = () => {
  return (
    <div className="w-full h-[1.7rem] bg-[#1A1C4E] overflow-hidden flex items-center">
      <Marquee
        pauseOnHover={true}
        className="space-x-4"
        gradient={false}
        speed={50}
      >
        <p className="text-white text-sm">
          Research Trajectory: On October 5, 2024, Yashash Jain, a 2021 ECE
          alumnus and SAC ISRO scientist, shared insights on his GATE journey,
          PSU opportunities, and research paths.
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteText;