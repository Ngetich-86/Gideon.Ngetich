
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FaPenNib, FaChalkboardTeacher } from "react-icons/fa";

// Type for card data
interface CardData {
  id: number;
  title: string;
  desc: string;
  icon: JSX.Element | string; // Use JSX.Element for icons
}

interface CardProps {
  item: CardData;
}

const Cards: React.FC<CardProps> = ({ item }) => (
  <div className="card shadow-lg bg-base-100 p-4 flex items-center gap-4">
    <span className="text-3xl">{item.icon}</span> {/* Render the icon */}
    <div>
      <h5 className="text-lg font-semibold">{item.title}</h5>
      <small className="text-sm">{item.desc}</small>
    </div>
  </div>
);


const data: CardData[] = [
   { id: 1, title: "Web Development", desc: "Building modern, responsive websites using React and TypeScript.", icon: <FaLaptopCode size={24} /> }, 
   { id: 2, title: "Cloud Solutions", desc: "Implementing scalable solutions on Azure and AWS Cloud.", icon: <VscDebugDisconnect size={24} /> }, 
   { id: 3, title: "Technical Writing", desc: "Creating clear and concise documentation for tech solutions.", icon: <FaPenNib size={24} /> },
    { id: 4, title: "Mentorship & Community", desc: "Empowering others through guidance and collaborative learning.", icon: <FaChalkboardTeacher size={24} /> }];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 flex justify-center ">
          <div className="w-54 h-64 overflow-hidden shadow-lg">
            <img
              src="https://official-portfolio-eight.vercel.app/assets/about-me-1xaO1Oj0.png"
              alt="Aboutpic"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 ">About Me</h2>
          <h4 className="text-xl text-[#00bfff] font-semibold mb-4">Who Am I</h4>
          <p className="mb-6 text-base">
            I am a web developer with a focus on building user-friendly
            interfaces using ReactJS. With over a year of experience in the
            industry, I have honed my skills in front-end technologies and am
            always looking to stay up to date on the latest developments. I
            also have experience working with cloud computing platforms,
            specifically Azure. Whether you are looking to build a new website
            or improve upon an existing one, I am dedicated to delivering
            high-quality, reliable solutions that meet your needs.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {data.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
