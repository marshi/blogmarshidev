import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import {BlogLineData} from "../components/blogline/BlogLine";
import removeMd from 'remove-markdown';
import {BlogDetail, Path} from "../pages/posts/[id]";
import remarkHtml from "remark-html";
import {unified} from "unified";
import remarkParse from "remark-parse";

const postsDirectory = path.join(process.cwd(), 'posts')

export default function getPosts(): BlogLineData[] {
  const blogLines = fs.readdirSync(postsDirectory).map(fileName => {
    const id = fileName.replace(/\.md$/, "")
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), 'utf-8')
    const matterResult = matter(fileContent)
    const summary = removeMd(matterResult.content).substring(0, 200)
    return {
      id: id,
      title: matterResult.data.title,
      date: matterResult.data.created_at,
      content: matterResult.content,
      summary: summary
    }
  })
  return blogLines
}

export function getPaths(): Path[] {
  return fs.readdirSync(postsDirectory).map(fileName => {
    const id = fileName.replace(/\.md$/, "")
    return {
      id: id
    }
  })
}

export async function getDetail(id: string): Promise<BlogDetail> {
  const file = fs.readFileSync(path.join(postsDirectory, id).concat(".md"), 'utf-8')
  const matterResult = matter(file)
  const content = matterResult.content
  const html = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)

  return {
    title: matterResult.data.title,
    content: html.toString()
  }
}