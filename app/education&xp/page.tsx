export default function EducationExperience() {
  return (
    <section id="education" className="min-h-screen  text-[#ffe6c7] py-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-5xl font-bold mb-8 text-center md:text-center">Education & Experiences</h2>
        
        {/* Education */}
        <div className="space-y-6">
          <div className="bg-[#00202f] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#3a86ff]">B.Tech in AI & ML</h3>
            <p className="mt-1 text-lg">Ramdeobaba College of Engineering, Nagpur</p>
            <p className="text-sm text-gray-400">2022 - 2026</p>
          </div>
        </div>

        {/* Experiences */}
        <div className="space-y-6">
          <div className="bg-[#00202f] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#3a86ff]">Freelance Web Developer & Content Creator</h3>
            <p className="mt-1 text-lg">Building web apps & sharing tech content online</p>
            <p className="text-sm text-gray-400">2023 - Present</p>
          </div>
          {/* Add more experiences here */}
        </div>
      </div>
    </section>
  )
}
