import Navbar from "./components/Navbar"
// import Education from "./pages/Education"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Certification from "./pages/Certification"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
// import AnimatedCursor from 'react-animated-cursor';
// import { Routes, Route } from 'react-router-dom';
// import StarBackground from "./components/Background/starBackground"
// import ShootingStars from "./components/Background/shootingStars"
import Technologies from "./pages/Technologies"
import CommunityInvolvement from "./pages/CommunityInvolvement"

const App = () => {
  return (
    <>
    {/* <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    
   /> */}
   {/* <div className="absolute h-screen overflow-x-hidden before:content-[''] before:absolute before:inset-0 before:-z-10 before:left-1/2 before:top-[-50px] before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[250px] before:w-[800px] before:mix-blend-color-dodge before:rounded-full before:blur-[62px] before:bg-gradient-to-t before:from-[rgba(43,0,255,0.415)] before:to-[rgba(255,0,0,0.8)] before:pointer-events-none">
				<div className="fixed w-full h-screen -z-10">
					<StarBackground />
          <ShootingStars />
				</div>
			</div> */}
    <Navbar />
    <HomePage />
    <About />
    <Technologies />
    <Experience />
    <Projects />
    <Certification />
    <CommunityInvolvement />
    <Contact />
    <Footer />
    </>
  )
}

export default App