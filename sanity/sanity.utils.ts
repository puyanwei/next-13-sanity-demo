import { createClient, groq } from "next-sanity"
import { Project } from "@/types"
import { projectQuery } from "./queries/projectQuery"
import { studioConfig } from "./config/client-config"

export async function getProjects(): Promise<Project[]> {
  const client = createClient(studioConfig)
  return await client.fetch(projectQuery)
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(studioConfig)

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

  // TODO: Find a way of abstracting out the query above
}
