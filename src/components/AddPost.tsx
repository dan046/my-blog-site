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
      className="block bg-white rounded-xl w-5/6 md:w-2/5 p-8 m-5 mx-auto shadow"
    >
      <div className="flex items-center gap-2 mb-5">
        <h3 className="font-semibold">New Blog Post</h3>
        <FaBlogger />
      </div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        p-1
        id="title"
        className="border w-full p-1"
        value={input.title}
        onChange={handleInputChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        className="border w-full p-1"
        value={input.author}
        onChange={handleInputChange}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        className="border w-full p-1"
        value={input.date}
        onChange={handleInputChange}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        id="content"
        className="border w-full h-auto p-1"
        // style={{ height: calcTextAreaHeight(), resize: 'none' }}
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
