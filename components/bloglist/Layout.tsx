import {ReactNode} from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({children}: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>hogepiyo engineering</title>
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
