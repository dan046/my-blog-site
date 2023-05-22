import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const PostCard = ({ children }: Props) => {
  return (
    <div className="block border border-none bg-neutral-800 text-white rounded-lg p-5 hover:glow">
      {children}
    </div>
  )
}

export default PostCard
