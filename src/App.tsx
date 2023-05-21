import { useEffect, useState } from "react"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AddPost from "./components/AddPost"

interface FormDataType {
  id: number
  title: string
  author: string
  date: string
  content: string
}
// Implementing Local Storage
const saveDataToLocalStorage = (data: FormDataType[]) => {
  localStorage.setItem("formData", JSON.stringify(data))
}
// Get Data from Local Storage
const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("formData")
  if (storedData) {
    return JSON.parse(storedData)
  }
  return []
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

  return (
    <div className="flex flex-col h-screen justify-between bg-slate-100 justify-center">
      <Header title="Dan's Site" home="Home" blog="Blog" contact="Contact Me" />
      <AddPost
        handleInputChange={handleInputChange}
        handleSubmit={handleAddData}
        input={input}
      />
      <BlogPost
        post={formData}
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
