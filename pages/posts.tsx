import BlogLine, {BlogLineData} from "../components/blogline/BlogLine";
import getPosts from "../lib/posts";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Layout from "../components/Layout";
import style from "../styles/utils.module.css"
import BlogList from "../components/bloglist/BlogList";
import Container from "../components/container/Container";

export type BlogListData = {
  data: BlogLineData[]
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function Posts({data}: Props) {
  return (
    <Layout title="記事一覧">
      <header className={style.page_header}>
        <h1>Blog</h1>
      </header>
      <Container>
        <BlogList data={data}/>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogListData> = () => {
  const blogLineData = getPosts()
  const data = {data: blogLineData};
  return {
    props: data
  }
}
