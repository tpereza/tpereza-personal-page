import Link from "next/link";

const Projects = () => {
  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major">Projects</h2>
        <p>
          This is a list of the projects made by me or that I have participated
          in, at university, Hackaton or just as a side project. Feel free to
          check it out and discover all the stuff I have made. Also below each
          project is a description of the technologies used, such as programming
          languages or Frameworks.
        </p>
        <section className="features">
          <article>
          <Link href="/projects#aventurate">
            <a className="image">
              <img src="images/aventurateLogo.png" alt="" />
            </a>
          </Link>
            <h3 className="major">Aventurate</h3>
            <p>
              This is a project made in the University with the purpose of
              serving as a hotel booking app, specially for small and medium
              business in towns of Colombia.
            </p>
            <Link href="/projects#aventurate">
              <a className="special">
                Learn more
              </a>
            </Link>
          </article>
          <article>
            <Link href="/projects#d4d">
              <a className="image">
                <img src="images/d4dLogo.png" alt="" />
              </a>
            </Link>
            <h3 className="major">Data for Decision</h3>
            <p>
              A colombian startup specialized in the data analysis and management of the resources
              from small to medium financial entities.
            </p>
            <Link href="/projects#d4d">
              <a className="special">
                Learn more
              </a>
            </Link>
          </article>
          <article>
            <Link href="/projects#pinart">
              <a href="#" className="image">
                <img src="images/pinartLogo.png" alt=""  style={{ width: '70%', margin: '0 auto' }}/>
              </a>
            </Link>
            <h3 className="major">Pinart</h3>
            <p>
              A Project made at the University with multiple Microservices,
              similar to Pinterest and with a lot of languages and frameworks
              involved.
            </p>
            <Link href="/projects#pinart">
              <a className="special">
                Learn more
              </a>
            </Link>
          </article>
          <article>
            <Link href="/projects#booklick">
              <a className="image">
                <img src="images/booklickLogo.png" alt="" style={{ width: '70%', margin: '0 auto' }} />
              </a>
            </Link>
            <h3 className="major">Booklick</h3>
            <p>
              An Start-up in which I work as a Fullstack developer and head of
              the recommendations area. A social Network for not only university
              students but for the knowledge within it.
            </p>
            <Link href="/projects#booklick">
              <a className="special">
                Learn more
              </a>
            </Link>
          </article>
        </section>
        <ul className="actions">
          <li>
          <Link href="/projects">
            <a className="button">
              Browse All
            </a>
          </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
