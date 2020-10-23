import Link from "next/link";

const AboutMeModule = () => {
  return (
    <section id="one" className="wrapper spotlight style1">
      <div className="inner">
        <a href="#" className="image">
          <img src="images/pic01.jpg" alt="" />
        </a>
        <div className="content">
          <h2 className="major">About me</h2>
          <p>
            I'm Tom Erick Perez a student of the National University of Colombia
            in the degree Computer Engineering, with focus on databases, data
            analytics and full stack development. With the intention of learning
            and working together with other areas of knowledge to be able to
            apply technology in problem solving and contribute my knowledge.
            Excellent communication and teamwork, with great leadership and
            decision-making skills.
          </p>
          <Link href="/about">
            <a className="special">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMeModule;
