import AddPost from "./components/AddPost"
import BlogPost from "./components/BlogPost"
import Card from "./components/Card"
import { sampleData } from "./sampleData"

const App = () => {
  return (
    <Card>
      <AddPost/>
      <BlogPost post={sampleData} />
    </Card>
  )
}

export default App
