import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Welcome! I am a passionate full stack developer with a knack for crafting robust and scalable applications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `My journey into software and application development started with a deep curiosity about how digital systems worked. This curiosity fueled my pursuit of higher education in the field, culminating in a Bachelor of Science in Software Development.
                          Furthermore, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My journey has continuously made me strive to learn and adapt to new challenges. 
                          I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy surfing, traveling and attending music festivals.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - June 2024",
    role: "Software Engineer - Intern",
    company: "Apple Inc.",
    description: `Supported the Information Systems and Technology (IS&T) - Content Development team by updating and maintaining the Apple Online Store (AOS) web application while using ASTRO.JS, HTML/CSS and other internal tools. Additionally, I also collaborated with team members to define project requirements and timelines while using Agile/Scrum Methodology.`,
    technologies: ["HTML/CSS", "ASTRO.JS", "Agile/SCRUM"],
  },
  {
    year: "2021 - Present",
    role: "Product Zone/ Technical Specialist",
    company: "Apple Inc.",
    description: `Offered quality product knowledge about the Apple product line, recieved/ debugged any issues pertaining to iOS/macOS and troubleshooted hardware.`,
    technologies: ["CRM", "macOS/iOS", "Debug Tools"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React.JS", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular.JS", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React.JS", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "San Diego, CA ",
  phoneNo: "619-622-8788 ",
  email: "kev.reynoso29@gmail.com",
};
