import Navigation from "./navigation";
import Footer from "./Footer.js";
import Link from "next/link";
import Head from "next/head";

const Layout = (props) => {
  return (
    <html>
      <Head>
        <title>Tom Perez Portfolio</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <noscript>
          <link rel="stylesheet" href="/assets/css/noscript.css" />
        </noscript>
      </Head>

      <body>
        <div id="page-wrapper">
          <header id="header" className={props ? "" : "alt"}>
            <h1>
              <Link href="/">
                <a>Tom Perez</a>
              </Link>
            </h1>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>

          <Navigation />

          <div>{props.children}</div>

          <Footer />
        </div>

        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/jquery.scrollex.min.js"></script>
        <script src="/assets/js/browser.min.js"></script>
        <script src="/assets/js/breakpoints.min.js"></script>
        <script src="/assets/js/util.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
};

export default Layout;
