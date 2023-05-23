import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string
  createdAt: Date
  name: string
  slug: string
  image: string
  alt: string
  url: string
  content: PortableTextBlock[]
}

export type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  content: PortableTextBlock[]
}
