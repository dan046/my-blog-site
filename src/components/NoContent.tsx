import PostCard from "./PostCard"

const NoContent = () => {
  return (
    <PostCard>
      <h1 className="cursor-default font-semibold text-neutral-300">
        No blog post to display
      </h1>
    </PostCard>
  )
}

export default NoContent
