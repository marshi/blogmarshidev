import {ReactNode} from "react";
import Head from "next/head";
import Link from "next/link";
import style from "./layout.module.css"

export default function Layout({title, children}: { title: String, children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={style.header}>
        <Link href="/"><a>top</a></Link>
      </header>
      {children}
      <footer className={style.footer}>
        footer
      </footer>
    </>
  )
}
