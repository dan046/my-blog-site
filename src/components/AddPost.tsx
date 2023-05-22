import { FaBlogger } from "react-icons/fa"

const AddPost = () => {
  return (
    <form
      // onSubmit={handleSubmit}
      className="hover:glow m-10 mx-auto w-5/6 rounded-xl border-none bg-neutral-800 p-8 md:w-2/5"
    >
      <div className="mb-5 flex cursor-default items-center gap-2">
        <h3 className="font-medium text-neutral-200">New Blog Post</h3>
        <FaBlogger />
      </div>
      <label htmlFor="title" className="font-medium text-neutral-200">
        Title:
      </label>
      <input
        type="text"
        name="title"
        p-1
        id="title"
        className="w-full rounded p-1"
        // value={input.title}
        // onChange={handleInputChange}
      />

      <label htmlFor="author" className="font-medium text-neutral-200">
        Author:
      </label>
      <input
        type="text"
        name="author"
        id="author"
        className="w-full rounded p-1"
        // value={input.author}
        // onChange={handleInputChange}
      />
      <label htmlFor="date" className="font-medium text-neutral-200">
        Date:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="w-full rounded p-1"
        // value={input.date}
        // onChange={handleInputChange}
      />

      <label htmlFor="content" className="font-medium text-neutral-200">
        Content:
      </label>
      <textarea
        name="content"
        id="content"
        className="h-auto w-full rounded p-1"
        // value={input.content}
        // onChange={handleInputChange}
      ></textarea>
      <div className="flex justify-end">
        <button
          className="hover:post mt-2 rounded-full border border-none bg-green-300 px-5 py-2 font-bold text-neutral-900"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default AddPost
