import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "Cloud Computing",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Wayfair",
    icon: starbucks,
    iconBg: "#83609e",
    date: "June 2024 - August 2024",
    points: [
      "Engineered, tested, and launched a global API for package tracking to improve consumer and customer relationship satisfaction by 77% through real-time data access and streamlined endpoint creation. (Python, SQL, Rest APIs).",
      "Optimized a fleet insight server using Java and JavaScript, achieving a 63% decrease in operational delay backend for purchase order last mile tracking and making it 2.7 times faster. (Java, SQL, Google Cloud)",
      "Applied natural language processing for package delivery and parcel conglomeration statistics to automate customer support by determining package defect scam probability up to 86% confidence. (Python, TensorFlow, Docker)",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Lockheed Martin",
    icon: tesla,
    iconBg: "#0f198a",
    date: "May 2023 - August 2023",
    points: [
      "Designed, documented, and launched a 55% more efficient metric tracking solution to ensure accuracy for satellite data using Typescript and Java addressing 33% of user feedback. (Java, JavaScript, SQL, Google Cloud, Git).",
      "Spearheaded the creation of an image classification model for synthetic aperture radar satellite data. Led team to a 98% accuracy by introducing convolutional back projection in object-oriented programming backend display dashboard. (Python, Keras, PyTest, NodeJS, AWS S3)",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Longhorn Racing",
    icon: shopify,
    iconBg: "#a6771f",
    date: "August 2022 - May 2023",
    points: [
      "Created an 85% faster high-performance back end for a telemetry dashboard infrastructure improvement using HTML, CSS, JavaScript, and React for auto sports leveraging speed and time for vehicle OS updating. (Linux, Docker, AWS).",
      "Gathered data from telemetry sensors, generated real-time data visualization in the front end, and presented through machine-to-machine protocol at 1Mbps for Formula SAE competitions. (C++, QuestDB, Telegraph, MQTT, Grafana).",
    ],
  },
  {
    title: "SEES Software Engineer Intern",
    company_name: "NASA",
    icon: meta,
    iconBg: "#9c2a05",
    date: "May 2022 - August 2022",
    points: [
      "Improved a concept for an extraterrestrial lunar lander which can travel up to 3 times as efficiently, by working with NASA engineers, Machine Learning, and a proprietary algorithm. (C, Java, Python, TensorFlow, MATLAB).",
      "Developed a 35% more accurate data-acquisition technique testing C++ to communicate with a solar array and battery system to create and display data in a dashboard from scratch for engineer examination. (Git, PuTTY, Azure).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Do not go where the path may lead; go instead where there is no path and leave a trail.",
    name: "Ralph Waldo Emerson",
  },
  {
    testimonial:
      "Life has no limitations, except the ones you make.",
    name: "Les Brown",
  },
  {
    testimonial:
      "You don't have to be great to start, but you have to start to be great.",
    name: "Zig Zigler",
  },
];

const projects = [
  {
    name: "Inventory Management Dashboard",
    description:
      "Designed and implemented a full-stack inventory management system with Go APIs, React, and MongoDB, enabling real-time updates, predictive analytics, and dynamic data visualizations on a dashboard with use for drop shipping. Integrated an AI-powered recommendation system using TensorFlow to analyze order patterns and send alerts when similar products are restocked or new releases become available and listen to feedback and edit recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "go",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Equity Trading Testing Bot",
    description:
      "Created a bot to use the ICT trading strategy of fair-value gaps through historic markets of the New York session to verify entries and exits targeting liquidity. Used Python, SQL, Yahoo Finance API. Developed and deployed on a website created with React, JavaScript, HTML, CSS. Implemented robust data storage solutions by leveraging MongoDB to capture.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Similarity Mapping of the Milky Way",
    description:
      "Received 1st Place for the UNT AI Research stipend by optimizing a model to apply style transfer of H-alpha (Hα) gas and corresponding flux intensity surrounding blackholes up to 35% more efficiently to determine behavioral similarities in the Milky Way.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:cd91b2e8-1b42-4049-b337-72a854704a1b",
  },
];

export { services, technologies, experiences, testimonials, projects };
