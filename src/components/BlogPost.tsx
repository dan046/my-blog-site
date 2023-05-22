import BlogItems from "./BlogItems"
import NoContent from "./NoContent"
interface Props {
  post: {
    title: string
    author: string
    date: string
    content: string
  }[]
}
const BlogPost = ({ post }: Props) => {
  return (
    <main className="flex justify-center">
      {post.length ? (
        <main className="m-5 grid grid-flow-row grid-flow-row-dense auto-rows-max grid-cols-2 gap-3 md:grid-cols-3">
          <BlogItems post={post} />
        </main>
      ) : (
        <NoContent />
      )}
    </main>
  )
}

export default BlogPost
