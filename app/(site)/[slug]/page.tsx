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
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={content} />
      </div>
    </div>
  )
}
