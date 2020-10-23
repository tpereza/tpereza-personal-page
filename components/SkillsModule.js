import Link from "next/link";

const SkillsModule = () => {
  return (
    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner">
        <a href="#" className="image">
          <img src="images/pic02.jpg" alt="" />
        </a>
        <div className="content">
          <h2 className="major">Skills & Abilities</h2>
          <p>
            My skills are divided in Soft Skills and Technical skills, such as
            programming languages or cloud services I have worked on. For me
            skills and abilities are something to rely on when there is a
            problem, therefore I work to improve them (with new challenges) and
            always learn new ones.
          </p>
          <Link href="/skills">
            <a className="special">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsModule;
