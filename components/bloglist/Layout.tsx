import {ReactNode} from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({title, children}: { title: String, children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <Link href="/"><a>top</a></Link>
      </header>
      {children}
      <footer>
        footer
      </footer>
    </>
  )
}
