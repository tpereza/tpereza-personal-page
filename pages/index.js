import Navigation from "../components/navigation";
import AboutMeModule from "../components/AboutMeModule";
import SkillsModule from "../components/ModuleTwo";
import ExperienceModule from "../components/ModuleThree";
import ProjectsModule from "../components/ModuleFour";
import Footer from "../components/Footer";
import Head from "next/head";

const Index = () => {
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
          {/* Header */}
          <header id="header" className="alt">
            <h1>
              <a href="index.html">Tom Perez</a>
            </h1>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>

          {/* Menu */}
          <Navigation />

          {/* Banner */}
          <section id="banner">
            <div className="inner">
              <div className="logo">
                <span className="icon fa-gem"></span>
              </div>
              <h2>My Portfolio</h2>
              <p>Showcase of my projects and abilities</p>
            </div>
          </section>

          <section id="wrapper">
            {/* About Me Module */}
            <AboutMeModule />
            {/* Module Two */}
            <SkillsModule />
            {/* Module Three */}
            <ExperienceModule />
            {/* Module Four */}
            <ProjectsModule />
          </section>

          {/* Footer */}
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

export default Index;
