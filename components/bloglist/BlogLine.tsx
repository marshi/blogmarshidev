import Link from "next/link"

export type BlogLineData = {
  id: string
  title: string
  date: string
  content: string
  summary: string
}

export default function BlogLine({props}: { props: BlogLineData }) {
  return (
    <div id={props.id}>
      <h1>
        <Link href={`posts/${props.id}`}><a>{props.title}</a></Link>
      </h1>
      <div>
        {props.date}
      </div>
      <div>
        {props.summary}
      </div>
    </div>
  )
}
