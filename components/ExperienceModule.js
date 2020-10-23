import Link from "next/link";

const ExperienceModule = () => {
  return (
    <section id="three" className="wrapper spotlight style3">
      <div className="inner">
        <a href="#" className="image">
          <img src="images/pic03.jpg" alt="" />
        </a>
        <div className="content">
          <h2 className="major">Work Experience</h2>
          <p>
            Thanks to my eagerness and willing to learn, I have worked in
            several places for my short age. The experience I have in each one
            of this places, help me become not just a better developer but a
            better person too. Working with different disciplines or teams,
            helped me become more of a interdisciplinay engineer adn therefore
            deliver better results depending of each teams needs.
          </p>
          <Link href="/workExperience">
            <a className="special">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceModule;
