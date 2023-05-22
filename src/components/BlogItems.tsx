import { useState } from "react"
import PostCard from "./PostCard"
import { produce } from "immer"
interface Props {
  post: {
    title: string
    author: string
    date: string
    content: string
  }[]
}

const BlogItems = ({ post }: Props) => {
  const [showMoreMap, setShowMoreMap] = useState<{ [key: number]: boolean }>({})

  const toggleContent = (index: number) => {
    setShowMoreMap(
      produce((draft) => {
        draft[index] = !draft[index]
      })
    )
  }
  return (
    <>
      {post.map((data, index) => (
        <PostCard key={index}>
          <h2 className="cursor-pointer text-lg font-medium hover:underline">
            {data.title}
          </h2>
          <section>
            <p className="text-sm">
              by{" "}
              <span className="cursor-pointer font-medium text-neutral-400 hover:underline">
                {data.author}
              </span>{" "}
              on{" "}
              <span className="cursor-pointer font-normal text-neutral-400 hover:underline">
                {data.date}
              </span>
            </p>
          </section>
          <p>
            {showMoreMap[index]
              ? data.content
              : `${data.content.slice(0, 100)}...`}
          </p>
          <button
            onClick={() => toggleContent(index)}
            className="font-medium underline"
          >
            {showMoreMap[index] ? "See less" : "See more"}
          </button>
        </PostCard>
      ))}
    </>
  )
}

export default BlogItems
