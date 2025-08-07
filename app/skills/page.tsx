import Particles from "../../portfolio-react/Particles"

export default function Skills() {
  return (
    <main className="min-h-screen  ">
      <section className="relative max-w-5xl mx-auto px-4 py-16 text-center overflow-hidden" id="skills">


        
        <h1 className="text-5xl font-bold mb-12">My Skills</h1>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Web Development */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Web Development</h2>
            <ul className="space-y-2 text-lg">
              <li className="bg-[#00202f] px-4 py-2 rounded">HTML</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">CSS</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">JavaScript</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">React</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">Next.js</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">Tailwind CSS</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Programming</h2>
            <ul className="space-y-2 text-lg">
              <li className="bg-[#00202f] px-4 py-2 rounded">Java</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">Python</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">C/C++</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">TypeScript</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Tools & Platforms</h2>
            <ul className="space-y-2 text-lg">
              <li className="bg-[#00202f] px-4 py-2 rounded">Git & GitHub</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">Node.js</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">MongoDB</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">Firebase</li>
              <li className="bg-[#00202f] px-4 py-2 rounded">VS Code</li>
            </ul>
          </div>
        </div>
        
      </section>
    </main>
  )
}
