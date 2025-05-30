// import IMG1 from "../../assets/comp.jpg";
// import IMG2 from "../../images/react-portfolio.jpg";
// import IMG3 from "../../images/first-portfolio.jpg";
// import IMG4 from "../../images/comp.jpg";
// import IMG5 from "../../images/machine.jpg";
// import IMG6 from "../../images/netflix.jpg";
import GalleryApp from "../assets/images/GalleryApp.png"
import healtSystem from "../assets/images/healt-system.png"
import seatReserve from "../assets/images/seat-reserv-project.png"
const ProjectData = [
    {
      id: 1,
      image: healtSystem,
      title: "Automated Seat reservation system in PSV",
      github: "https://github.com/Ngetich-86/Auto-seat-psv-Client",
      text: "A comprehensive seat reservation system for public service vehicles (PSVs) that automates the booking process, enhances user experience, and optimizes seat management.",
      demo: "https://www.loom.com/share/4bd7baef319640b4a4e07a385d232b2b?sid=4aa7d828-7f8a-42a8-b8a3-6a491b93c740",
    },
    {
      id: 2,
      image: GalleryApp,
      title: "Gallery App",
      github: "https://github.com/Ngetich-86/react-portfolio",
      text: " modern and responsive gallery app styled with Daisy UI, built using TypeScript and Firebase for secure authentication, efficient image storage, and real-time updates. ",
      demo: "https://gallery-app-new-git-main-ngetich86s-projects.vercel.app/",
    },
    {
      id: 3,
      image: seatReserve,
      title: "Health-info-system",
      github: "https://github.com/Ngetich-86/Health-Info-system-Task",
      text: "A simple health information management system that allows doctors to register clients, create health programs, enroll clients in multiple programs, and expose client profiles via an API.",  
      demo: "https://www.loom.com/share/6a9b81cb8b014ed8bb117f3efa331e4f?sid=3287e726-03d7-4ade-96e0-e6f7773d8522",
    }
    
];
export default ProjectData;