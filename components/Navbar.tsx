"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">

      <h1 className="text-xl font-bold">Utkarsh Rahim</h1>

      <div className="flex gap-6 text-gray-300">

        <Link href="/">Home</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/resume">Resume</Link>
<Link href="/wildlife">Photography</Link>
      </div>
    </nav>
  )
}
