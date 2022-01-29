import BlogLine, {BlogLineData} from "./BlogLine";

export type BlogListData = {
  data: BlogLineData[]
}

export default function BlogList({props}: { props: BlogListData }) {
  return (
    <div>
      {
        props.data.map(d => {
          return <BlogLine props={d}/>
        })
      }
    </div>
  );
}

function BlogListDemo() {
  const lines = Array(10).fill(1).map((_, i) => ({title: `title_${i}`, date: `2020/01`, content: `content_${i}`}))
  const blogs: BlogListData = {data: lines}
  return (
    <div>
      <BlogList props={blogs}/>
    </div>
  )
}
