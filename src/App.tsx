import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProjectCaseStudy from "./pages/ProjectCaseStudy"
import AnimatedCursor from 'react-animated-cursor';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
   />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App