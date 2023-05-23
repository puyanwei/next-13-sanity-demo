import { createClient, groq } from "next-sanity"
import { Project } from "@/types"
import { projectQuery } from "./queries/projectQuery"

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "5m4fcoz2",
    dataset: "production",
    apiVersion: "2023-05-23",
  })

  return await client.fetch(projectQuery)
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "5m4fcoz2",
    dataset: "production",
    apiVersion: "2023-05-23",
  })

  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`,
    {
      slug,
    }
  )
}
