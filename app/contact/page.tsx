export default function Contact() {
  return (
    <section id="contact" className="min-h-screen  text-[#ffe6c7] flex items-center justify-center py-16 px-6">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-12">
        
        {/* Text + form */}
        <div className="flex-1 space-y-6 text-left md:text-left">
          <h2 className="text-6xl font-bold">Let’s create something together</h2>
          <p className="text-gray-300 text-lg">
            Whether it’s about a project or just to connect,  
            I’m always up for a good conversation. Drop me a message anytime.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-lg">
            <div className="flex items-center justify-start md:justify-start space-x-3">
              <img src="https://unpkg.com/feather-icons/dist/icons/mail.svg" className="invert w-5 h-5" alt="mail" />
              <span>dewanshwarjurkar@gmail.com</span>
            </div>
            <div className="flex items-center justify-start md:justify-start space-x-3">
              <img src="https://unpkg.com/feather-icons/dist/icons/phone.svg" className=" invert w-5 h-5" alt="phone" />
              <span>+91 8010728200</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-start space-x-4 mt-6">
            <a href="https://github.com/dewanshhh24" target="_blank" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-5 h-5 invert" />
            </a>
            <a href="https://linkedin.com/in/dewansh-warjurkar" target="_blank" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert" />
            </a>
            <a href="https://twitter.com/dewansh_w24" target="_blank" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="w-5 h-5 invert" />
            </a>
            <a href="https://instagram.com/_dewanshhh" target="_blank" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-5 h-5 invert" />
            </a>
          </div>

          {/* Contact Form */}
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded bg-[#00202f] border border-[#3a86ff] focus:outline-none" />
            <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded bg-[#00202f] border border-[#3a86ff] focus:outline-none" />
            <input type="text" placeholder="Your subject" className="w-full px-4 py-3 rounded bg-[#00202f] border border-[#3a86ff] focus:outline-none" />
            <textarea placeholder="Your message" rows={4} className="w-full px-4 py-3 rounded bg-[#00202f] border border-[#3a86ff] focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-[#00202f] text-[#ffe6c7] py-3 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>

        {/* Image on the right */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="https://raw.githubusercontent.com/dewanshhh24/portfolio/main/resume-illustration.png"
            alt="Contact Illustration"
            className="w-full max-w-md animate-[levitate_3s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  )
}
