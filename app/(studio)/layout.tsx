import ".././globals.css"

export const metadata = {
  title: "Sanity Studio",
  description: "Sanity Studio CMS",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <main className="py-20">{children}</main>
    </html>
  )
}
