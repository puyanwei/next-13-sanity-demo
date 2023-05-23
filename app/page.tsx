import Image from "next/image"
import { getProjects } from "@/sanity/sanity.utils"
import { Project } from "@/types"
import Link from "next/link"

export default async function Home() {
  const projects: Project[] = await getProjects()
  console.log(projects)
  return (
    <div className="max-w-5xl mx-auto py-20 px-16">
      <h1 className="text-7xl font-extrabold">List of Projects</h1>
      <h2 className="mt-3 text-xl text-gray-300">These are my projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ _id, name, image, alt, slug }) => (
          <Link
            className="border-2 border-gray-600 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            key={_id}
            href={`/projects/${slug}`}
          >
            <h3 className="text-semibold text-2xl text-center p-4">{name}</h3>
            {image && (
              <Image
                className="object-cover rounded-lg border-border-gray-500"
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
