import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import {getDetail, getPaths} from "../../lib/posts";
import {ParsedUrlQuery} from "querystring";

export type BlogDetail = {
  title: string
  content: string
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export type Path = ParsedUrlQuery & { id: string }

export default function blogDetail({title, content}: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <main>
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </main>
    </div>
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
