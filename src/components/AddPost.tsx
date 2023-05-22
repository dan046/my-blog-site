import { FaBlogger } from "react-icons/fa"

interface Props {
  input: {
    title: string
    author: string
    date: string
    content: string
  }
  handleSubmit: (e: any) => void
  handleInputChange: (e: any) => void
}

const AddPost = ({ input, handleInputChange, handleSubmit }: Props) => {
  // const calcTextAreaHeight = () => {
  //   const lineHeight = 80
  //   const lines = input.content.split("\n").length
  //   return `${lines * lineHeight}px`
  // }
  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 mx-auto block w-5/6 rounded-xl bg-white p-8 shadow md:w-2/5"
    >
      <div className="mb-5 flex items-center gap-2">
        <h3 className="font-semibold">New Blog Post</h3>
        <FaBlogger />
      </div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        p-1
        id="title"
        className="w-full border p-1"
        value={input.title}
        onChange={handleInputChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        className="w-full border p-1"
        value={input.author}
        onChange={handleInputChange}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        className="w-full border p-1"
        value={input.date}
        onChange={handleInputChange}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        id="content"
        className="h-auto w-full border p-1"
        // style={{ height: calcTextAreaHeight(), resize: 'none' }}
        value={input.content}
        onChange={handleInputChange}
      ></textarea>
      <div className="flex justify-end">
        <button
          className="rounded-lg border bg-green-800 px-5 py-2 font-semibold text-white hover:bg-green-500"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default AddPost
