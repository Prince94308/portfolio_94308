// =============================================================================
// CERTIFICATE IMAGES IMPORTS
// =============================================================================
// Certificate images imported from src/assets/ folder

import mlCert from '../assets/Machine Learning.png';
import cloudCert from '../assets/cloud computing.png';
import googleCert from '../assets/google cloud.png';
import oracleCert from '../assets/oracle.png';
import javaCert from '../assets/infosys.png';
import accentureCert from '../assets/accenture.png';
import apnaghar from '../assets/apnaghar.png';
import edunexus from '../assets/edunexus.png';
import portfolio from '../assets/portfolio.png';
// =============================================================================

export const navLinks = [
    {
        id: "", // Empty ID for home/top
        title: "Home",
        color: "#ffffff"
    },
    {
        id: "about",
        title: "About",
        color: "#00FFFF" // Cyan
    },
    {
        id: "work",
        title: "Work",
        color: "#E233E2" // Purple
    },
    {
        id: "education",
        title: "Education",
        color: "#FFD700" // Gold
    },
    {
        id: "projects",
        title: "Projects",
        color: "#00FF9D" // Green
    },
    {
        id: "certifications",
        title: "Certifications",
        color: "#FF00FF" // Pink
    },
    {
        id: "contact",
        title: "Contact",
        color: "#FF4500" // Orange-Red
    },
];

const skills = [
    {
        icon: "FaLaptopCode", // Maps to Frontend Development
        title: "Frontend Development",
        color: "#00FFC2", // Bright Green/Teal
        skills: [
            {
                name: "HTML",
                level: "95%",
            },
            {
                name: "CSS",
                level: "90%",
            },
            {
                name: "Javascript",
                level: "85%",
            },
            {
                name: "React/Redux", // Extra skill
                level: "80%",
            },
            {
                name: "Tailwind CSS", // Extra skill
                level: "80%",
            },
        ],
    },
    {
        icon: "FaServer", // Maps to Backend Development
        title: "Backend Development",
        color: "#FF5733", // Orange/Red for Backend
        skills: [
            {
                name: "Node.js",
                level: "90%",
            },
            {
                name: "MySQL",
                level: "75%",
            },
            {
                name: "MongoDB",
                level: "85%",
            },
            {
                name: "Express.js",
                level: "80%",
            },
            {
                name: "Java", // Extra skill
                level: "90%",
            },
        ],
    },


    {
        icon: "FaCloud", // Maps to Cloud & DevOps
        title: "Cloud & DevOps",
        color: "#00BFFF", // Deep Sky Blue for Cloud
        skills: [
            {
                name: "Azure fundamentals",
                level: "90%",
            },
            {
                name: "Salesforce (Admin)",
                level: "85%",
            },

            {
                name: "Cloud Computing",
                level: "90%",
            },
            {
                name: "Google Cloud",
                level: "85%",
            },
        ],
    },
    {
        icon: "FaCodeBranch",
        title: "Git & Version Control",
        color: "#00BFFF", // Deep Sky Blue for Cloud
        skills: [
            {
                name: "Git & GitHub",
                level: "80%",
            },
            {
                name: "Postman", // Extra skill
                level: "75%",
            },
        ],
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "React JS",
        icon: "reactjs",
    },
    {
        name: "Redux Toolkit",
        icon: "redux",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "git",
        icon: "git",
    },
    {
        name: "figma",
        icon: "figma",
    },
    {
        name: "docker",
        icon: "docker",
    },
];

// =============================================================================
// WORK EXPERIENCE DATA
// =============================================================================
// Edit this array to update your work experience on the portfolio
// To add a new experience, copy an existing object and modify the values
// To remove an experience, delete the entire object (including the commas)
//
// Fields:
// - title: Your job title/position
// - company_name: Name of the company
// - icon: Company logo (optional, keep as-is or update in assets)
// - iconBg: Background color for the icon
// - date: Employment period (e.g., "Jan 2020 - Present")
// - points: Array of strings describing your responsibilities/achievements
// =============================================================================



const experiences = [
    {
        title: "Python Intern",
        company_name: "Ramraj Technology Solutions Pvt. Ltd., Bhopal, India",
        icon: "",
        iconBg: "#383E56",
        date: "Aug 2024",
        points: [
            "Developed backend logic and script optimizations using Python to enhance system performance.",
            "Implemented debugging protocols and adhered to strict coding standards for maintainable codebases.",
            "Collaborated on documentation and version control practices using Git.",
        ],
    },
];


// =============================================================================
// EDUCATION DATA
// =============================================================================
// Edit this array to update your education on the portfolio
// To add a new education entry, copy an existing object and modify the values
// To remove an entry, delete the entire object (including the commas)
//
// Fields:
// - school_name: Name of the educational institution
// - degree: Degree or qualification obtained
// - date: Period of study (e.g., "2016 - 2020")
// - points: Array of strings describing achievements/highlights
// =============================================================================


const education = [
    {
        school_name: "Technocrats Institute of Technology (Excellence)",
        degree: "Computer Science Engineering, B.Tech",
        date: "2023 - 2027",
        CGPA: "7.8/10",
        points: [
            "Studying core subjects like Data Structures, Algorithms, DBMS, OS, and Computer Networks.",
            "Hands-on experience with MERN stack, Machine Learning, and full-stack web development projects.",
            "Actively participated in coding contests, hackathons, and technical workshops."
        ],
    },
    {
        school_name: "Mahanth Ramrup Goswami College",
        degree: "Senior Secondary Education (PCM)",
        date: "2021 - 2023",
        Percentage: "69.4%",
        points: [
            "Completed Physics, Chemistry, and Mathematics with a strong analytical foundation.",
            "Developed logical thinking and problem-solving skills through mathematics.",
            "Participated in academic seminars and school-level science activities."
        ],
    },
    {
        school_name: "Sarswati Vidya Mandir",
        degree: "High School",
        date: "2016 - 2021",
        Percentage: "76.2%",
        points: [
            "Built a strong foundation in Mathematics, Science, and Computer Basics.",
            "Actively involved in extracurricular activities and school events.",
            "Developed discipline, teamwork, and communication skills."
        ],
    },
];



