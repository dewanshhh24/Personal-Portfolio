'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      image: 'https://raw.githubusercontent.com/dewanshhh24/portfolio/main/IMG_20250329_201313.png',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/dewanshhh24/portfolio'
    },
    {
      title: 'Movie Recommender',
      image: 'https://via.placeholder.com/300x400?text=Movie+Recommender',
      tech: ['Python', 'Flask', 'ML'],
      github: 'https://github.com/dewanshhh24/movie-recommender'
    },
    {
      title: 'Nutrition AI',
      image: 'https://via.placeholder.com/300x400?text=Nutrition+AI',
      tech: ['React', 'Node', 'Express'],
      github: '#'
    },
    {
      title: 'Task Tracker',
      image: 'https://via.placeholder.com/300x400?text=Task+Tracker',
      tech: ['MongoDB', 'Express', 'React'],
      github: '#'
    },
    {
      title: 'Blog Platform',
      image: 'https://via.placeholder.com/300x400?text=Blog+Platform',
      tech: ['Next.js', 'GraphQL'],
      github: '#'
    },
  ]

  return (
    <section id='projects' className=" min-h-screen px-4 py-16  text-[#ffe6c7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center">My Projects</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="projectSwiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="flex flex-col">
              <div className="bg-[#00202f] border border-[#3a86ff40] rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-[#001827] mt-2 px-4 py-3 rounded-lg shadow border border-[#3a86ff40] flex flex-col items-center space-y-2">
                <h3 className="text-[#3a86ff] font-semibold text-lg text-center">{project.title}</h3>

                <div className="flex flex-wrap justify-center gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#00202f] px-2 py-1 rounded border border-[#3a86ff40]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                    alt="GitHub"
                    className="w-6 h-6 invert hover:scale-110 transition"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
