import Head from 'next/head'
import BlogLine, {BlogLineData} from "../components/bloglist/BlogLine";
import BlogList from "../components/bloglist/BlogList";

export default function Home() {
  const blogLine: BlogLineData = {title: "title", date: "2020/10", content: "content"}
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

        <BlogLine props={blogLine}/>
      </main>

      <footer>
        footer
      </footer>
    </div>
  )
}
