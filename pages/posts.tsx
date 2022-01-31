import BlogLine, {BlogLineData} from "../components/bloglist/BlogLine";
import getPosts from "../lib/posts";
import {GetStaticProps, InferGetStaticPropsType} from "next";

export type BlogListData = {
  data: BlogLineData[]
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function Posts({data}: Props) {
  return (
    <div>
      {
        data.map((d, i) => {
          return <BlogLine props={d} key={i}/>
        })
      }
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogListData> = () => {
  const blogLineData = getPosts()
  const data = {data: blogLineData};
  return {
    props: data
  }
}
