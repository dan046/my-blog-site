import { useState } from "react"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AddPost from "./components/AddPost"

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      author: "Lee",
      date: "2023-05-15",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non vitae illum nemo, delectus similique amet repellat, reiciendis quos consequatur maxime inventore deserunt, obcaecati accusamus modi necessitatibus odio? Maiores, blanditiis nam. Incidunt harum perferendis similique voluptate quod, ab dolorem vero cumque quos ducimus a qui ipsam laudantium itaque facilis. Itaque?",
    },
    {
      id: 2,
      title: "My Second Post",
      author: "Siyeon",
      date: "2023-05-15",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non vitae illum nemo, delectus similique amet repellat, reiciendis quos consequatur maxime inventore deserunt, obcaecati accusamus modi necessitatibus odio? Itaque?",
    },
    {
      id: 3,
      title: "My Third Post",
      author: "Sayanee",
      date: "2023-05-15",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, atque.",
    },
  ])

  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const newPost = {
      id: id,
      title: e.target.title.value,
      author: e.target.author.value,
      date: e.target.date.value,
      content: e.target.content.value,
    }
    setPosts([...posts, newPost])
  }

  const handleDelete = (id: number) => {
    const postId = posts.filter((post) => post.id !== id)
    setPosts(postId)
    console.log("Delete", id)
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header
        title="My Blog Site"
        home="Home"
        blog="Blog"
        contact="Contact Me"
      />
      <AddPost handleSubmit={handleSubmit} />
      <BlogPost post={posts} handleDelete={handleDelete} />
      <Footer
        email="example@example.com"
        address="123 Main St. City, State 12345"
      />
    </div>
  )
}

export default App
