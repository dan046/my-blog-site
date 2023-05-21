import { FaTrashAlt, FaEdit } from "react-icons/fa"

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
const BlogItems = ({ post, handleDelete, handleEdit }: Props) => {
  return (
    <div className="grid grid-cols-2 m-5 gap-5">
      {post.map((data) => (
        <div
          key={data.id}
          className="flex flex-col border shadow rounded-xl px-8 py-7 bg-white"
        >
          <h1 className="text-xl font-semibold">{data.title}</h1>
          <p>Author: {data.author}</p>
          <p>Posted: {data.date}</p>
          <details className="border border-gray-300 rounded p-4 cursor-pointer">
            <summary className="font-bold">Click to Expand</summary>
            <div className="mt-4">
              <p
                className="text-left indent-0 md:indent-7 space-y-2 md:text-justify cursor-auto w-full"
                style={{ resize: "none" }}
              >
                {data.content.split('\n').map((p, index)=>(
                  <p key={index}>{p}</p>
                ))}
              </p>
            </div>
          </details>
          <div className="flex flex-row gap-3 pt-4">
            <button>
              <FaEdit
                className="text-green-500 hover:text-green-700 cursor-pointer text-2xl"
                title="Edit Post"
                onClick={() => handleEdit(data.id)}
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
  )
}

export default BlogItems
