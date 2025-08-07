export default function Certificates() {
  return (
    <section id="certificates" className="min-h-screen  text-[#ffe6c7] py-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-5xl font-bold mb-8 text-center md:text-center">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#00202f] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#3a86ff]">Python for Everybody</h3>
            <p className="mt-1 text-lg">University of Michigan - Coursera</p>
            <p className="text-sm text-gray-400">Completed: Jan 2024</p>
          </div>
          <div className="bg-[#00202f] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#3a86ff]">Next.js & React Advanced</h3>
            <p className="mt-1 text-lg">Udemy</p>
            <p className="text-sm text-gray-400">Completed: Mar 2025</p>
          </div>
          {/* Add more certificates here */}
        </div>
      </div>
    </section>
  )
}
