import * as fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), 'posts')

export default function getPosts() {
  console.log("aiueo")
  const fileNames = fs.readdirSync(postsDirectory)
  console.log(fileNames)
}
