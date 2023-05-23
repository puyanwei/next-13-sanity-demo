import { Image, PortableTextBlock } from "sanity"

export type Project = {
  _id: string
  createdAt: Date
  name: string
  slug: string
  image: string
  alt: string
  content: PortableTextBlock[]
}
