import { createClient, groq } from "next-sanity"
import { Project } from "@/types"

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "5m4fcoz2",
    dataset: "production",
    apiVersion: "2023-05-22",
  })
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}
