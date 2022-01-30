export type BlogLineData = {
  title: string
  date: string
  content: string

  // constructor({title, date, content}: { title: string, date: string, content: string }) {
  //   this.title = title;
  //   this.date = date;
  //   this.content = content;
  // }
  //
  // toJson(): object {
  //   return {...this}
  // }
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
