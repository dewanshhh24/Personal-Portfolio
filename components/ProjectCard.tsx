type Project = {
  title: string
  description: string
  tech: string[]
  link: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-2">{project.description}</p>
      <p className="mb-4 text-sm text-gray-600">
        Tech: {project.tech.join(', ')}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View on GitHub
      </a>
    </div>
  )
}
