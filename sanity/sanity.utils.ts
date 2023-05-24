import { groq } from "next-sanity"
import { Page, Project } from "@/types"
import { projectQuery } from "./queries/projectQuery"
import { client } from "./sanity.client"

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(projectQuery)
}

export async function getProject(slug: string): Promise<Project> {
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
export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}
