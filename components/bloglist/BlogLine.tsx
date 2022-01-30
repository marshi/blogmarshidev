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
        {props.title}
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
