import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui"


interface Props{
    title?:string
}

export const Layout: FC<Props> = ({ children,title }) => {
    return <>
        <Head>
            <title>{title} </title>
            <meta name="author" content="Fernando Mercado" />
            <meta name="description" content="Information" />
            <meta name="keyboards" content="Pokemon,Pokedex" />
        </Head>


        {/* NAVBAR */}
        <Navbar/>


        <main>
            {children}
        </main>


    </>
}
