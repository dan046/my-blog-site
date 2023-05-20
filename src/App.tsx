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
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "My First Post",
  //     author: "Lee",
  //     date: "2023-05-15",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non vitae illum nemo, delectus similique amet repellat, reiciendis quos consequatur maxime inventore deserunt, obcaecati accusamus modi necessitatibus odio?",
  //   },
  //   {
  //     id: 2,
  //     title: "My Second Post",
  //     author: "Siyeon",
  //     date: "2023-05-15",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non vitae illum nemo, delectus similique amet repellat, reiciendis quos consequatur maxime inventore deserunt, obcaecati accusamus modi necessitatibus odio? Itaque?",
  //   },
  //   {
  //     id: 3,
  //     title: "My Third Post",
  //     author: "Sayanee",
  //     date: "2023-05-15",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, atque.",
  //   },
  // ])
  // const [formData, setFormData] = useState({})

  // const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
  //   e.preventDefault()
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1
  //   const newPost = {
  //     id: id,
  //     title: e.target.title.value,
  //     author: e.target.author.value,
  //     date: e.target.date.value,
  //     content: e.target.content.value,
  //   }
  //   setPosts([...posts, newPost])
  //   setFormData({})
  // }
  const [formData, setFormData] = useState<FormDataType[]>(getDataFromLocalStorage())
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
      title: input.title,
      author: input.author,
      date: input.date,
      content: input.content,
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
    saveDataToLocalStorage(formData);
  }, [formData]);

  const handleDelete = (id: number) => {
    const postId = formData.filter((post: { id: number }) => post.id !== id)
    setFormData(postId)
  }
  
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-100 justify-center">
      <Header
        title="Dan's Site"
        home="Home"
        blog="Blog"
        contact="Contact Me"
      />
      <AddPost
        handleInputChange={handleInputChange}
        handleSubmit={handleAddData}
        input={input}
        // formData={formData}
        // setFormData={setFormData}
      />
      <BlogPost post={formData} handleDelete={handleDelete} />
      <Footer
        email="example@example.com"
        address="123 Main St. City, State 12345"
      />
    </div>
  )
}

export default App
