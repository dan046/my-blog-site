import BlogItems from "./BlogItems"
import NoContent from "./NoContent"

interface Props {
  post: {
    id: number
    title: string
    author: string
    date: string
    content: string
  }[]
  handleDelete: (id: number) => void
  handleEdit: (id: number) => void
}
const BlogPost = ({ post, handleDelete, handleEdit }: Props) => {
  return (
    <main className="bg-slate-100">
      {post.length ? (
        <BlogItems
          post={post}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <NoContent warning="No blog posts to display" />
      )}
    </main>
  )
}

export default BlogPost
