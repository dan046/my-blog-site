import { useEffect, useState } from "react"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AddPost from "./components/AddPost"
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./utils/localStorage"

interface FormDataType {
  id: number
  title: string
  author: string
  date: string
  content: string
}

const App = () => {
  const [formData, setFormData] = useState<FormDataType[]>(
    getDataFromLocalStorage()
  )
  const [input, setInput] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  })

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("formData")
    if (storedData) {
      setFormData(JSON.parse(storedData))
    }
  }, [])

  // Update local storage whenever formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleAddData = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const id = formData.length ? formData[formData.length - 1].id + 1 : 1
    const newData = {
      id,
      ...input,
    }
    setFormData((prevData) => [...prevData, newData])
    setInput({
      title: "",
      author: "",
      date: "",
      content: "",
    })
  }

  useEffect(() => {
    saveDataToLocalStorage(formData)
  }, [formData])

  const handleDelete = (id: number) => {
    const postId = formData.filter((post: { id: number }) => post.id !== id)
    setFormData(postId)
  }

  const handleEdit = (id: number) => {
    const tempPosts = [...formData]
    const indexOfBlog = formData.findIndex((blog) => blog.id === id)
    setFormData(tempPosts)
    tempPosts[indexOfBlog].title = input.title || tempPosts[indexOfBlog].title
    tempPosts[indexOfBlog].author =
      input.author || tempPosts[indexOfBlog].author
    tempPosts[indexOfBlog].date = input.date || tempPosts[indexOfBlog].date
    tempPosts[indexOfBlog].content =
      input.content || tempPosts[indexOfBlog].content
  }

  const [selectedDate, setSelectedDate] = useState("")
  const handleFilter = (e: any) => {
    setSelectedDate(e.target.value)
  }
  const filteredDates = selectedDate
    ? formData.filter((post) => post.date === selectedDate)
    : formData

  return (
    <div className="flex flex-col justify-between justify-center">
      <Header title="Dan's Site" home="Home" blog="Blog" contact="Contact Me" />
      <AddPost
        handleInputChange={handleInputChange}
        handleSubmit={handleAddData}
        input={input}
      />
      <div className="flex gap-2 mx-5">
        <label htmlFor="dateFilter" className="font-semibold dark:text-white">
          Filter by Date:
        </label>
        <select
          className="border border-none shadow rounded"
          id="dateFilter"
          value={selectedDate}
          onChange={handleFilter}
        >
          <option value="">All Dates</option>
          {/* Grabbed the code from JavaScript News Website. Applied reduce to remove the duplicates, sort method to sort the dates and mapping out the output with TS features. */}
          {formData
            .reduce((duplicateDates: string[], post: FormDataType) => {
              if (!duplicateDates.includes(post.date)) {
                duplicateDates.push(post.date)
              }
              return duplicateDates
            }, [])
            .sort()
            .map((date: string) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
        </select>
      </div>
      <BlogPost
        post={filteredDates}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Footer
        email="example@example.com"
        address="123 Main St. City, State 12345"
      />
    </div>
  )
}

export default App
