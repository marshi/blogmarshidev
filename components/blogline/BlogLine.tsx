import Link from "next/link"
import style from "../blogline/blog_line.module.css"
import {format} from "../../lib/dateformat";

export type BlogLineData = {
  id: string
  title: string
  date: string
  content: string
  summary: string
}

export default function BlogLine({props}: { props: BlogLineData }) {
  const formattedDate = format(new Date(props.date))
  return (
    <article id={props.id} className={style.root}>
      <div className={style.date}>
        <time>{formattedDate}</time>
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
