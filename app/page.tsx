"use client"

import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import ProfileBadge from "../components/ProfileBadge"


export default function Home() {

return (

<main className="min-h-screen bg-black text-white">

<Navbar/>
<ProfileBadge />

<section className="max-w-4xl mx-auto p-16">

<h1 className="text-5xl font-bold mb-6">
Utkarsh Rahim
</h1>

<p className="text-gray-300 text-lg leading-relaxed">

Technical Lead | Full-Stack Engineer with 7+ years of experience in designing,
developing, and deploying scalable web applications.

Skilled in JavaScript, Angular, React, Node.js, MongoDB, Docker,
and Kubernetes, with a proven track record of leading teams,
building secure solutions, and driving product innovation.

Experienced in collaborating with cross-functional stakeholders
to deliver high-quality, customer-focused software.

</p>

</section>

<Skills/>

<section className="p-16 text-center">

<h2 className="text-3xl mb-4">
Education
</h2>

<p className="text-gray-300">

SRM University, Bengaluru — B.Tech
July 2013 – June 2017

Graduated with a CGPA of 8.7

</p>

</section>

</main>

)
}
