import BlogLine, {BlogLineData} from "../components/bloglist/BlogLine";
import getPosts from "../lib/posts";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Layout from "../components/bloglist/Layout";

export type BlogListData = {
  data: BlogLineData[]
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function Posts({data}: Props) {
  return (
    <Layout title="記事一覧">
      {
        data.map((d, i) => {
          return <BlogLine props={d} key={i}/>
        })
      }
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogListData> = () => {
  const blogLineData = getPosts()
  const data = {data: blogLineData};
  return {
    props: data
  }
}
