import {
FaAngular,
FaNodeJs,
FaDocker,
FaReact
} from "react-icons/fa"

import {
SiJavascript,
SiTypescript,
SiMongodb,
SiKubernetes
} from "react-icons/si"

const skills = [
{ name:"JavaScript", icon:<SiJavascript size={36}/> },
{ name:"TypeScript", icon:<SiTypescript size={36}/> },
{ name:"Angular", icon:<FaAngular size={36}/> },
{ name:"Node.js", icon:<FaNodeJs size={36}/> },
{ name:"MongoDB", icon:<SiMongodb size={36}/> },
{ name:"Docker", icon:<FaDocker size={36}/> },
{ name:"Kubernetes", icon:<SiKubernetes size={36}/> },
{ name:"React", icon:<FaReact size={36}/> } // moved to end
]

export default function Skills(){

return(

<section className="p-16">

<h2 className="text-3xl text-center mb-12">
Tech Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

{skills.map(skill => (

<div
key={skill.name}
className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col items-center hover:border-blue-500 hover:scale-105 transition"
>

<div className="mb-3">
{skill.icon}
</div>

<span className="text-gray-300">
{skill.name}
</span>

</div>

))}

</div>

</section>

)
}
