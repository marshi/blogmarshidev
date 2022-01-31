import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import {getPaths} from "../../lib/posts";

type BlogDetail = {
  title: string
  content: string
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function blogDetail({title, content}: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {content}
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPaths()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogDetail> = ({params}) => {
  return {
    props: {
      title: "aiueo",
      content: "content"
    }
  }
}
