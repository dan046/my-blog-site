interface Props {
  handleSubmit: (e: any) => void
}

const AddPost = ({ handleSubmit }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border-2 border-black rounded-l"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="border-2 border-black rounded-l"
      />

      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        className="border-2 border-black rounded-l"
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        className="border-2 border-black rounded-l"
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        className="border-2 border-black rounded-l"
      ></textarea>
      <button type="submit" className="border-2 border-black rounded-l">
        SUBMIT
      </button>
    </form>
  )
}

export default AddPost
