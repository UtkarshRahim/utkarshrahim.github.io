import Navbar from "../../components/Navbar"

export default function Resume() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="text-center p-16">

        <h1 className="text-4xl font-bold mb-6">
          Resume
        </h1>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Download Resume
        </a>

        <div className="mt-10">

          <iframe
            src="/resume.pdf"
            className="w-full h-[800px]"
          />

        </div>

      </div>

    </main>
  )
}
