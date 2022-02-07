import Head from 'next/head'
import Link from 'next/link';
import BlogLine, {BlogLineData} from "../components/blogline/BlogLine";
import Layout from '../components/Layout';

export default function Home() {
  const blogLine: BlogLineData = {id: "", title: "title", date: "2020/10", content: "content", summary: ""}
  return (
    <div className="container">
      <Layout title="hogepiyo engineering">
        <main>
          <Link href="posts"><a>記事一覧</a></Link>
        </main>
      </Layout>
    </div>
  )
}
