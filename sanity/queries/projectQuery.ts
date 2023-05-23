import { groq } from "next-sanity"

export const projectQuery = groq`*[_type == "project"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  "alt": image.alt,
  url,
  content
}`
