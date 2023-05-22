import { getProjects } from "@/sanity/sanity.utils"
import { Project } from "@/types"

export default async function Home() {
  const projects: Project[] = await getProjects()
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  )
}
