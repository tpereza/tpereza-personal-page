import Link from "next/link";

const Navigation = () => {
  return (
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul class="links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>Skills & Abilities</a>
            </Link>
          </li>
          <li>
            <Link href="/workExperience">
              <a>Work Experience</a>
            </Link>
          </li>
          <li>
            <a href="elements.html">Projects</a>
          </li>
        </ul>
        <a href="#" class="close">
          Close
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
