
import { IoLogoReddit } from 'react-icons/io5';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import image1 from "../assets/images/profile.png";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center p-6 font-medium">
      {/* Social Media Icons Section */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-[#4169e1] text-2xl z-50 shadow-lg">
        <a
          href="https://www.linkedin.com/in/gideon-ngetich-6b7a96253/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-green-400 transition duration-300"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://x.com/singh34274"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition duration-300"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://github.com/Ngetich-86"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition duration-300"
        >
          <IoLogoGithub />
        </a>
        <a
  href="https://www.reddit.com/user/IndependentZone7413/"
  target="_blank"
  rel="noreferrer"
  aria-label="Reddit"
  className="hover:text-gray-400 transition duration-300"
>
  <IoLogoReddit size={24} />
</a>
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left md:pr-8">
        <h3 className="text-5xl font-bold text-[#4169e1] mb-4">
          Hello 👋, I'm{" "}
          <span className="text-[#00bfff]">
            <ReactTyped
              className="pl-2"
              strings={["Gideon Ngetich", "a Tech Enthusiast"]}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </span>
        </h3>
        <p className="text-lg md:text-3xl mb-6 text-slate-200 ">
          Software Developer & Cloud Enthusiast
        </p>
        <a
          href="https://stdntpartners-my.sharepoint.com/:b:/g/personal/gideon_ngetich_studentambassadors_com/EeJudrpr3_ZKlFmA-GzZfR0BDlSnxsuOeda2QP3m20hbQQ?e=8P2hSp"
          download
          target='_blank'
          className="inline-flex justify-center items-center gap-2 bg-[#87ceeb] text-black px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Download Resume
          <HiDownload />
        </a>
      </div>

      {/* Image Section */}
      <div className="w-64 md:w-80 mt-4 md:mt-0">
        <img
          src={image1}
          alt="me"
          className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HomePage;
