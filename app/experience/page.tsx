import Navbar from "../../components/Navbar"
import { experience } from "../data/experience.ts"
export default function Experience(){

return(

<main className="bg-black text-white min-h-screen">

<Navbar/>

<div className="max-w-4xl mx-auto p-16">

<h1 className="text-4xl mb-12 font-bold">
Experience
</h1>

{experience.map(job => (

<div
key={job.company}
className="mb-12 border border-gray-800 rounded-xl p-8"
>

<h2 className="text-2xl font-semibold">
{job.company}
</h2>

<p className="text-gray-400 mb-2">
{job.role} — {job.location}
</p>

<p className="text-gray-500 mb-4">
{job.period}
</p>

<ul className="list-disc pl-6 space-y-2 text-gray-300">

{job.points.map((p,i)=>(
<li key={i}>{p}</li>
))}

</ul>

</div>

))}

</div>

</main>

)
}
