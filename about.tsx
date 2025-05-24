import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I'm a 20-year-old cybersecurity student at GUtech, deeply interested in computer science, competitive programming, and digital security.
        </p>
        <p className="mb-4">
          Outside of that? I like reading, learning languages, and building games for fun. I’ve competed in OCPC and Regionals — landed 5th/7th officially.
        </p>
      </main>
    </>
  )
}
