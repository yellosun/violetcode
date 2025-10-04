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
  "md:h-screen flex flex-col justify-center items-center overflow-hidden z-20"
);
const projectsContainer = clsx(
  "flex flex-wrap justify-center items-center md:-ml-6 -ml-4 grid md:grid-cols-3 grid-cols-2"
);
const projectContainer = clsx(
  "md:w-[20rem] hover:md:h-[11rem] hover:md:-mt-12 md:h-[8rem] h-[6rem] w-[9rem]",
  " pl-3 cursor-pointer relative overflow-hidden"
);
const imgStyle = clsx("h-auto w-full top-0 absolute object-fit");

const projects = [
  {
    title: "Site Redesign & Rebuild - Version 2.0",
    company: "CTrees.org",
    desc: "As the first frontend developer and team lead at CTrees, I built the organization’s entire frontend foundation from the ground up. I established development systems, tooling, and workflows — including CI/CD pipelines, testing frameworks, and coding standards — to support long-term scalability. I led and mentored the frontend team while architecting and implementing the web platform that delivers dashboards, visualizations, and secure user flows for accessing global forest carbon data. Collaborating closely with scientists and backend engineers, I ensured the platform was performant, reliable, and usable by governments, NGOs, and private organizations worldwide.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://ctrees.org",
    image: projectImgs.web3,
    caption:
      "Using satellite data, AI, and field inventories, this product delivers accurate, transparent forest carbon measurements to governments, NGOs, and private organizations to support climate action and reporting.",
  },
  {
    title: "Full-Scale Production - Version 1.0",
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
    desc: "Co-developed an interactive dashboard and mapping tool using Mapbox to visualize geospatial carbon data. Collaborated with scientists, engineers, and product leads to translate complex datasets into intuitive visualizations, enabling stakeholders to explore forest coverage, carbon stocks, and land-use changes. This MVP provided accessible, functional insights and laid the foundation for future platform enhancements.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://ctrees.org/reddai",
    image: projectImgs.map,
    caption:
      "This AI-powered system enabled the interactive dashboard and Mapbox mapping tool to display near-real-time visualizations.",
  },
  {
    title: "Google Earth Engine Geospatial Analysis",
    company: "CTrees.org",
    desc: "Developed a geospatial analysis platform leveraging Google Earth Engine, enabling advanced visualization and interpretation of global forest and carbon data. Built a custom desktop interface to handle complex geospatial datasets, delivering interactive maps, analytics, and data exploration tools. This project provided researchers and stakeholders with critical insights into climate impact, advancing CTrees’ mission of environmental monitoring and sustainability.",
    interface: ["Desktop"],
    link: "https://ctrees.org/luca",
    image: projectImgs.luca,
    caption:
      "A quick view at CTrees' LUCA Platform offering bi-weekly carbon impact updates using geospatial analysis.",
  },
  {
    title: "Enterprise-Grade CMS (Content Management System)",
    company: "CTrees.org",
    desc: "Designed and built a custom content management system from the ground up, creating a scalable and secure backend with a responsive desktop interface. This complex system empowered the organization to manage global environmental data, streamline publishing workflows, and maintain high data integrity. By delivering a fully bespoke CMS, I provided a critical tool that became central to the company's core operations and long-term platform growth.",
    interface: ["Desktop"],
    link: "https://ctrees.org/admin",
    image: projectImgs.cms,
    caption:
      "Custom CMS interface enabling content creators to manage and publish news articles efficiently, with a clear, responsive dashboard for streamlined workflow and editorial control.",
  },
  {
    title: "Customized Professional Artist Portfolio",
    company: "Violetdanse.com",
    desc: "Designed and developed a fully responsive artist portfolio website, Violetdanse.com, showcasing dance works, multimedia projects, and professional achievements. Built from scratch with a focus on performance, accessibility, and elegant design across desktop, tablet, and mobile. The platform serves as both a creative showcase and a professional hub, highlighting artistic identity while delivering a seamless user experience.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://violetdanse.com",
    image: projectImgs.violetdanse,
    caption:
      "Custom portfolio interface showcasing complex events and projects layout, allowing seamless browsing and intuitive previews of multimedia content and professional achievements.",
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
      "Visualization & Delivery tool turning survey data into interactive dashboards, charts, and tables for intuitive exploration and actionable insights.",
  },
  {
    title: "MVP Crypto Sentiment Analysis Platform",
    company: "CryptoEQ.io",
    desc: "Built the complete sentiment analysis dashboard and crypto comparison platform MVP for CryptoEQ.io, delivering a responsive interface across desktop, tablet, and mobile. Designed and developed the front end from the ground up, integrating real-time data visualization, sentiment scoring, and comparison tools to give users actionable market insights. This end-to-end build laid the foundation for CryptoEQ’s core product experience.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://cryptoeq.io/dashboard",
    // https://web.archive.org/web/20200411095039/https://cryptoeq.io/
    image: projectImgs.eq,
    caption:
      "End-to-end MVP dashboard using interactive charting and graphing tools to transform crypto market sentiment data into real-time visualizations and comparison features across desktop, tablet, and mobile.",
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
    title: "UX Design & Mobile App Prototyping",
    company: "Boba.me",
    desc: "Designed a mobile app MVP for Boba.me in Figma, creating an intuitive user experience for browsing, ordering, and customizing boba drinks. Developed interactive prototypes that demonstrate seamless navigation, clear visual hierarchy, and engaging UI elements, ready for testing and iteration.",
    interface: ["Mobile"],
    link: "https://www.figma.com/proto/AMOnS6XG44jBzlYOnIlU6j/BobaMe?node-id=1-3",
    image: projectImgs.boba,
    caption:
      "Interactive Figma prototype for a mobile boba app, demonstrating streamlined ordering, customization flows, and a playful, user-friendly interface.",
  },
  {
    title: "Custom Website for Therapy Practice",
    company: "Moonflamelove.com",
    desc: "Built and launched a responsive website for Moonflamelove.com, a private therapy practice. Developed the platform from scratch to reflect the practice’s values of accessibility, care, and trust, with an elegant design optimized for desktop, tablet, and mobile. The site integrates clear navigation, informative content, and a welcoming aesthetic, serving as both a professional presence and a resource hub for clients seeking mental health support.",
    interface: ["Desktop", "Tablet", "Mobile"],
    link: "https://moonflamelove.com/about",
    image: projectImgs.moonflame,
    caption:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  },
  {
    title: "IBM Templating Software",
    company: "GreenMountainEnergy.com",
    desc: "Co-developed IBM templating software for GreenMountainEnergy.com, creating responsive desktop and mobile interfaces. Midway through the project, I took over the work of a previous co-developer and completed the remaining development in record time. Designed templates that streamlined content management, ensured brand consistency, and improved workflow efficiency, delivering a scalable, high-performance solution ahead of schedule.",
    interface: ["Desktop", "Mobile"],
    link: "https://www.greenmountainenergy.com/",
    image: projectImgs.energy,
    caption:
      "Led and completed IBM templating software implementation, taking over mid-project to deliver responsive desktop and mobile templates that enhanced content management, brand consistency, and workflow efficiency.",
  },
  {
    title: "Enterprise Internal Systems Platform",
    company: "Coca-ColaCompany.com",
    desc: "Developed and optimized operations systems for Coca-ColaCompany.com, creating tools to streamline workflows, improve data management, and enhance operational efficiency. Built responsive, user-focused interfaces that supported cross-team collaboration and integrated complex business logic, delivering a reliable and scalable solution for internal stakeholders.",
    interface: ["Desktop"],
    image: projectImgs.cocacola,
    caption:
      "Custom internal desktop portal for Coca-Cola, designed to streamline workflows, improve data management, and enhance operational efficiency for cross-team collaboration.",
  },
  {
    title: "Marketing Site Redesign",
    company: "Tigerspace.digital",
    desc: "Led the full redesign of Tigerspace.digital’s marketing website across desktop, tablet, and mobile. Delivered a modern, responsive interface with improved user experience, accessibility, and visual consistency. Streamlined content presentation and interactive elements to better engage visitors, strengthen brand identity, and support conversion goals.",
    interface: ["Desktop", "Tablet", "Mobile"],
    image: projectImgs.tigerspace,
    caption:
      "Full-scale marketing website redesign with responsive design, improved UX, and interactive elements to enhance engagement and brand presentation across devices.",
  },
  {
    title: "Analytics Tracking, SEO, & Website Optimization",
    company: "Urbanfityoga.com",
    desc: "Implemented SEO improvements and optimized the Urbanfityoga.com website for desktop and mobile, enhancing search visibility, page performance, and user engagement. Conducted technical audits, refined content structure, and ensured responsive design to support both client acquisition and retention for the studio.",
    interface: ["Desktop", "Mobile"],
    // link: "https://www.urbanfityoga.com/classes-and-pricing.html",
    image: projectImgs.urbanfit,
    caption:
      "SEO and website optimization for Urbanfityoga.com, improving search visibility, site performance, and user experience across desktop and mobile.",
  },
];
