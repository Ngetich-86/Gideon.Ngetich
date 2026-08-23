import healtSystem from "../assets/images/healt-system.jpg"
import seatReserve from "../assets/images/seat-reserv-project.jpg"

export interface CaseStudy {
  overview: string;
  engineeringProblem?: string;
  architecture?: string;
  engineeringWork?: string[];
  qualityStrategy?: string[];
  failureModes?: string[];
  futureImprovements?: string[];
  keyTakeaway: string;
}

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
  caseStudy?: CaseStudy;
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
      category: "Full-Stack / Integration Testing",
      caseStudy: {
        overview: "A seat reservation system for public service vehicles (PSVs) that automates booking, seat selection, and payment collection so operators and passengers aren't relying on manual, error-prone booking.",
        engineeringProblem: "PSV seat booking is prone to double-booking when multiple passengers try to reserve the same seat at once, and to inconsistent booking state when a payment fails or times out partway through the flow.",
        architecture: "A React frontend talks to a Hono.js API backend, which persists trips, seats, and bookings in PostgreSQL via Drizzle ORM. Payments are collected through the M-Pesa Daraja API.",
        engineeringWork: [
          "Built the end-to-end booking flow: seat selection, reservation, and payment initiation",
          "Integrated the M-Pesa Daraja API for payment collection and callback handling",
          "Modeled trips, seats, and bookings in PostgreSQL via Drizzle ORM"
        ],
        qualityStrategy: [
          "Functional and integration testing across the booking flow",
          "Testing concurrent booking attempts on the same seat to surface seat-locking and double-booking issues",
          "Validating M-Pesa payment responses, including error responses and timeouts",
          "Checking idempotent handling of repeated/duplicate payment requests"
        ],
        failureModes: [
          "Concurrent requests for the same seat can race if seat-locking isn't enforced correctly",
          "Duplicate or delayed Daraja API callbacks need idempotent handling to avoid double-charging or an inconsistent booking state"
        ],
        keyTakeaway: "Demonstrates building a real-time, payment-linked booking system and reasoning through the integration and concurrency edge cases that make it reliable — not just the happy path."
      }
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
      category: "Backend",
      caseStudy: {
        overview: "A health information management system that lets doctors register clients, create health programs, enroll clients in multiple programs, and expose client profiles via an API.",
        keyTakeaway: "A backend-focused project centered on API design for healthcare data workflows: registering clients, managing programs, and enrollment."
      }
    },
    {
      id: 3,
      slug: "springboot-nextjs-employee-manager",
      title: "Spring Boot + Next.js Employee Manager",
      github: "https://github.com/Ngetich-86/springboot-nextjs-employee-manager",
      text: "Full-stack employee management application demonstrating Java/Spring Boot backend development, a Next.js frontend, REST API integration, Redis caching, API rate limiting, and Docker-based application packaging.",
      stack: ["Java", "Spring Boot", "Next.js", "Redis", "Docker", "REST APIs"],
      category: "Full-Stack / Backend Engineering",
      caseStudy: {
        overview: "Full-stack employee management application demonstrating Java/Spring Boot backend development, a Next.js frontend, REST API integration, Redis caching, API rate limiting, and Docker-based application packaging.",
        architecture: "A Java/Spring Boot backend exposes REST APIs consumed by a Next.js frontend, with Redis used for caching and Docker used to package the application.",
        futureImprovements: [
          "Automated tests for cache hit/miss and invalidation behavior",
          "Boundary tests for the rate limiter (just under, at, and just over the threshold)"
        ],
        keyTakeaway: "Shows backend engineering capability in the Java/Spring Boot ecosystem alongside modern frontend integration — technology breadth beyond the Node.js/TypeScript stack used elsewhere in this portfolio."
      }
    }
];
export default ProjectData;