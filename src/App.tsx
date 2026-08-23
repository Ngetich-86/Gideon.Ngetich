import { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AnimatedCursor from 'react-animated-cursor';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'));

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
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-blue-400">
            Loading…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
    <ToastContainer position="bottom-right" theme="dark" />
    </>
  )
}

export default App