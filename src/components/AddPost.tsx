import { FaBlogger } from "react-icons/fa"

interface Props {
  input: {
    title: string
    author: string
    date: string
    content: string
  }
  handleSubmit: (e: any) => void
  // setFormData: (data: any) => void
  // formData: any
  handleInputChange: (e: any) => void
}

const AddPost = ({ input, handleInputChange, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="block bg-white rounded-xl w-5/6 md:w-2/5 p-8 m-5 mx-auto shadow"
    >
      <div className="flex items-center gap-2 mb-5">
        <h3 className="font-semibold">Add New Blog Post</h3>
        <FaBlogger />
      </div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title" p-1
        id="title"
        className="border w-full p-1"
        // value={formData.title || ""}
        // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        value={input.title}
        onChange={handleInputChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        className="border w-full p-1"
        // value={formData.author || ""}
        // onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        value={input.author}
        onChange={handleInputChange}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        className="border w-full p-1"
        // value={formData.date || ""}
        // onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        value={input.date}
        onChange={handleInputChange}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        id="content"
        className="border w-full p-1"
        style={{ resize: "none" }}
        // value={formData.content || ""}
        // onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        value={input.content}
        onChange={handleInputChange}
      ></textarea>
      <div className="flex justify-end">
        <button
          className="border px-5 py-2 rounded-lg bg-green-800 hover:bg-green-500 text-white font-semibold"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default AddPost
