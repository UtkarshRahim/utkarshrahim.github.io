import Navbar from "@/components/Navbar"
import WildlifeGallery from "@/components/WildlifeGallery"

export default function WildlifePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-accent-blue text-sm mb-2"></p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Wildlife Gallery</h1>
        <p className="text-text-secondary text-sm font-mono mb-10">
          Frames from the wild — captured across India.
        </p>
        <WildlifeGallery />
      </div>
    </main>
  )
}
