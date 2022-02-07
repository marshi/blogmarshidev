import Link from "next/link"
import BlogLine from "../blogline/BlogLine";

export type BlogLineData = {
  id: string
  title: string
  date: string
  content: string
  summary: string
}

export default function BlogList(props: { data: BlogLineData[] }) {
  return (
    <div>
      {
        props.data.map((d, i) => {
          return <BlogLine props={d} key={i}/>
        })
      }
    </div>
  )
}
