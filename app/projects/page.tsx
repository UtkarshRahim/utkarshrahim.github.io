import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <div className="pt-24 pb-10">
        <ProjectsSection />
      </div>
    </main>
  )
}

