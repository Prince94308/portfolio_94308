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
                name: "React",
                level: "95%",
            },
            {
                name: "TypeScript",
                level: "90%",
            },
            {
                name: "Next.js",
                level: "85%",
            },
            {
                name: "Redux/Zustand", // Extra skill, will be hidden by default
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
                name: "Python",
                level: "85%",
            },
            {
                name: "GraphQL",
                level: "80%",
            },
            {
                name: "Express.js", // Extra skill
                level: "90%",
            },
        ],
    },
    {
        icon: "FaShieldAlt", // Maps to Cybersecurity
        title: "Cybersecurity",
        color: "#8A2BE2", // BlueViolet for Security
        skills: [
            {
                name: "Penetration Testing",
                level: "95%",
            },
            {
                name: "OWASP Top 10",
                level: "90%",
            },
            {
                name: "Metasploit",
                level: "85%",
            },
            {
                name: "Security Auditing", // Extra skill
                level: "80%",
            },
        ],
    },
    {
        icon: "FaCloud", // Maps to Cloud & DevOps
        title: "Cloud & DevOps",
        color: "#00BFFF", // Deep Sky Blue for Cloud
        skills: [
            {
                name: "AWS",
                level: "90%",
            },
            {
                name: "Docker",
                level: "85%",
            },
            {
                name: "Kubernetes",
                level: "80%",
            },
            {
                name: "Terraform", // Extra skill
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: "starbucks",
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: "tesla",
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: "shopify",
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: "meta",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
            "Graduated with Honors.",
            "Specialized in Software Engineering and Artificial Intelligence.",
            "Member of the University Coding Club."
        ],
    },
    {
        school_name: "Mahanth Ramrup Goswami College",
        degree: "Senior Secondary Education, PCM",
        date: "2021 - 2023",
        Percentage: "69.4%",
        points: [
            "Focus on frontend technologies: HTML, CSS, JavaScript.",
            "Completed capstone project on e-commerce websites."
        ],
    },

    {
        school_name: "Sarswati Vidya Mandir",
        degree: "High School",
        date: "2016 - 2021",
        Percentage: "76.2%",
        points: [
            "Focus on frontend technologies: HTML, CSS, JavaScript.",
            "Completed capstone project on e-commerce websites."
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

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "carrent",
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: "jobit",
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "tripguide",
        source_code_link: "https://github.com/",
    },
];

export { skills, technologies, experiences, testimonials, projects, education, certifications };
