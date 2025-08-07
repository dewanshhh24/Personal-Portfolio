import Particles from "../../portfolio-react/Particles"; // adjust the path as per your structure

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative min-h-screen px-4 py-16  flex items-center justify-center overflow-hidden"
    >
     
      

      {/* MAIN CONTENT LAYER */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        
        {/* LEFT SIDE: TEXT BOX, BUTTON */}
        <div className="flex-1">
          <h2 className="text-6xl ml-0 md:ml-20 font-semibold mb-6">Résumé</h2>
          
          <p className="text-gray-300 mb-6 ml-0 md:ml-20 max-w-md">
            Here’s a glimpse of my journey, skills, and experiences.
            Download my resume to explore how I can contribute to your next project or team.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block ml-0 md:ml-20 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Résumé
          </a>
        </div>

        {/* RIGHT SIDE: ILLUSTRATION */}
        <div className="flex-2">
          <img
  src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/Profile%20data-amico.svg"
  alt="Resume Illustration"
  className="w-full h-100 md:h-120 max-w-md mx-auto animate-[levitate_3s_ease-in-out_infinite]"
/>

        </div>
      </div>
    </section>
  );
}
