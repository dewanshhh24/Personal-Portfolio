'use client'
import ProfileCard from "../portfolio-react/ProfileCard/ProfileCard"
import About from "./about/page"
import Skills from "./skills/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import Resume from "./resume/page"
import EducationExperience from "./education&xp/page"
import Certificates from "./certificates/page"
import ClickSpark from '../portfolio-react/click'
import Particles from "../portfolio-react/Particles"







export default function Home() {
  return (
    <main className=" text-[#ffe6c7] scroll-smooth ">
      <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>



 <section id="home" className="min-h-screen  p-4 flex items-center justify-center">
        <div className=" grid mb-20 grid-cols-3 grid-rows-[repeat(4,minmax(0,0.95fr))] md:grid-cols-4 md:grid-rows-[repeat(3,minmax(0,0.45fr))] gap-3 w-full max-w-6xl mt-20">

          {/* Box 1 */}
          <div className="
            bg-[#00202f] flex items-center justify-center 
            col-start-3 col-span-1 row-start-3 row-span-2
            md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1
            rounded-lg shadow-md h-full min-h-[120px] md:min-h-[150px] lg:min-h-[180px]
            text-white text-2xl font-bold
          ">

 {/* SOCIALS -----------------------------------------------------------------------------------------------------*/}

  <div className="  flex flex-col items-center justify-center  col-start-3 col-span-1 row-start-3 row-span-2 md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-2 min-h-[160px] md:min-h-[220px] w-full  text-white text-center text-xl md:text-2xl font-semibold rounded-lg shadow-md overflow-hidden space-y-1">
  <div className="grid md:grid-cols-2 gap-6  max-w-xs mx-auto md:mx-0">
  <a
    href="https://github.com/dewanshhh24"
    target="_blank"
    className="w-15 h-15 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition transform duration-300"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-6 h-6 invert" />
  </a>

  <a
    href="https://linkedin.com/in/dewansh-warjurkar"
    target="_blank"
    className="w-15 h-15 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition transform duration-300"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 invert" />
  </a>

  <a
    href="https://twitter.com/dewansh_w24"
    target="_blank"
    className="w-15 h-15 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition transform duration-300"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="w-6 h-6 invert" />
  </a>

  <a
    href="https://instagram.com/_dewanshhh"
    target="_blank"
    className="w-15 h-15 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition transform duration-300"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-6 h-6 invert" />
  </a>
</div>

</div>


{/* SOCIALS ------------------------------------------------------------------------------------------------------------*/}


          </div>

          {/* Box 2 */}
          <div className="
  bg-[#00202f] flex flex-col items-center justify-center 
  col-start-1 col-span-2 row-start-1 row-span-2
  md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2
  min-h-[160px] md:min-h-[220px]
  rounded-lg shadow-md text-center px-4
">
  <h1 className="text-[#ffe6c7] text-left text-2xl md:text-5xl sm:9xl font-light">
    Hello, I’m <span className="text-4xl font-extrabold text-[#3a86ff] md:text-6xl">Dewansh Warjurkar</span>
  </h1>
  <p className="text-[#ffe6c7] brightness-90  text-left text-xs md:text-lg pt-10 tracking-wide">
    I’m a Tech enthusiast and passionate about Web Development and Machine Learning, I enjoy building projects using React, Next.js, Node, and Python. I’m constantly working on improving my skills in DSA (Java) and exploring technologies in Blockchain and Django to grow as a developer.</p>
</div>


          {/* Box 3 */}
<div className="
  bg-[#00202f] flex items-center justify-center 
  col-start-3 col-span-1 row-start-1 row-span-1
  md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-2
  min-h-[140px] md:min-h-[200px]
  rounded-lg shadow-md overflow-hidden
">
  <img 
    src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/profile-headshot.jpg"
    alt="Dewansh Warjurkar"
    className="w-full h-full object-cover"
  />
</div>


          {/* Box 4 */}
          <div className="
  bg-[#00202f] flex flex-col items-center justify-center 
  col-start-1 col-span-2 row-start-3 row-span-1
  md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-1
  rounded-lg shadow-md h-full min-h-[140px] md:min-h-[180px]
  text-[#ffe6c7] px-4 space-y-3
">
  <h3 className="text-[0.8rem] md:text-xl text-center font-semibold">🎓 Shri Ramdeobaba College of Engineering and Management</h3>
  
  <div className="flex text-white text-sm brightness-90 items-center justify-start md:justify-start space-x-1">
              <img src="https://unpkg.com/feather-icons/dist/icons/map-pin.svg" className=" invert w-3 h-3 md:w-5 md:h-5" alt="phone" />
              <span className="text-md md:text-sm">Nagpur, India</span>
            </div>
  <a 
    href="/resume.pdf" 
    download
    className="mt-2 inline-block w-25 h-10 text-md text-center  bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700  transition duration-300"
  >
    Résumé
  </a>
</div>


          {/* Box 5 */}
  <div className="
  bg-[#00202f] flex flex-col items-center justify-center 
  col-start-3 col-span-1 row-start-2 row-span-1
  md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1
  min-h-[120px] md:min-h-[180px]
  text-[#ffe6c7] text-sm md:text-lg font-medium rounded-lg shadow-md p-4 space-y-3
">

  {/* Heading (visible on all screens) */}
  <h3 className="text-sm md:text-xl font-semibold mb-2 text-left">
    My <span className="text-[#3a86ff] font-extrabold text-lg md:text-2xl">Hobbies☄️</span>
  </h3>

  {/* Mobile View: Simple List */}
  <ul className="block md:hidden text-xs space-y-1 text-center">
    <li>📸 Photog</li>
    <li>✈️ Travel</li>
    <li>✂️ Editing</li>
    <li>⚽ Sports</li>
  </ul>

  {/* Desktop View: Boxed 2x2 Grid */}
  <ul className="hidden md:grid grid-cols-2 gap-3 text-[1rem]  w-full text-center">
    {["Photography", "Travel", "Editing", "Sports"].map((hobby, index) => (
      <li
        key={index}
        className="w-full h-12 bg-[#001827] border border-[#3a86ff40] rounded-lg 
                   flex items-center justify-center hover:scale-105 
                   hover:border-[#3a86ff] transition transform duration-300"
      >
        {hobby}
      </li>
    ))}
  </ul>
</div>






          {/* Box 6 */}
          <div className="
  bg-[#00202f] flex flex-col items-center justify-center
  col-start-1 col-span-2 row-start-4 row-span-1 
  md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-2
  min-h-[160px] md:min-h-[220px] h-full 
  text-white text-center text-xl md:text-2xl font-semibold rounded-lg shadow-md
  overflow-hidden space-y-2">
  <p className="text-[#ffe6c7] text-md md:text-2xl">I am a <span className="text-[#3a86ff]">Content Creator</span></p>  
  <p className="text-gray-300 text-xs md:text-sm">I post Photographs and Video Edits.</p>
  <img 
    src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/IMG_20250329_201313.png" 
    alt="Dewansh Profile"
    className="w-15 h-15 md:w-40 md:h-40 rounded-full object-cover"
  />
  <a 
    href="https://instagram.com/cinnnamo_roll" 
    target="_blank" 
    className="text-[#3a86ff] text- text-sm md:text-xl hover:text-[#ffe6c7] transition duration-300"
  >
    @cinnnamo_roll
  </a>
</div>





        </div>
      </section>




      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />

        
</ClickSpark>
    </main>
  )
}
