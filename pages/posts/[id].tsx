import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import {getDetail, getPaths} from "../../lib/posts";
import {ParsedUrlQuery} from "querystring";
import Layout from "../../components/Layout";

export type BlogDetail = {
  title: string
  content: string
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export type Path = ParsedUrlQuery & { id: string }

export default function blogDetail({title, content}: Props) {
  return (
    <>
      <Layout title={title}>
        <header>
          <h1>{title}</h1>
        </header>
        <main>
          <article dangerouslySetInnerHTML={{__html: content}}>
          </article>
        </main>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<Path> = () => {
  const paths = getPaths().map(path => {
    return {params: path}
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogDetail, Path> = async ({params}) => {
  const detail = await getDetail(params.id);
  return {
    props: {
      title: detail.title,
      content: detail.content
    }
  }
}
