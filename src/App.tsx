import { produce } from "immer"
import AddPost from "./components/AddPost"
import BlogPost from "./components/BlogPost"
import Card from "./components/Card"
import { sampleData } from "./sampleData"

const App = () => {
  const newData = {
    title: "New Course",
    author: "John Doe",
    date: "2023-06-01",
    content: "This is a new course.",
  }

  const updatedSampleData = produce(
    sampleData,
    (
      draft: { title: string; author: string; date: string; content: string }[]
    ) => {
      draft.push(newData)
    }
  )

  const handleDelete = (title: string) => {
    const tempPost = sampleData.filter((data) => data.title !== title)
  }

  return (
    <Card>
      <AddPost />
      <BlogPost post={updatedSampleData} />
    </Card>
  )
}

export default App
