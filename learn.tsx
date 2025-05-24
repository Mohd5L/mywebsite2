import Navbar from '@/components/Navbar'

export default function Learn() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Learn</h1>
        <p className="mb-6">
          Notes and articles on computer science and programming — algorithms, data structures, and deep dives.
        </p>
        <ul className="list-disc pl-6">
          <li><a href="/learn/dp-intro" className="text-blue-600 hover:underline">Dynamic Programming Basics</a></li>
        </ul>
      </main>
    </>
  )
}
