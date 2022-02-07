import Link from "next/link"
import style from "../blogline/blog_line.module.css"

export type BlogLineData = {
  id: string
  title: string
  date: string
  content: string
  summary: string
}

export default function BlogLine({props}: { props: BlogLineData }) {
  return (
    <article id={props.id} className={style.root}>
      <div className={style.date}>
        <time>{props.date}</time>
      </div>
      <h1 className={style.title}>
        <Link href={`posts/${props.id}`}><a>{props.title}</a></Link>
      </h1>
      <div className={style.summary}>
        {props.summary}
      </div>
    </article>
  )
}
