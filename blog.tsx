import Navbar from '@/components/Navbar'

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="mb-6">Thoughts, reflections, and whatever I feel like writing about.</p>
        <ul className="list-disc pl-6">
          <li><a href="/blog/hello-world" className="text-blue-600 hover:underline">Hello World: My First Blog Post</a></li>
        </ul>
      </main>
    </>
  )
}
