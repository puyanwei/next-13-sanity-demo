import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemas } from "./sanity/schema"
import { visionTool } from "@sanity/vision"
import { projectId, apiVersion, dataset } from "./sanity/sanity.client"

if (!projectId || !dataset) {
  throw new Error("Missing projectId or dataset")
}

export const config = defineConfig({
  projectId,
  dataset,
  title: "My Personal Website",
  apiVersion,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
})
