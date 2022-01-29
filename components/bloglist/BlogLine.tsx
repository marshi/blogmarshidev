export type BlogLineData = {
  title: string,
  date: string,
  content: string
}

export default function BlogLine({props}: { props: BlogLineData }) {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <div>
        {props.date}
      </div>
      <div>
        {props.content}
      </div>
    </div>
  )
}
