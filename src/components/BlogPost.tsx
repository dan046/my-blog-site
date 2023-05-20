import { FaTrashAlt, FaEdit } from "react-icons/fa"
import NoContent from "./NoContent"
import { useState } from "react"
interface Props {
  post: {
    id: number
    title: string
    author: string
    date: string
    content: string
  }[]
  handleDelete: (id: number) => void
}
const BlogPost = ({ post, handleDelete }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main className="bg-slate-100">
      {post.length ? (
        <div className="grid grid-cols-2 gap-1 bg-slate-100">
          {post.map((data) => (
            <div
              key={data.id}
              className="flex flex-col border shadow rounded-xl px-8 py-7 m-4 bg-white"
            >
              <h1 className="text-xl font-semibold">{data.title}</h1>
              <p>Author: {data.author}</p>
              <p>Posted: {data.date}</p>
              <details className="border border-gray-300 rounded p-4 cursor-pointer">
                <summary className="font-bold" onClick={toggle}>
                  {isOpen ? "Click to close" : "Click to expand"}
                </summary>
                <div className="mt-4">
                  <p className="text-left space-y-2 md:text-justify">
                    {data.content}
                  </p>
                </div>
              </details>
              <div className="flex flex-row gap-3 pt-4">
                <button>
                  <FaEdit
                    className="text-green-500 hover:text-green-700 cursor-pointer text-2xl"
                    title="Edit Post"
                  />
                </button>
                <button>
                  <FaTrashAlt
                    className="text-red-500 hover:text-red-700 cursor-pointer text-2xl"
                    title="Delete Post"
                    onClick={() => handleDelete(data.id)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoContent warning="No blog posts to display" />
      )}
    </main>
  )
}

export default BlogPost
