import healtSystem from "../assets/images/healt-system.png"
import seatReserve from "../assets/images/seat-reserv-project.png"

export interface Project {
  id: number;
  slug: string;
  image?: string;
  title: string;
  github: string;
  text: string;
  demo?: string;
  stack: string[];
  category: string;
}

const ProjectData: Project[] = [
    {
      id: 1,
      slug: "automated-seat-reservation-system",
      image: seatReserve,
      title: "Automated Seat reservation system in PSV",
      github: "https://github.com/Ngetich-86/Auto-seat-psv-Client",
      text: "A comprehensive seat reservation system for public service vehicles (PSVs) that automates the booking process, enhances user experience, and optimizes seat management.",
      demo: "https://www.loom.com/share/4bd7baef319640b4a4e07a385d232b2b?sid=4aa7d828-7f8a-42a8-b8a3-6a491b93c740",
      stack: ["React", "Node.js", "Hono.js", "PostgreSQL", "Drizzle ORM", "M-Pesa Daraja API"],
      category: "Full-Stack / Integration Testing"
    },
    {
      id: 2,
      slug: "health-info-system",
      image: healtSystem,
      title: "Health-info-system",
      github: "https://github.com/Ngetich-86/Health-Info-system-Task",
      text: "A simple health information management system that allows doctors to register clients, create health programs, enroll clients in multiple programs, and expose client profiles via an API.",
      demo: "https://www.loom.com/share/6a9b81cb8b014ed8bb117f3efa331e4f?sid=3287e726-03d7-4ade-96e0-e6f7773d8522",
      stack: ["REST API"],
      category: "Backend"
    },
    {
      id: 3,
      slug: "springboot-nextjs-employee-manager",
      title: "Spring Boot + Next.js Employee Manager",
      github: "https://github.com/Ngetich-86/springboot-nextjs-employee-manager",
      text: "Full-stack employee management application demonstrating Java/Spring Boot backend development, a Next.js frontend, REST API integration, Redis caching, API rate limiting, and Docker-based application packaging.",
      stack: ["Java", "Spring Boot", "Next.js", "Redis", "Docker", "REST APIs"],
      category: "Full-Stack / Backend Engineering"
    }
];
export default ProjectData;