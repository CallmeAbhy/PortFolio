import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kutumb,
  GEMA,
  Grroom,
  GAS,
  FULL,
  Front,
  Back,
  CPP,
  JAVA,
  Python,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "download-cv", // You can adjust the id as needed
    title: "Download CV",
    // You can link directly to your resume or implement it in the component
    url: "https://rxresu.me/abhaydusane.skn.it/abhay-hitendra-dusane-web-developer",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: FULL,
  },
  {
    title: "Frontend Developer",
    icon: Front,
  },
  {
    title: "Backend Developer",
    icon: Back,
  },
  {
    title: "Google App Script Developer",
    icon: GAS,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JAVA",
    icon: JAVA,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "CPP",
    icon: CPP,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: Python,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Kutumb Aspiration",
    icon: kutumb,
    iconBg: "#383E56",
    date: "November 2022 - February 2023",
    points: [
      "Successfully designed and deployed the Tata Institute of Social Sciences Alumni Association website from scratch using GoDaddy",
      "Boosted website traffic by an impressive 30% within a 3-month period.",
      "Spearheaded the front-end development of 'Social Guru Platform,' India's pioneering short-term job providing platform.",
      "Implemented a real-time chat section using Socket.IO, fostering seamless communication between employees and employers.",
      "Enhanced platform usability by facilitating job matching for specific hours, optimizing user experience.",
      "Played a key role in delivering end-to-end solutions by closely collaborating with a back end developer using MVC architecture",
    ],
  },
  {
    title: "Web Designing Intern",
    company_name: "GEMA",
    icon: GEMA,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Management and upkeep of the website facilitating the International Olympiad Examinations",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Google App Script Developer",
    company_name: "Grroom",
    icon: Grroom,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Orchestrated the development of an AppScript using JavaScript to streamline order management worldwide within the Manufacturing Department, incorporating real-time anomaly detection for enhanced efficiency",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Currently contributing to the refinement of a leading ERP software, ranked in the top 10% for operational efficiency within the IT industry, while leveraging MS Excel/Google Sheets for comprehensive data analysis",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Your creation of the website for the Tata Institute of Social Sciences Mumbai Alums Association is a testament to your dedication and contribution towards fostering connections and facilitating meaningful engagement among alumni",
    name: "Sobins Kuriakose",
    designation: "Consultant",
    company: "The World Bank",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGM6Xu7PEOTrQ/profile-displayphoto-shrink_100_100/0/1636519968954?e=1714608000&v=beta&t=atFuiw1ylxP7aH8xqKu1twOjYPzgrmLkjmtP8NXvOyA",
  },
  {
    testimonial:
      "During their internship tenure at Kutumb Aspiration, Abhay exhibited exceptional dedication, creativity, and a strong work ethic, making invaluable contributions to our team and projects.",
    name: "Dr. Sanjaya Kumar Pradhan",
    designation: "CSO",
    company: "Kutumb Aspiration",
    image:
      "https://media.licdn.com/dms/image/D4D35AQFPHp4iwNHGzg/profile-framedphoto-shrink_100_100/0/1706173686070?e=1709650800&v=beta&t=pAjGBITM4HFivDVLBRYzrFLE9w3j4o8h25zKfzZK-rY",
  },
  {
    testimonial:
      "Abhay consistently demonstrated exceptional problem-solving skills while working on our ERP software, contributing significantly to its optimization and efficiency",
    name: "VenKatesh Pugalia",
    designation: "Founder",
    company: "Grroom",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHCvuDL9vZbRA/profile-displayphoto-shrink_100_100/0/1677507936286?e=1714608000&v=beta&t=wfZfoHP5cOGxMpBvhfQTM_TtzDUgnVdr6YKNtR3ONt4",
  },
];

const projects = [
  {
    name: "Dynamics Card",
    description:
      "Exciting times! Dive into the world of personalized card creation with Dynamics Card, a revolutionary web application designed to streamline the process of crafting stunning invitations and business cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Project1,
    source_code_link: "https://github.com/CallmeAbhy/DynamicsCard/tree/master",
  },
  {
    name: "RecipeRover",
    description:
      "RecipeRover is a dynamic platform built with React, Node, and Express, offering users a seamless experience to explore recipes and add new ones via API integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: Project2,
    source_code_link: "https://github.com/CallmeAbhy/CulinaShare",
  },
  {
    name: "NextWave Insights",
    description:
      "FlaskNext Insights: Supercharged Dashboard for Data Visualizations. Effortlessly monitor metrics with interactive charts, gain instant clarity, and make informed decisions based on deep-dive analysis.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Project3,
    source_code_link: "https://github.com/CallmeAbhy/Dashboard_Flask_X",
  },

  {
    name: "RepoVista",
    description:
      "RepoVista: Angular web app for GitHub repositories search. Enter username to view repository details like names, descriptions, and topics. Simplifying GitHub exploration",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Testing",
        color: "pink-text-gradient",
      },
    ],
    image: Project5,
    source_code_link:
      "https://github.com/CallmeAbhy/fyle-internship-challenge-23-By-Abhay",
  },

  {
    name: "Realtime-Agendify",
    description:
      "Realtime Agendify: Next.js & React.js task manager with real-time collaboration via Firebase. Tailwind CSS styling. Empower productivity. Join the revolution! ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Project4,
    source_code_link: "https://github.com/CallmeAbhy/Realtime-Agendify",
  },

  {
    name: "Restaurant Bill Generator",
    description:
      "Demonstrates frontend development and project management skills. Offers user-friendly bill generation, addressing cross-device compatibility, scalability, and customization with ReactJS, Javascript, and Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: Project6,
    source_code_link: "https://github.com/CallmeAbhy",
  },

  {
    name: "Automated Testing Mastery: Python & Selenium",
    description:
      "Achieved flawless navigation and 100% homepage link verification success. Meticulously validated user-centered design with 95% success rate, enhancing web interface efficiency.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
    ],
    image: Project7,
    source_code_link:
      "https://github.com/CallmeAbhy/Selenium-with-python/tree/main",
  },

  {
    name: "GreenHydro Insight",
    description:
      "Python project utilizes web scraping to extract 'green hydrogen' headlines from CNBC and Google News. Employs NLP for sentiment analysis and NER. Outputs include CSV tables, Google Sheets integration, and visualizations",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "sentiment analysis",
        color: "green-text-gradient",
      },
      {
        name: "Named Entity Recognition",
        color: "pink-text-gradient",
      },
    ],
    image: Project8,
    source_code_link:
      "https://colab.research.google.com/drive/1Bzc0MZewAYTmH8zx746MSfoZ-Ta85AKS?usp=sharing#scrollTo=ReI3zoerezMa",
  },
];

export { services, technologies, experiences, testimonials, projects };
