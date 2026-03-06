import WildlifeGallery from "../../components/WildlifeGallery"
import Navbar from "../../components/Navbar"

export default function WildlifePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <WildlifeGallery />
      </div>
    </>
  )
}
