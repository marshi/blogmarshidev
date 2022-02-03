import Head from 'next/head'
import Link from 'next/link';
import BlogLine, {BlogLineData} from "../components/bloglist/BlogLine";

export default function Home() {
  const blogLine: BlogLineData = {id: "", title: "title", date: "2020/10", content: "content", summary: ""}
  return (
    <div className="container">
      <Head>
        <title>hogepiyo engineering</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <Link href="posts"><a>記事一覧</a></Link>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
