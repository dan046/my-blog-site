import { produce } from "immer"
import AddPost from "./components/AddPost"
import BlogPost from "./components/BlogPost"
import Card from "./components/Card"
import { useForm } from "./components/useForm"
import { useState } from "react"
import PostCard from "./components/PostCard"

interface Post {
  id: number
  title: string
  author: string
  date: string
  content: string
}

const App = () => {
  const [lastId, setLastId] = useState(0)
  const [post, setPost] = useState<Post[]>([])
  const [values, handleChange, resetForm] = useForm({
    title: "",
    author: "",
    date: "",
    content: "",
  })
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editValues, setEditValues] = useState<Partial<Post>>({})

  const newPost = produce(post, (draft: Post[]) => {
    draft.push({ ...values, id: draft.length + 1 })
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLastId(lastId + 1)
    setPost(newPost)
    resetForm()
  }

  const handleEditClick = (index: number) => {
    setEditingIndex(index)
    setEditValues(post[index])
  }

  const handleUpdateClick = () => {
    const updatedPost = [...post]
    updatedPost[editingIndex!] = editValues as Post
    setPost(updatedPost)
    setEditingIndex(null)
    setEditValues({})
  }

  const handleCancelClick = () => {
    setEditingIndex(null)
    setEditValues({})
  }

  const handleDelete = (id: number) => {
    const postId = post.filter((data) => data.id !== id)
    setPost(postId)
  }

  return (
    <Card>
      <form
        className="m-10 mx-auto flex w-5/6 flex-col gap-2 rounded-md border p-5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="text-white">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded-md border-black pl-2"
          value={values.title}
          onChange={handleChange}
        />
        <label htmlFor="author" className="text-white">
          Author
        </label>
        <input
          type="text"
          name="author"
          id="author"
          className="rounded-md border-black pl-2"
          value={values.author}
          onChange={handleChange}
        />
        <label htmlFor="date" className="text-white">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="rounded-md border-black pl-2"
          value={values.date}
          onChange={handleChange}
        />
        <label htmlFor="content" className="text-white">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          className="rounded-md border-black pl-2"
          value={values.content}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end">
          <button className="rounded-full border-none bg-green-900 px-8 py-1 font-medium">
            Post
          </button>
        </div>
      </form>

      {post.length > 0 && (
        <div>
          {post.map((data, index) => (
            <div key={data.id}>
              {editingIndex === index ? (
                <PostCard>
                  <form className="m-10 mx-auto flex w-5/6 flex-col gap-2 rounded-md border p-5 text-black">
                    <label htmlFor="editTitle">Title</label>
                    <input
                      type="text"
                      name="editTitle"
                      value={editValues.title || ""}
                      onChange={(e) =>
                        setEditValues({ ...editValues, title: e.target.value })
                      }
                    />
                    <label htmlFor="editAuthor">Author</label>
                    <input
                      type="text"
                      name="editAuthor"
                      value={editValues.author || ""}
                      onChange={(e) =>
                        setEditValues({ ...editValues, author: e.target.value })
                      }
                    />
                    <label htmlFor="editDate">Date</label>
                    <input
                      type="date"
                      name="editDate"
                      value={editValues.date || ""}
                      onChange={(e) =>
                        setEditValues({ ...editValues, date: e.target.value })
                      }
                    />
                    <label htmlFor="editContent">Content</label>
                    <textarea
                      name="editContent"
                      value={editValues.content || ""}
                      onChange={(e) =>
                        setEditValues({
                          ...editValues,
                          content: e.target.value,
                        })
                      }
                    ></textarea>
                    <button type="button" onClick={handleUpdateClick}>
                      Update
                    </button>
                    <button type="button" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </form>
                </PostCard>
              ) : (
                <section className="m-5 grid grid-flow-row grid-flow-row-dense auto-rows-max grid-cols-2 gap-3 md:grid-cols-3">
                  <PostCard>
                    <h2 className="cursor-pointer text-lg font-medium hover:underline">
                      {data.title}
                    </h2>
                    <div>
                      <p>
                        by {data.author} on {data.date}
                      </p>
                    </div>
                    <p>{data.content}</p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </PostCard>
                </section>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default App
