
"use client";
import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaDownload,FaWhatsapp} from "react-icons/fa";
import 'remixicon/fonts/remixicon.css';
import { useState,useEffect } from "react";



const Portfolio = () => {


  // Sidebar Menu Data.................................

  const [activeMenu, setActiveMenu] = useState("Portfolio"); // Default active menu

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const handleDownloadCV = () => {
    const cvUrl = "/cv/Gagan.pdf";                                   // Ensure correct path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Gagan_Kumar_Jaiswal_CV.pdf");                // Sets the correct download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
  
    handleDownloadCV()
    const audio = new Audio("/notificationsound.wav");
  
    // Ensure sound is loaded before playing
    audio.addEventListener("canplaythrough", () => {
      audio.play().catch((error) => {
        console.log("Autoplay blocked, waiting for user interaction:", error);
        
        // Play sound on first user interaction
        const playOnInteraction = () => {
          audio.play();
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("keydown", playOnInteraction);
        };
  
        document.addEventListener("click", playOnInteraction, { once: true });
        document.addEventListener("keydown", playOnInteraction, { once: true });
      });
    });
  
  }, []);
  
  return (
     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 to-blue-200">

    <div className="xl:w-10/12 w-11/12 mx-auto 2xl:pt-[12%] flex xl:flex-row flex-col gap-8 pb-8">
      {/* Profile Section */}
      <div className="bg-white pb-8 rounded-lg xl:sticky xl:top-[140px] px-8">
        <div className="relative 2xl:pb-[45%] flex justify-center">
          <div className="2xl:absolute 2xl:top-[-125px] 2xl:w-[75%] w-[250px]">
            <img
              alt="profile-pic"
              loading="lazy"
              className="2xl:mt-0 mt-8 mb-4 rounded-xl w-full h-auto"
              src="/images/profile.PNG"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold text-center">Gagan Kumar Jaiswal</h1>
          <p className="bg-gray-100 text-center px-4 py-2 rounded text-sm font-semibold">
            Full Stack Developer
          </p>
          <div>
          <a
    className="text-2xl block bg-gray-200 hover:bg-blue-600 duration-300 px-2 py-1 text-blue-700 rounded hover:text-white"
    href="https://www.linkedin.com/in/gagan-kumar-jaiswal-b904781a0"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="ri-linkedin-fill"></i>
  </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 rounded-lg p-4 mt-8">
          <ContactItem
            icon="ri-smartphone-line"
            label="Phone"
            value="+91 9131657486"
            color="text-rose-400"
          />
          <ContactItem
            icon="ri-archive-stack-line"
            label="Email"
            value="gagantechsunset@gmail.com"
            color="text-lime-700"
          />
          <ContactItem
            icon="ri-map-pin-2-line"
            label="Location"
            value="Indore, MadhyaPradesh | India"
            color="text-rose-700"
          />
          <ContactItem
            icon="ri-calendar-2-line"
            label="Birthday"
            value="April 18, 1990"
            color="text-purple-500"
          />
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center pt-6">
          <button
            onClick={handleDownloadCV}
           className="bg-blue-600 px-6 py-2 rounded text-white font-semibold text-lg hover:bg-gray-100 duration-300 hover:text-black border border-blue-600 hover:border-black">
            <i className="ri-import-line font-normal text-xl mr-2"></i>
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      {/* <div className="flex-1 bg-white rounded-lg">
        <div className="lg:p-16 p-6">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <img alt="line" className="w-40" src="/images/line.webp" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 py-8">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div> */}
       <div className="flex-1 bg-white rounded-lg p-6">
          {activeMenu === "Resume" && <Resume />}
          {activeMenu === "Portfolio" && <PortfolioContent />}
          {activeMenu === "Contact" && <Contact />}
        </div>

      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
      <a
          href="https://wa.me/919131657486"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp size={24} />
        </a>
    </div>
    <footer className="text-center py-4 bg-gray-100 text-gray-600 text-sm mt-10">
        © 2024 All Rights Reserved by Gagan.
      </footer>
    </div>
  );
};

// Contact Item Component
const ContactItem = ({ icon, label, value, color }) => (
  <div className="flex gap-3 items-center py-3 border-b">
    <button className={`bg-white text-3xl px-2 py-1 rounded shadow ${color} hover:bg-blue-500 hover:text-white duration-300 cursor-default`}>
      <i className={icon}></i>
    </button>
    <div>
      <label className="text-xs text-gray-600">{label}</label>
      <p className="text-sm text-gray-700">{value}</p>
    </div>
  </div>
);

