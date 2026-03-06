import Image from "next/image"

export default function ProfileBadge() {
  return (
  <div className="profile-container">
       <div className="profile-image-wrapper">
         <Image
           src="/images/profile/profile.jpg"
           alt="Utkarsh Rahim"
           width={180}
           height={180}
           priority
         />
       </div>
  </div>
  )
}
