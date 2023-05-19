interface Props {
  handleSubmit: (e: any) => void
  setFormData: (data: any) => void
  formData: any
}

const AddPost = ({ handleSubmit, formData, setFormData }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border-2 border-black rounded-xl w-3/4 md:w-5/6 px-8 py-7 my-4 mx-4 gap-1 mx-auto"
    >
      <h1 className="font-semibold text-2xl">Add a new blog post</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="border-2 border-black rounded-l"
        value={formData.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        className="border-2 border-black rounded-l"
        value={formData.author || ""}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        className="border-2 border-black rounded-l"
        value={formData.date || ""}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        cols={50}
        rows={10}
        className="border-2 border-black rounded-l w-full py-3 px-3"
        value={formData.content || ""}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        style={{ resize: "none" }}
      ></textarea>
      <button type="submit" className="border-2 border-black rounded-l">
        SUBMIT
      </button>
    </form>
  )
}

export default AddPost