// Portfolio Card Component
const PortfolioCard = ({ project }) => (
  <div
    className="flex flex-col pb-6 shadow-xl gap-3 items-center portfolio-box"
    // style={{ background: project.bg }}
    style={{ backgroundColor: project.bg }}        // Dynamic background color

  >
    <div className="overflow-hidden h-[300px] relative group">
      <img
        className="w-full object-cover group-hover:translate-y-[-60%] transition-transform duration-1000 ease-in-out"
        src={project.image}
        alt={project.title}
      />
    </div>
    <div className="w-9/12 mt-3 space-y-2">
      <p className="text-xs text-gray-500">Travel Landing , UX/UI</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-base uppercase block font-semibold text-gray-800 hover:text-blue-500 duration-300"
        href={project.url}
      >
        {project.title}
      </a>
    </div>
  </div>
);
const menuItems = [
  { name: "Resume", icon: "ri-article-line" },
  { name: "Portfolio", icon: "ri-suitcase-line" },
  { name: "Contact", icon: "ri-contacts-book-line" },
];

// Sidebar Component
const Sidebar = ({ activeMenu, handleMenuClick }) => (
  
  <div className="w-[150px] 2xl:block hidden">
    <div className="bg-white rounded-lg sticky top-[20px] flex flex-col gap-12 px-8 py-12">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleMenuClick(item.name)}
          className={`flex flex-col items-center py-4 duration-300 rounded-lg text-sm ${
            activeMenu === item.name ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          <i className={`${item.icon} text-2xl`}></i>
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  </div>
);
// Contact Component
const Contact = () => (
  <div className="flex-1">
  <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white w-full max-w-4xl p-6 rounded-xl shadow-lg">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          Contact
          <span className="ml-2 w-16 h-1 bg-blue-500 inline-block"></span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-6">
          I am always open to discussing product{" "}
          <strong className="font-bold">design work or partnerships.</strong>
        </p>

        {/* Form */}
        <form className="bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-gray-600 text-sm">
        © 2024 All Rights Reserved by Gagan Kumar Jaiswal.
      </footer>
    </div>
</div>
);

// Portfolio Content Component
const PortfolioContent = () => (
  <div className="flex-1 bg-white rounded-lg">
        <div className="lg:p-16 p-6">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <img alt="line" className="w-40" src="/images/line.webp" />
          </div>
  <div className="grid sm:grid-cols-2 gap-8 py-8">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          </div>
          </div>
);

// Resume Component
const Resume = () => (
  <div
      className="bg-[url('/images/resume/frame.png')] bg-center bg-no-repeat"
      style={{ backgroundSize: "100% 100%" }}
    >
      <div className="grid lg:grid-cols-2 gap-4 px-8 pt-12 lg:pt-0">
        {/* Profile Image */}
        <div className="lg:pt-16 flex lg:justify-start justify-center">
          <div
            className="bg-[#00BFC3] rounded-full pr-3 pl-6 pt-5 w-[250px] h-[250px]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.75) 6px 6px 5px 0px" }}
          >
            <img
              alt="profile"
              className="rounded-full rotate-[15deg]"
              src="/images/profile.png"
              style={{ color: "transparent" }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:pt-24 flex lg:justify-end justify-center items-start lg:pr-8">
          <div className="bg-[#FFDFDD] w-[300px] p-4 py-8 rounded-xl">
            <h1 className="text-[#027E84] text-2xl font-bold">Gagan Kumar Jaiswal</h1>
            <h2 className="font-semibold text-sm">Full Stack Developer</h2>
            <div className="pt-6">
              <h3 className="text-[#027E84] font-bold text-lg">Contact Me</h3>
              <ul className="space-y-2 pt-2 text-gray-500 text-sm">
                <li className="flex items-center gap-2">
                  <i className="ri-circle-fill text-[8px]"></i> +91 9131657486
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-circle-fill text-[8px]"></i> gagantechsunset@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-circle-fill text-[8px]"></i> Indore, MadhyaPradesh | India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience, About, Education */}
      <div className="grid lg:grid-cols-2 lg:px-16 px-8 py-16">
        <div className="lg:border-r-2 border-x-2 border-[#E1594F] space-y-8 px-4">
          <Section title="Work Experience" icon="ri-image-edit-fill">
            <h1 className="text-sm font-bold text-gray-700">Full Stack Developer (4+ Years)</h1>
            <h3 className="text-sm text-gray-500">Techsunset [2020-2024]</h3>
          </Section>

          <Section title="About Me" icon="ri-user-fill">
            <p className="text-sm text-gray-500 leading-relaxed">
              Full-Stack MERN Developer with expertise in JavaScript, React, Node.js,
              and MongoDB. Passionate about scalable web applications and backend optimization.
            </p>
          </Section>

          <Section title="Education" icon="ri-suitcase-fill">
            <EducationItem title="Technocrats Institute of Technology & Science" year="2008-2012" />
            <EducationItem title="Class XII" school="M.P. Board" year="2007-2008" />
          </Section>
        </div>

        {/* Skills, Projects */}
        <div className="border-x-2 lg:border-x-0 border-[#E1594F] space-y-8 px-4">
  <Section title="Skills" icon="ri-settings-2-line">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column - Backend & AWS */}
      <div className="space-y-6">
        <SkillList title="Backend Skills" skills={["NodeJS", "Express", "MongoDb", "NextJS", "AWS Cloud", "PostgreSQL", "Prisma"]} />
        <SkillList title="AWS Cloud Services" skills={[
          "EC2", "Route53", "ACM", "LAMBDA Serverless", 
          "Media Convert Video Processing", "Event Bridge", 
          "API Gateway", "Load Balancer", "Auto Scaling", "S3", 
          "CloudWatch", "CloudFront", "IAM", "RDS"
        ]} />
      </div>

      {/* Right Column - Frontend & Scalability */}
      <div className="space-y-6">
        <SkillList title="Frontend Skills" skills={[
          "JavaScript", "React", "NextJS", "Ant Design", 
          "Tailwind", "HTML", "CSS", "Bootstrap", "Redux"
        ]} />
        <SkillList title="Scalability & Robust" skills={[
          "Docker", "Redis", "Kafka", "Queue", "Git", 
          "Pub/Sub", "RabbitMQ", "gRPC"
        ]} />
      </div>
    </div>

    {/* Language Skill Below */}
    <SkillList title="Language Skills" skills={["English", "Hindi"]} />
  </Section>

  <Section title="Projects" icon="ri-file-code-line">
    <ProjectLink name="Superprof" url="https://www.superprof.co.in/" />
    <ProjectLink name="FishyKart" url="https://fishykart.in/" />
    <ProjectLink name="Winni" url="https://www.winni.in/" />
    <ProjectLink name="ABC Consultants" url="https://www.abcconsultants.in/" />
    <ProjectLink name="Dlife Interiors" url="https://dlifeinteriors.com/" />
    <ProjectLink name="Clove Dental" url="https://clovedental.in/" />
  </Section>
</div>

      </div>
    </div>
  );


const Section = ({ title, icon, children }) => (
  <div className="flex gap-3 pb-4 border-b-2 border-[#E1594F]">
    <div>
      <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
        <i className={icon}></i>
      </button>
    </div>
    <div className="w-full">
      <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold">
        {title}
      </button>
      <div className="pt-4">{children}</div>
    </div>
  </div>
);

const EducationItem = ({ title, school, year }) => (
  <div className="my-4">
    <h1 className="text-sm font-semibold flex items-center gap-1">
      <i className="ri-circle-fill text-[8px]"></i> {title}
    </h1>
    <p className="text-gray-400 text-xs flex justify-between pr-2">
      <span>{school}</span><span>[{year}]</span>
    </p>
  </div>
);

const SkillList = ({ title, skills }) => (
  <div className="mt-4">
    <h1 className="text-[#E1574D] font-bold text-sm">{title}</h1>
    <div className="pl-2 grid grid-cols-1 gap-1 mt-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex gap-3 items-center text-sm text-gray-400">
          <i className="ri-circle-fill text-[6px]"></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

const ProjectLink = ({ name, url }) => (
  <a href={url} target="_blank" className="text-gray-400 hover:text-blue-600 duration-300">
    <div className="flex gap-3 items-center">
      <i className="ri-folder-open-fill"></i> {name}
    </div>
  </a>
);



// Data for Portfolio Projects
const projects = [
  {
    id: 1,
    title: "SUPERPROF",
    image: "/images/superprof.co.in.png",
    url:"https://www.superprof.co.in/",
    bg:"rgb(255,244,244)"
  },
  {
    id: 2,
    title: "FISHYKART",
    image: "/images/fishykart.in.png",
    url:"https://fishykart.in/",
    bg:"rgb(238, 245, 250);"


  },
  {
    id: 3,
    title: "WINNI",
    image: "/images/winni.in.png",
    url:"https://www.winni.in/",
    bg:"rgb(238, 245, 250);"

  },
  {
    id: 4,
    title: "ABCONSULTANTS",
    image: "/images/abcconsultants.in.png",
    url:"https://www.abcconsultants.in/",
    bg:"rgb(255,244,244)"

  },
  {
    id: 5,
    title: "DLIFINTERIORS",
    image: "/images/dlifeinteriors.com.png",
    url:"https://dlifeinteriors.com/",
    bg:"rgb(255,244,244)"
  },
  {
    id: 6,
    title: "CLOVE DENTAL",
    image: "/images/clovedental.in.png",
    url:"https://clovedental.in/",
    bg:"rgb(238, 245, 250);"

  },
];



export default Portfolio;
