import Navbar from "@/components/Navbar"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <p className="font-mono text-accent-blue text-sm mb-2"></p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">Resume</h1>

        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-blue/90 glow-blue transition-all duration-200"
          >
            Download PDF ↓
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text-secondary text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-accent-blue/40 hover:text-text-primary transition-all duration-200"
          >
            Open in new tab ↗
          </a>
        </div>

        {/* PDF viewer — hidden on very small screens, shown on sm+ */}
        <div className="hidden sm:block w-full bg-surface border border-border rounded-2xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-[80vh] min-h-[600px]"
            title="Utkarsh Rahim Resume"
          />
        </div>
        <p className="sm:hidden text-text-muted text-sm font-mono text-center mt-4">
          Download the PDF above to view it on your device.
        </p>
      </div>
    </main>
  )
}
