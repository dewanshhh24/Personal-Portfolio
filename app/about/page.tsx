import ProfileCard from "../../portfolio-react/ProfileCard/ProfileCard"

export default function About() {
  return (
    <section id="about" className="  min-h-screen bg-[# 000d1b] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-left md:text-left">
            <h2 className="text-6xl font-semibold mb-6">About Me</h2>
            <p className="text-md pt-5 text-gray-100 leading-relaxed  ">
          
        I am Dewansh Warjurkar, a tech enthusiast with a strong passion for web development,
        machine learning, and building meaningful digital experiences. I love
        exploring how technology can be used to solve real-world problems and make
        life a little easier — or just more interesting.
      </p>

<p className="text-md pt-5 text-gray-100 leading-relaxed ">
          Most of my work revolves around crafting responsive, dynamic web applications
        using React, Next.js, and other modern tools. I also enjoy diving into backend
        development with Node and MongoDB, connecting all the pieces to build full-stack
        solutions that actually work well and feel good to use.
      </p>

<p className="text-md pt-5 text-gray-100 leading-relaxed ">
          Alongside web development, I’m fascinated by the world of AI and data. I spend a
        lot of time improving my DSA skills in Java and experimenting with Python to explore
        machine learning models and understand how data can drive smarter applications.
      </p>

<p className="text-md pt-5 text-gray-100 leading-relaxed ">
          Outside of tech, photography is something I genuinely enjoy. There’s something about
        capturing a fleeting moment and turning it into a story that really resonates with me.
        It keeps my creativity alive and gives me a fresh perspective when I return to coding.
      </p>

<p className="text-md pt-5 text-gray-100 leading-relaxed ">
          I’m always looking to learn, grow, and take on new challenges — whether it’s
        collaborating on projects, picking up a new framework, or just brainstorming ideas
        that could turn into the next big thing. I’d love to connect and explore how we can
        build something amazing together!
      </p>

            
          </div>
          <div className="flex-shrink-0 mt-10">
            <ProfileCard
              name="Dewansh Warjurkar"
              title="AIML Student"
              handle="dewanshhh24"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://github.com/dewanshhh24/portfolio/raw/main/mainfinalavatar.jpg"
              miniAvatarUrl="https://avatars.githubusercontent.com/u/163340981?s=400&u=d0177588b3f69a45542156cf79387a389851cc00&v=4"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </section>
  )
}
