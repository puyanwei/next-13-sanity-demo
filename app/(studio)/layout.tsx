import "../globals.css"

export const metadata = {
  title: "Sanity Studio",
  description: "Sanity Studio CMS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
