import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemas } from "./sanity/schema"

export const config = defineConfig({
  projectId: "5m4fcoz2",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2021-10-21",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})
