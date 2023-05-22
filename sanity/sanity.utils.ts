import { createClient, groq } from "next-sanity"
import { Project } from "@/types"
import { projectQuery } from "./queries/projectQuery"

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "5m4fcoz2",
    dataset: "production",
    apiVersion: "2021-10-21",
  })

  return await client.fetch(projectQuery)
}
