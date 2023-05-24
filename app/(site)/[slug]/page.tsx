"use client"

import { getPage } from "@/sanity/sanity.utils"
import { PortableText } from "@portabletext/react"

type PageProps = {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  const { title, content } = await getPage(params.slug)
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text drop-shadow">
        {title}
      </h1>
      <div className="mt-10 text-lg text-gray-700">
        <PortableText value={content} />
      </div>
    </div>
  )
}
