// import { ReactTyped } from "react-typed";

// const HomePage = () => {
//   return (
//     <div className="w-full md:w-1/2 flex justify-center items-center z-30">
//       <div className="text-center">
//         <h2 className="text-5xl font-bold text-white-800">Hello👋, I'm 
//         <span className='text-[#240ee7]'>
//                                 <ReactTyped
//                                     className="pl-2"
//                                     strings={['Gideon Ngetich', 'a Web Developer']}
//                                     typeSpeed={120}
//                                     backSpeed={70}
//                                     loop />
//                             </span>
//           </h2>
//         <p className="text-gray-600 text-xl 2xl:2xl leading-8 w-full md:w-[1/2]  h-fit text-left">
//         I am a web developer with a focus on building user-friendly interfaces using ReactJS. With over a year
//          of experience in the industry, I have honed my skills in front-end technologies and am always looking to stay up to date on the latest developments. I also have experience working with cloud computing platforms, specifically Azure. Whether you are looking to build a new website or improve upon
//          an existing one, I am dedicated to delivering high-quality, reliable solutions that meet your needs.
//           </p>
//       </div>
//       <div className="w-full xl:w-500 flex justify-center items-center z-20 ">
//                     <img src="https://official-portfolio-eight.vercel.app/assets/about-me-1xaO1Oj0.png" alt="me" 
//                     className="w-67 h-100 rounded-lg transform transition duration-500" />
//                 </div>
                
//     </div>
//   )
// }

// export default HomePage

import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { HiDownload } from 'react-icons/hi'
import {ReactTyped} from "react-typed";
import image1 from "../assets/images/profile.png";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  z-30 p-4 flex flex-col justify-center items-center font-medium mb-6">
      {/* Text Section */}
      <div className="text-center md:w-full">
        <h3 className="text-5xl font-bold text-green-400 mb-4">
          Hello👋, I'm 
          <span className='text-[#ecf1f5]'>
            <ReactTyped
              className="pl-2"
              strings={['Gideon Ngetich', 'a Tech Enthusiast']}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </span>
        </h3>
        {/* <p className="text-gray-600 text-xl leading-8 md:w-3/4 mx-auto">
          I am a web developer with a focus on building user-friendly interfaces using ReactJS. With over a year of experience in the industry, I have honed my skills in front-end technologies and am always looking to stay up to date on the latest developments. I also have experience working with cloud computing platforms, specifically Azure. Whether you are looking to build a new website or improve upon an existing one, I am dedicated to delivering high-quality, reliable solutions that meet your needs.
        </p> */}
        <p className=" text-lg md:text-4xl mb-3 text-slate-200 font-semibold">
						Software Developer
					</p>
        <a href= "" download className='bg-[#00df9a] text-center text-black rounded-lg hover:bg-white hover:text-black transition duration-300 md:w-[25%]'>Download Resume
        <span><HiDownload /></span> </a> 
      </div>
      <div className="flex justify-evenly md:justify-around items-end">
					<div className=" flex flex-col gap-4 text-[#01f53f] text-sm md:text-xl justify-center mb-0 md:mb-6">
						<a
							href="https://www.linkedin.com/in/gideon-ngetich-6b7a96253/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<IoLogoLinkedin />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
						>
							<IoLogoTwitter />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<IoLogoGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/gideon-ngetich-6b7a96253/"
							target="_blank"
							rel="noreferrer"
							aria-label="Others"
						>
							<IoLogoLinkedin />
						</a>
					</div>
          </div>

      {/* Image Section */}
      <div className="w-94 h-64 md:w-full flex justify-center items-center z-20 mt-8 md:mt-0">
        <img src={image1} alt="me"
          className="w-full max-w-sm h-auto rounded-lg transform transition duration-500"
        />
      </div>
    </div>
  );
};

export default HomePage;
