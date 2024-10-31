import React from "react";
import Navbar from "../components/navbar.jsx";
import iiitkotalogo from "../assets/iiitkotalogo.png"; // Update path as needed
import Footer from "../components/Footer.jsx";
import ProfileCard from "../components/TeamCard.jsx";

const profiles = [
  {
    name: "Hiteshwar Kaushik",
    occupation: "3rd Year CSE",
    image: "https://via.placeholder.com/200",
    linkedin: "https://www.linkedin.com/in/hiteshwarkaushik/",
  },
  {
    name: "Partik Malasi",
    occupation: "3rd Year CSE",
    image: "https://via.placeholder.com/200",
    linkedin: "https://www.linkedin.com/in/partik-malasi-736686249/",
  },
  {
    name: "Kratin Aggrawal",
    occupation: "3rd Year CSE",
    image: "https://via.placeholder.com/200",

    linkedin: "https://www.linkedin.com/in/kratin-aggarwal-691157257/",
  },
];

const About = () => {
  const teamMembers = [
    { name: "John Doe", role: "Coordinator", image: "/path/to/image.jpg" },
    {
      name: "Jane Smith",
      role: "Alumni Relations",
      image: "/path/to/image.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gray-100">
      <Navbar />
      <div className="w-screen  overflow-y-scroll custom-scrollbar mt-[10rem] flex flex-col items-center justify-center">
        {/* About Us Section */}
        <div className="flex flex-col h-[32rem] items-center text-center space-y-2 mt-2 max-w-2xl px-4 mb-12">
          <img
            src={iiitkotalogo}
            alt="IIIT Kota Logo"
            className="w-1/2 max-w-xs rounded-lg mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold">
            Alumni and Industry Outreach, IIIT Kota
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Connecting students with industry leaders and alumni to foster
            growth and career opportunities.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="w-full bg-[#19194D] flex justify-center items-center px-[1rem] md:px-[5rem]  ">
          <section className="flex flex-col  items-center text-center space-y-10 w-full px-4 md:px-8 py-12  shadow-lg rounded-lg my-12 bg-gray-100 ">
            <h2 className="text-4xl font-extrabold text-gray-800">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed ">
              The Alumni Cell of IIIT Kota is dedicated to fostering a lifelong
              connection between the institute's alumni and its students. We
              organize initiatives that bridge the gap between academia and the
              professional world, creating meaningful engagement opportunities
              that help students develop their careers, gain insights, and build
              a robust network of support.
            </p>
            <ul className="text-lg text-gray-700 list-disc list-inside space-y-6  text-left">
              <li>
                <strong>Mentorship Programs:</strong> Our mentorship programs
                connect current students with IIIT Kota alumni, allowing
                students to receive one-on-one guidance, advice, and
                industry-specific insights. Alumni mentors share their
                experiences, offering advice on academic pursuits, project
                ideas, skill-building, and navigating early career challenges.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> We host networking
                events where students can interact with alumni from diverse
                industries and backgrounds. These events are designed to provide
                a platform for knowledge exchange, foster professional
                connections, and give students a chance to understand industry
                expectations and trends directly from those already established
                in their fields.
              </li>
              <li>
                <strong>Career Talks & Workshops:</strong> Our Alumni Cell
                organizes regular career talks and workshops led by alumni who
                have excelled in various domains. These sessions provide
                students with an in-depth understanding of industry landscapes,
                emerging fields, and valuable insights into different career
                paths. Alumni share their journeys, challenges, and tips,
                helping students make informed career choices.
              </li>
              <li>
                <strong>Alumni Portal:</strong> We are developing a
                comprehensive online alumni portal to facilitate communication
                and resource sharing between alumni and current students. The
                portal allows alumni to stay connected with their alma mater,
                view job postings, offer guidance, and engage with students
                through forums, articles, and scheduled interactions.
              </li>
            </ul>
          </section>
        </div>
        <div className="w-full bg-gray-100 flex justify-center items-center p-[2rem]">
          {/* Our Team Section */}
          <section className="flex w-full flex-col items-center text-center space-y-8 px-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Team
            </h2>

            {/* Associate Dean Subheading and Card */}
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">
                Associate Dean
              </h3>
              <p className="text-md md:text-md font-semibold text-gray-700">
                (Alumni and Industry Outreach)
              </p>
            </div>
            <div className="mb-12 w-full flex justify-center items-center">
              <ProfileCard
                name="Dr. Chetna Sharma"
                occupation="Assistant Professor,ECE"
                image="https://via.placeholder.com/200" // Update with the actual image path
                linkedin="https://www.linkedin.com/in/chetna-sharma-phd-8ba8a337/" // Update with the actual LinkedIn URL
              />
            </div>

            {/* Student Coordinators Subheading and Cards */}
            <h3 className=" text-xl md:text-2xl font-semibold text-gray-700 mt-12">
              Student Coordinators
            </h3>
            <div className="w-full flex justify-center items-center  flex-wrap gap-8">
              {profiles.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;