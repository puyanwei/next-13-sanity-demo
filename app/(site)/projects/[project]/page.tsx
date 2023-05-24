"use client"

import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { getProject } from "@/sanity/sanity.utils"

type ProjectProps = {
  params: { project: string }
}

export default async function Project(props: ProjectProps) {
  const slug = props?.params.project
  if (!slug) return <div>Loading... </div>

  const { name, url, content, alt, image } = await getProject(slug)
  return (
    <div className="m-4">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text drop-shadow">
          {name}
        </h1>
        <a
          href={url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 font-bold text-gray-500 transition bg-gray-100 rounded-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100"
        >
          View Project
        </a>
      </header>

      <div className="mt-5 text-lg text-gray-700">
        <PortableText value={content} />
      </div>

      <Image
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="object-cover mt-10 border-2 border-gray-700 rounded-xl"
      />
    </div>
  )
}
