import clsx from "clsx";
import { useState } from "react";
import { routesFlat } from "../../routes";
import { AnimatePresence } from "framer-motion";
import * as projectImgs from "../../assets/projects";
import PopUp from "./Popup";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopUp = (project) => setSelectedProject(project);
  const closePopUp = () => {
    setSelectedProject(null);
    console.log("working");
  };

  return (
    <div className={parentContainer} id={routesFlat.portfolio}>
      <div className={projectsContainer}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={projectContainer}
            onClick={() => openPopUp(project)}
          >
            <img
              src={project.image}
              alt={project.caption}
              className={imgStyle}
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <PopUp onClose={closePopUp} item={selectedProject} />
        )}
      </AnimatePresence>
    </div>
  );
}

const parentContainer = clsx(
  "h-screen flex flex-col justify-center items-center overflow-hidden"
);
const projectsContainer = clsx(
  "flex flex-wrap justify-center items-center max-w-[1100px]"
);
const projectContainer = clsx(
  "shadow-lg w-[20rem] hover:md:h-[11rem] hover:md:-mt-12 md:h-[8rem] h-[3rem] cursor-pointer relative overflow-hidden"
);
const imgStyle = clsx("h-auto w-full top-0 absolute object-fit");

const projects = [
  {
    title: "Non-Profit Website",
    company: "CTrees.org",
    desc: "As the first frontend developer and team lead at CTrees, I built the organization’s entire frontend foundation from the ground up. I established development systems, tooling, and workflows — including CI/CD pipelines, testing frameworks, and coding standards — to support long-term scalability. I led and mentored the frontend team while architecting and implementing the web platform that delivers dashboards, visualizations, and secure user flows for accessing global forest carbon data. Collaborating closely with scientists and backend engineers, I ensured the platform was performant, reliable, and usable by governments, NGOs, and private organizations worldwide.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://ctrees.org",
    image: projectImgs.web3,
    caption:
      "Using satellite data, AI, and field inventories, this product delivers accurate, transparent forest carbon measurements to governments, NGOs, and private organizations to support climate action and reporting.",
  },
  {
    title: "Non-Profit Website",
    company: "CTrees.org",
    desc: "The initial iteration of CTrees’ web platform served as a second-round minimum viable product (MVP) to make early forest carbon data accessible to stakeholders. It provided foundational dashboards, data visualizations, and basic reporting tools for governments, NGOs, and private organizations, allowing users to explore forest carbon measurements and track land-use impacts. While simpler than the final rebranded version, this MVP laid the groundwork for secure, scalable access to high-quality environmental data.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://web.archive.org/web/20231130221546/https://ctrees.org/",
    image: projectImgs.web2,
    caption:
      "CTree's rebranded web platform converted from cross-functional MVP to a polished, scalable product delivering forest carbon data to global stakeholders.",
  },
  {
    title: "Geospatial Data Visualization",
    company: "CTrees.org",
    desc: "I helped co-develop a dashboard and interactive mapping tool using Mapbox to visualize geospatial carbon data. Collaborating closely with scientists, engineers, and product leads, I translated complex datasets into intuitive, interactive visualizations that allowed stakeholders to explore forest coverage, carbon stocks, and land-use changes. This early version provided functional, accessible insights and laid the groundwork for future enhancements and the platform’s later pivot.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://ctrees.org/reddai",
    image: projectImgs.map,
    caption:
      "This AI-powered system enabled the interactive dashboard and Mapbox mapping tool to display near-real-time visualizations.",
  },
  {
    title: "Google Earth Engine Geospatial Analysis",
    company: "CTrees.org",
    desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting. ",
    interface: ["Desktop"],
    link: "https://ctrees.org/luca",
    image: projectImgs.luca,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Content Management System",
    company: "CTrees.org",
    desc: "",
    interface: ["Desktop"],
    link: "https://ctrees.org/admin",
    image: projectImgs.cms,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Artist Portfolio",
    company: "Violetdanse.com",
    desc: "",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://violetdanse.com",
    image: projectImgs.violetdanse,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Data Visualization Platform",
    company: "YouGov.com",
    desc: "Managed and delivered privacy and permissions portal, migrated the codebase from Angular7 to React16, and built key dashboard features. Developed functional and unit tests to ensure reliability while delivering a modern, scalable, and secure data-visualization experience.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://crunch.io/visualization/",
    image: projectImgs.crunch,
    video: "https://crunch.io/img/visualization_and_delivery.gif",
    caption:
      "Visualization & Delivery tool transforms survey data into interactive dashboards, charts, and tables.",
  },
  {
    title: "Crypto Sentiment Analysis",
    company: "CryptoEQ.io",
    desc: "",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://cryptoeq.io/dashboard",
    // https://web.archive.org/web/20200411095039/https://cryptoeq.io/
    image: projectImgs.eq,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "MVP Product Launch",
    company: "Willo.com",
    desc: "Built the minimum viable product (MVP) sales page under tight deadlines, delivering a polished, high-conversion landing experience. Collaborated closely with design, marketing, and product teams to turn mockups into working code. Ensured responsiveness, performance, and alignment with branding. Iterated based on feedback and launched rapidly to validate product-market fit.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://web.archive.org/web/20200808184452/https://www.willo.com",
    image: projectImgs.willo,
    caption:
      "The toothbrush product website designed to support children with sensory sensitivities or motor challenges. Integrates with a companion app so parents can track brushing habits.",
  },
  {
    title: "App MVP Mockup",
    company: "Boba.me",
    desc: "",
    interface: ["Mobile"],
    link: "https://www.figma.com/proto/AMOnS6XG44jBzlYOnIlU6j/BobaMe?node-id=1-3",
    image: projectImgs.boba,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Therapy Practice",
    company: "Moonflamelove.com",
    desc: "",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://moonflamelove.com/about",
    image: projectImgs.moonflame,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "IBM Templating Software",
    company: "GreenMountainEnergy.com",
    desc: "",
    interface: ["Desktop", "Mobile"],
    link: "https://www.greenmountainenergy.com/",
    image: projectImgs.energy,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Internal Systems",
    company: "Coca-ColaCompany.com",
    desc: "",
    interface: ["Desktop"],
    image: projectImgs.cocacola,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Marketing Site Redesign",
    company: "Tigerspace.digital",
    desc: "",
    interface: ["Desktop", "Tablet", "Mobile"],
    image: projectImgs.tigerspace,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "Yoga Studio SEO",
    company: "Urbanfityoga.com",
    desc: "",
    interface: ["Desktop", "Mobile"],
    link: "https://www.urbanfityoga.com/classes-and-pricing.html",
    image: projectImgs.urbanfit,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
];
