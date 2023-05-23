import { getProject, getProjects } from "@/sanity/sanity.utils"

type ProjectProps = {
  params: { project: string }
}

export default async function Project({ params }: ProjectProps) {
  const slug = params.project
  const { name } = await getProject(slug)
  return <div>{name}</div>
}
