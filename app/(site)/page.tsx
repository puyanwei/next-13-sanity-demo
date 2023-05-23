import Image from "next/image"
import { getProjects } from "@/sanity/sanity.utils"
import { Project } from "@/types"
import Link from "next/link"

export default async function Home() {
  const projects: Project[] = await getProjects()
  return (
    <div className="max-w-5xl px-16 py-20 mx-auto">
      <h1 className="font-extrabold text-7xl">List of Projects</h1>
      <h2 className="mt-3 text-xl text-gray-300">These are my projects</h2>
      <div className="grid gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ _id, name, image, alt, slug }) => (
          <Link
            className="p-1 transition border-2 border-gray-600 rounded-lg hover:scale-105 hover:border-blue-500"
            key={_id}
            href={`/projects/${slug}`}
          >
            <h3 className="p-4 text-2xl text-center text-semibold">{name}</h3>
            {image && (
              <Image
                className="object-cover mx-auto rounded-lg border-border-gray-500"
                src={image}
                alt={alt}
                width={250}
                height={100}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
