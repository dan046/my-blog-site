import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: ReactNode
}
const Card = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <Header
        brand="Dan's Blog Site"
        menu1="Home"
        menu2="Blog"
        menu3="Contact"
      />
      {children}
      <Footer
        email="example@example.com"
        address="015-0011 Akita, Yuri Honjo-shi, Ishiwaki (Sonota)"
      />
    </div>
  )
}

export default Card
