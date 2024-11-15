// import { HiDownload } from 'react-icons/hi'

// const About = () => {
//   return (
//     <>
//    <div className="flex flex-col  h-fit  pb-8 px-4 md:px-8">
//     <h1 className="text-xl md:text-4xl font-bold pb-4 text-center">About Me</h1>
//   <div className="flex-1 h-1/2 w-full max-xl:flex justify-center items-center animate-image-features">
//           <img src="https://official-portfolio-eight.vercel.app/assets/about-me-1xaO1Oj0.png" alt="Featured Banner" />
//         </div>
//         <div className='flex-1 h-full w-full'>
//         <p className='text-slate-800 text-lg mt-4'>
//     I am a software engineering student with a passion for full-stack web development. Standing at the crossroads of technology and empathy, I wield a diverse skill set encompassing HTML, CSS, and JavaScript. Alongside proficiency in React.js for interface development, my expertise extends to back-end web development utilizing Node.js, Express.js, and databases such as MSSQL and MySQL. Additionally, I have a grasp of Azure Cloud services.
// Driven by an insatiable thirst for knowledge, I am passionate about emerging technologies, tools, and podcasts. These resources keep me abreast of the latest industry trends and foster my skills and personal development.
// I am enthusiastic about establishing new collaborations, gaining insights from diverse perspectives, and leveraging my technical expertise to contribute to meaningful endeavors.
//     </p>


//         </div>
    
//    </div>
//    </>
//   )
// }

// export default About

import React from "react";
import { HiDownload } from "react-icons/hi";
// import AboutImage from ""; 
// import Resume from "./path-to-your-resume.pdf";

// Type for card data
interface CardData {
  id: number;
  title: string;
  desc: string;
}

interface CardProps {
  item: CardData;
}

const Cards: React.FC<CardProps> = ({ item }) => (
  <div className="card shadow-lg bg-base-100 p-4">
    <h5 className="text-lg font-semibold">{item.title}</h5>
    <small className="text-sm">{item.desc}</small>
  </div>
);

// Example data (replace with your actual data)
const data: CardData[] = [
  { id: 1, title: "Web Development", desc: "Building user-friendly interfaces" },
  { id: 2, title: "Cloud Expertise", desc: "Specialized in Azure platforms" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-94 h-64  overflow-hidden shadow-lg">
            <img
              src="https://official-portfolio-eight.vercel.app/assets/about-me-1xaO1Oj0.png"
              alt="Aboutpic"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-green-500">About Me</h2>
          <h4 className="text-xl text-green-300 font-semibold mb-4">Who Am I</h4>
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

          {/* Download Resume Button */}
          {/* <a
            href={Resume}
            download
            className="btn btn-primary flex items-center gap-2"
          >
            Download Resume <HiDownload />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
