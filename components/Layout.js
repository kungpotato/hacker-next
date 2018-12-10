import Link from "next/link"
import Head from "next/head"
import Router from "next/router"

const Layout = ({children, title, description, backButton}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
        <div className="container">
            <nav>
                {backButton && <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>}
                <Link href="/">
                    <a>
                        <span className="main-title">Hacker Next</span>
                    </a>
                </Link>
            </nav>

            {children}
        </div>
        <style jsx>{`
            .container{
                width: 800px;
                margin: 0 auto;
                background-color: #f6f6ef
            }
            nav{
                background-color: #f60;
                padding: 1em
            }
            nav > * {
                display: inline-block;
                color: black
            }
            nav a{
                text-decoration: none;
            }
            nav .main-title{
                font-weigth: bold
            }
            nav .back-button{
                font-size: 0.9rem;
                padding-right: 1em;
                cursor: pointer
            }
        `}</style>
        <style global jsx>{`
            body{
                background: white;
                font-family: Vernada, Geneva, sans-serif;
            }
        `}</style>
    </div>
)

export default Layout