// =============================================================================
// CERTIFICATIONS DATA
// =============================================================================
// Edit this array to update your certifications on the portfolio
// To add a new certificate, copy an existing object and modify the values
// To remove a certificate, delete the entire object (including the commas)
//
// Fields:
// - name: Certificate name/title
// - issuer: Organization that issued the certificate
// - date: Issue date (e.g., "Jan 2023")
// - image: Badge/logo thumbnail image (shown on the card)
// - certificateImage: Path to full certificate image in src/assets/certificates/
//                     Example: "/src/assets/certificates/ml-certificate.jpg"
//                     This will open in a modal when "View Certificate" is clicked
//
// HOW TO ADD A CERTIFICATE IMAGE:
// 1. Place your certificate image (JPG, PNG) in: client/src/assets/certificates/
// 2. Import it at the top of this file: import mlCert from './assets/certificates/ml-certificate.jpg'
// 3. Add certificateImage field: certificateImage: mlCert
// 4. The image will open in a full-screen modal when users click "View Certificate"
// =============================================================================

const certifications = [
    {
        name: "Machine learning ",
        issuer: "NPTEL",
        date: "NOvember 2025",
        link: "",
        image: "",
        certificateImage: mlCert, // Certificate image enabled
    },
    {
        name: "cloud computing",
        issuer: "NPTEL",
        date: "NOvember 2025",
        link: "",
        image: "",
        certificateImage: cloudCert,
    },
    {
        name: "Google Cloud Career Lunchpad Cloud Engineer track ",
        issuer: "Google Cloud Skills Boost",
        date: "NOvember 2025",
        link: "",
        image: "",
        certificateImage: googleCert,
    },
    {
        name: "Orcale Certified Foundation Associate ",
        issuer: "Oracle University",
        date: "October 2025",
        link: "",
        image: "",
        certificateImage: oracleCert,
    },
    {
        name: "Programming using Java ",
        issuer: "Infosys Springboard",
        date: "June 2025",
        link: "",
        image: "",
        certificateImage: javaCert,
    },
    {
        name: "Technology Consulting Job Simulation",
        issuer: "Accenture",
        date: "December 2024",
        link: "",
        image: "",
        certificateImage: accentureCert,
    },
    // Example with local PDF file (uncomment to use):
    // {
    //     name: "Google Cloud Professional Cloud Architect",
    //     issuer: "Google Cloud",
    //     date: "March 2023",
    //     image: "https://example.com/badge.png", // Optional
    //     pdfPath: "/certificates/google-cloud-architect.pdf", // PDF stored locally
    // },
];



const testimonials = [];

const projects = [
    {
        id: "apna-ghar",
        name: "Apna Ghar",
        description:
            "A full-stack real estate property management platform for listing, searching, and purchasing properties with secure authentication and payments.",
        detailed_description:
            "Apna Ghar is a comprehensive MERN-based real estate platform that allows users to browse, filter, and manage property listings with advanced search options. Users can create listings with multiple images, view property locations on interactive maps, save favorites, and securely complete transactions using PayPal integration. The platform includes JWT-based authentication, user profiles with avatar uploads, and a responsive modern UI for seamless user experience.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux Toolkit",
                color: "purple-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Leaflet",
                color: "yellow-text-gradient",
            },
            {
                name: "PayPal",
                color: "blue-text-gradient",
            },
        ],
        image: apnaghar,
        source_code_link: "https://github.com/Prince94308",
    }
    ,
    {
        id: "educonnect-nexus",
        name: "EduConnect Nexus",
        description:
            "An AI-powered education platform connecting students and educators with real-time communication, intelligent analytics, and personalized learning experiences.",
        detailed_description:
            "EduConnect Nexus is a full-stack, AI-driven learning platform built using React, Node.js, and FastAPI. It enables students and educators to interact through real-time messaging, manage educational content, and visualize learning progress via dashboards. The platform integrates advanced AI capabilities such as face recognition, generative AI assistance, and machine learning models for analytics and personalization. Secure authentication, cloud-based file handling, and scalable architecture make it a robust modern EdTech solution.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux Toolkit",
                color: "purple-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Material UI",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "Express.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Socket.io",
                color: "yellow-text-gradient",
            },
            {
                name: "FastAPI",
                color: "blue-text-gradient",
            },
            {
                name: "PyTorch",
                color: "orange-text-gradient",
            },
            {
                name: "Generative AI",
                color: "pink-text-gradient",
            },
        ],
        image: edunexus,
        source_code_link: "https://github.com/Prince94308",
    }
    ,
    {
        id: "portfolio",
        name: "Portfolio",
        description:
            "A fully responsive, 3D interactive developer portfolio showcasing skills, projects, and professional experience using immersive animations.",
        detailed_description:
            "This portfolio website is a showcase of creative coding and modern web development. It leverages Three.js for 3D graphics, Framer Motion for complex animations, and React for a component-based structure. It is designed to be fully responsive and performant across all devices.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "green-text-gradient",
            },
            {
                name: "Framer Motion",
                color: "pink-text-gradient",
            },
            {
                name: "Vite",
                color: "yellow-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Prince94308",
    },
];

export { skills, technologies, experiences, testimonials, projects, education, certifications };
