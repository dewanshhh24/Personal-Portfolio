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
    <main className=" text-[#ffe6c7] scroll-smooth">
      <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>



      <section id="home" className="min-h-screen p-10 flex items-center justify-center">
  <div className="
    grid mb-12 
    grid-cols-3 grid-rows-[repeat(4,minmax(0,1fr))] 
    md:grid-cols-4 md:grid-rows-[repeat(3,minmax(0,0.35fr))] 
    gap-2 w-full max-w-6xl mt-16">

    {/* Box 1 */}
    <div className="
  bg-[#00202f] flex items-center justify-center 
  col-start-3 col-span-1 row-start-3 row-span-2
  md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1
  rounded-lg shadow-md h-full min-h-[80px] md:min-h-[100px] 
  text-white text-lg font-semibold
">
  <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">

    {/* Text: horizontal on mobile, rotated on md+ */}
    <div className="text-[#ffe6c7] text-sm md:text-2xl font-bold tracking-wider 
                    w-full md:w-auto text-center md:text-left md:-rotate-90">
      Socials
    </div>

    {/* Your existing social icons */}
    <div className="
      flex flex-col items-center justify-center 
      min-h-[100px] md:min-h-[130px] 
      text-white text-center text-base md:text-lg font-semibold 
      rounded-lg shadow-md overflow-hidden space-y-1
    ">
      <div className=" gap-3 max-w-xs mx-auto md:grid grid-cols-2">
        <a href="https://github.com/dewanshhh24" target="_blank" className="w-13 h-13 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition duration-300">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-4 h-4 invert" />
        </a>
        <a href="https://linkedin.com/in/dewansh-warjurkar" target="_blank" className="w-13 h-13 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition duration-300">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4 invert" />
        </a>
        <a href="https://twitter.com/dewansh_w24" target="_blank" className="w-13 h-13 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition duration-300">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="w-4 h-4 invert" />
        </a>
        <a href="https://instagram.com/_dewanshhh" target="_blank" className="w-13 h-13 bg-[#001827] border border-[#3a86ff40] rounded-lg flex items-center justify-center hover:scale-105 hover:border-[#3a86ff] transition duration-300">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-4 h-4 invert" />
        </a>
      </div>
    </div>

  </div>
</div>


    {/* Box 2 */}
    <div className="
      bg-[#00202f] flex flex-col items-center justify-center 
      col-start-1 col-span-2 row-start-1 row-span-2
      md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2
      min-h-[100px] md:min-h-[140px] 
      rounded-lg shadow-md text-center px-3
    ">
      <h1 className="text-[#ffe6c7] text-left text-lg md:text-5xl  font-light">
        Hello, I’m <span className="font-extrabold text-[#3a86ff] text-6xl">Dewansh Warjurkar</span>
      </h1>
      <p className="text-[#ffe6c7] brightness-90 text-left text-xs md:text-md pt-4 text-[15px] tracking-wide">
        Tech enthusiast into Web Development & ML. Love React, Next, Node, Python, DSA, exploring Blockchain & Django.
      </p>
    </div>

    {/* Box 3 */}
    <div className="
      bg-[#00202f] flex items-center justify-center 
      col-start-3 col-span-1 row-start-1 row-span-1
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-2
      min-h-[90px] md:min-h-[120px]
      rounded-lg shadow-md overflow-hidden
    ">
      <img src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/profile-headshot.jpg" alt="Dewansh" className="w-full h-full object-cover" />
    </div>

    {/* Box 4 */}
    <div className="
      bg-[#00202f] flex flex-col items-center justify-center 
      col-start-1 col-span-2 row-start-3 row-span-1
      md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-1
      rounded-lg shadow-md h-full min-h-[90px] md:min-h-[120px]
      text-[#ffe6c7] px-3 space-y-0.5 overflow-hidden
    ">
      <h3 className="text-xs md:text-lg text-center font-semibold">
        🎓 Shri Ramdeobaba College of Engineering and Management, Nagpur
      </h3>
      <div className="flex flex-row  ">
        <div className="flex text-white text-[15px] brightness-90 items-center space-x-1 mr-10">
        <img src="https://unpkg.com/feather-icons/dist/icons/map-pin.svg" className="invert w-6 h-6" alt="location" />
        <span>Nagpur, India</span>
      </div>
      <a href="/resume.pdf" download className="mt-1 inline-block w-24 h-8 pt-1 text-[16px]  text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Résumé
      </a>
      </div>
    </div>

    {/* Box 5 */}
    <div className="
      bg-[#00202f] flex flex-col items-center justify-center 
      col-start-3 col-span-1 row-start-2 row-span-1
      md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1
      min-h-[80px] md:min-h-[100px]
      text-[#ffe6c7] text-[10px] md:text-xs font-medium rounded-lg shadow-md p-2 space-y-0.5
    ">
      <h3 className="text-xs md:text-xl font-semibold mb-2">
        My <span className="text-[#3a86ff]  font-extrabold md:text-2xl">Hobbies☄️</span>
      </h3>
      <ul className="grid grid-cols-2 gap-2 text-[13.5px] w-full text-center">
  <li className="bg-[#001827] border border-[#3a86ff40] rounded p-2">📸 Photography</li>
  <li className="bg-[#001827] border border-[#3a86ff40] rounded p-2">✈️ Travel</li>
  <li className="bg-[#001827] border border-[#3a86ff40] rounded p-2">💻 Editing</li>
  <li className="bg-[#001827] border border-[#3a86ff40] rounded p-2">🏏 Sports</li>
</ul>

    </div>

    {/* Box 6 */}
    <div className="
      bg-[#00202f] flex flex-col items-center justify-center
      col-start-1 col-span-2 row-start-4 row-span-1 
      md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-2
      min-h-[100px] md:min-h-[130px] h-full 
      text-white text-center text-sm md:text-base font-semibold rounded-lg shadow-md
      overflow-hidden space-y-1
    ">
      <p className="text-[#ffe6c7] text-[10px] md:text-lg">I am a <span className="text-[#3a86ff] text-2xl">Content Creator</span></p>  
      <p className="text-gray-300 text-[9px] md:text-sm">I post Photographs & Edits.</p>
      <img src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/IMG_20250329_201313.png" alt="Profile" className="w-13 h-13 md:w-32 md:h-32 m-3 rounded-full object-cover" />
      <a href="https://instagram.com/cinnnamo_roll" target="_blank" className="bg-[#001827] text-[#3a86ff] border border-[#3a86ff40] rounded pl-4 pr-4 pt-2 pb-2">
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
