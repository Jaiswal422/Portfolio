// import Layout from "../component/Layout";
"use client";
import { FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaDownload,FaWhatsapp} from "react-icons/fa";
import { useState,useEffect } from "react";

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

export default function Home() {
  const handleDownloadCV = () => {
    const cvUrl = "/cv/Gagan.pdf";                                   // Ensure correct path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Gagan_Kumar_Jaiswal_CV.pdf");                // Sets the correct download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const [activeSection, setActiveSection] = useState("Portfolio"); // Default portfolio

// For whatsapp Nptifications purpose:------------------>


// useEffect(() => {
//   const audio = new Audio("/notificationsound.wav"); // Ensure the file is in the public folder
//   audio.play().catch((error) => console.error("Error playing sound:", error));
// }, []);
// useEffect(() => {
//   const audio = new Audio("/notificationsound.wav");

//   // Try playing the sound after a short delay
//   setTimeout(() => {
//     audio.play().catch((error) => {
//       console.log("Autoplay failed, waiting for user interaction:", error);
//       // Fallback: Play sound on first user interaction
//       document.addEventListener("click", () => {
//         audio.play();
//       }, { once: true });
//     });
//   }, 1000); // Small delay to improve success rate

// }, []);


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
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="flex justify-center mt-20 mb-36  from-purple-100 to-blue-200 p-6">
      <aside className="w-96 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center relative">
        
        {/* Profile Image - Square & Half Outside */}
        <div className="absolute -top-20">
          <img
            src="/images/profile.PNG"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-lg border-4 border-white shadow-md"
          />
        </div>

        {/* Space for Image */}
        <div className="h-16"></div>

        {/* Name & Title */}
        <h2 className="text-2xl font-bold mt-20">Gagan Kumar Jaiswal</h2>
        <p className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-md mt-1 text-sm">
          Full Stack Developer
        </p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/gagan-kumar-jaiswal-b904781a0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition flex items-center justify-center w-10 h-10"
        >
          <FaLinkedin size={20} />
        </a>

        {/* Contact Info Card */}
        <div className="mt-6 w-full bg-gray-100 p-4 rounded-xl text-left shadow-md space-y-3">
  <div className="flex items-center gap-3">
    <span className="p-2 bg-pink-100 text-pink-500 rounded-lg">
      <FaPhone size={30} />
    </span>
    <div>
      <p className="text-sm text-gray-500">Phone</p>
      <p className="text-md font-medium">+91 9131657486</p>
    </div>
  </div>

  <hr className="border-gray-300" />

  <div className="flex items-center gap-3">
    <span className="p-2 bg-green-100 text-green-500 rounded-lg">
      <FaEnvelope size={30} />
    </span>
    <div>
      <p className="text-sm text-gray-500">Email</p>
      <p className="text-md font-medium">gagantechsunset@gmail.com</p>
    </div>
  </div>

  <hr className="border-gray-300" />

  <div className="flex items-center gap-3">
    <span className="p-2 bg-red-100 text-red-500 rounded-lg">
      <FaMapMarkerAlt size={30} />
    </span>
    <div>
      <p className="text-sm text-gray-500">Location</p>
      <p className="text-md font-medium">Indore, Madhya Pradesh | India</p>
    </div>
  </div>

  <hr className="border-gray-300" />

  <div className="flex items-center gap-3">
    <span className="p-2 bg-purple-100 text-purple-500 rounded-lg">
      <FaBirthdayCake size={30} />
    </span>
    <div>
      <p className="text-sm text-gray-500">Birthday</p>
      <p className="text-md font-medium">April 18, 1990</p>
    </div>
  </div>
</div>


        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
        >
          <FaDownload /> Download CV
        </button>
      </aside>
    </div>

        {/* Main Content */}
        {activeSection==="Portfolio"&&
        <main className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-6 border-b-4 border-blue-600 inline-block">
            Portfolio
          </h1>
          <div className="bg-gray-100 min-h-screen p-8">
      {/* Title */}
     

      {/* Portfolio Grid */}
   {/* Portfolio Grid */}
   <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
  {projects.map((project) => (
    <div
      key={project.id}
      className="relative group p-4 rounded-xl shadow-xl overflow-hidden"
      style={{ backgroundColor: project.bg }} // Dynamic background color

    >
      {/* Image Wrapper */}
      <div className="h-48 w-full overflow-hidden rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-top transition-transform duration-700 ease-in-out group-hover:-translate-y-[50%]"
        />
      </div>

      {/* Overlay on Hover */}
      

      {/* Project Details */}
      <a href={project.url} target="_blank" className="hover:text-blue-500 cursor-pointer">
  <h2 className="text-lg font-semibold mt-4">{project.title}</h2>
</a>

      <p className="text-gray-600">Travel Landing, UX/UI</p>
    </div>
  ))}
</div>



    </div>
        </main>}
        {activeSection==="Resume"&&
        <main className="flex-1 p-4">
    
    <div className="min-h-screen bg-teal-800 flex justify-center items-center p-10">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-6xl p-10 relative">
        {/* Profile Section */}
        <div className="absolute top-6 right-6 bg-pink-100 p-4 rounded-xl shadow-md w-64">
          <h2 className="text-xl font-bold text-teal-500">Gagan Kumar Jaiswal</h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <p className="text-teal-500">Contact me</p>
          <div className="mt-3 text-sm text-gray-500">
            <p className="text-gray-500"><span>.</span> +91 9131657486</p>
            <p className="text-gray-500"><span>.</span> gagantechnsunset@gmail.com</p>
            <p className="text-gray-500"><span>.</span> Indore, MadhyaPradesh | India</p>
          </div>
        </div>
        {/* Profile Image */}
        <div className="absolute top-6 left-6">
          <img
            src="/images/profile.PNG"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-teal-500"
          />
        </div>
        {/* Main Resume Content */}
        <div className="mt-52 grid grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <div className="bg-red-100 p-4 rounded-lg shadow">
              <h3 className="text-red-600 font-bold text-lg mb-2 flex items-center">💼 Work Experience</h3>
              <p className="font-semibold">Full Stack Developer (4+ Years)</p>
              <p className="text-sm text-gray-600">Techsunset (2024 - 2025)</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow mt-4">
              <h3 className="text-red-600 font-bold text-lg mb-2 flex items-center">👤 About Me</h3>
              <p className="text-sm text-gray-700">
                Full-Stack MERN Developer with experience in JavaScript, React, Node.js, and MongoDB. Expertise in designing scalable web applications.
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow mt-4">
              <h3 className="text-red-600 font-bold text-lg mb-2 flex items-center">🎓 Education</h3>
              <p className="font-semibold">Technocrats Institute of Technology & Science</p>
              <p className="text-sm text-gray-600">Bachelor of Engineering (2008 - 2012)</p>
              <p className="font-semibold mt-2">Class XII</p>
              <p className="text-sm text-gray-600">M.P. Board (2007 - 2008)</p>
            </div>
          </div>
          {/* Right Column */}
          <div>
            <div className="bg-red-100 p-4 rounded-lg shadow">
              <h3 className="text-red-600 font-bold text-lg mb-2 flex items-center">🎯 Skills</h3>
              <p className="font-semibold">Expertise Skill</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>AWS Cloud</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>Redis</li>
              </ul>
              <p className="font-semibold mt-3">Language Skill</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow mt-4">
              <h3 className="text-red-600 font-bold text-lg mb-2 flex items-center">🚀 Projects</h3>
              <p className="font-semibold">Top Projects</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Superprof</li>
                <li>FishyKart</li>
                <li>Winli</li>
                <li>ABC Consultants</li>
                <li>Dlife Interiors</li>
                <li>Clove Dental</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 

        </main>}
        {activeSection==="Contact"&&
        <main className="flex-1 p-4">
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
        </main>}
 <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex flex-col space-y-4">
 {["Resume", "Portfolio", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-lg text-lg transition ${
                activeSection === section
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {section}
            </button>
          ))}
      </nav>
      <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Sidebar Navigation */}
     {/* Sidebar Navigation - Right Side */}
    

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-gray-600 text-sm mt-10">
        © 2024 All Rights Reserved by Gagan.
      </footer>
    </div>
  );
}
