import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import {BlogLineData} from "../components/bloglist/BlogLine";
import removeMd from 'remove-markdown';

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

export function getPaths() {
  return fs.readdirSync(postsDirectory).map(fileName => {
    const id = fileName.replace(/\.md$/, "")
    return {
      params: {
        id: id
      }
    }
  })
}
