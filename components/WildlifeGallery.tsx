import fs from "fs"
import path from "path"
import Image from "next/image"

export default function WildlifeGallery() {
  const wildlifePath = path.join(
    process.cwd(),
    "public",
    "images",
    "wildlife-optimized"
  )

  const files = fs.readdirSync(wildlifePath)

  const images = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  )

  return (
    <div className="gallery-container">
      <div className="photo-grid">
        {images.map((file) => (
          <div key={file} className="photo">
            <Image
              src={`/images/wildlife-optimized/${file}`}
              alt={file}
              width={400}
              height={400}
              loading="lazy"
              className="photo-img"
            />
          </div>
        ))}
      </div>

      <a
        href="https://www.instagram.com/lensofutkarsh/"
        target="_blank"
        className="insta-link"
      >
        View more on Instagram →
      </a>
    </div>
  )
}
