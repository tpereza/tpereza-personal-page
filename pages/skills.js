import Layout from '../components/Layout';
import Link from 'next/link';

const Skills = () => {
  return (
    <Layout>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Skills & Abilities</h2>
            <p>More about my skills, abilities and how I can help a team be better</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Skills</h3>
            <p>
              My skills can be seen mainly in the "soft skills" categories. For a computer engineer
              the skill to work side by side with other areas of knowledge is crucial, and in my
              experience having this set of "soft skills" is really helpful. The list below have a 
              number of skills that I thing are remarkable and that the people that I have worked
              with can attest. Nevertheless, as people work with me they can discover more personal
              skills, such as empathy, tolerance and resilience. Take a look to a brief list of my skills.
            </p>

            <div className="row">
              <div className="col-12">
                <ul>
                  <li> Background in <strong>systems and computer engineering</strong>.</li>
                  <li> Excellent <strong>communication</strong>, soft skills and <strong>leadership skills</strong>.</li>
                  <li> Easy to adapt to new environment and always open to <strong>new ideas</strong>.</li>
                  <li> Experience in different <strong>agile methodologies</strong>, like Scrum or XP, from Scrum Master to team developer.</li>
                  <li> Attentive to the <strong>needs of the project</strong>, ready to <strong>contribute</strong> with the experience I have earned in other projects.</li>
                  <li> <strong>Innovative</strong> solutions, using the latest technological tools where possible.</li>
                  <li> <strong>Organized</strong> and <strong>methodical</strong> in the way of working, always looking to meet expectations.</li>
                </ul>
              </div>
            </div>

            <h3 className="major">Abilities</h3>
            <p>
              My abilities are here defined as the technical abilities that I have acquire throughout my
              experience. I may include that as a young programmer, the kind of things I do are subject
              to changes or to improvements while I learn more about new practices and ways of optimizing
              my code. I tried to quantify my knowledge, but a better way to check yourself what I can do 
              is to check <Link href="/"><a>my projects</a></Link>.
            </p>

            {/* TODO: List of the abilties in different languages*/}

            <h3 className="major">Coding pages</h3>
            <p>
              I try to be up to date in new technologies, for this to happen I use pages like CodeSignal or
              Hacker Rank to keep my mind fresh. I might stop using them because of the university or little
              to no time to practice, but you can be sure that I keep learning either by the university 
              assignments or by my work of the moment.
            </p>

            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <h3 className="major">CodeSignal</h3>
                <p>
                  Check my CodeSignal profile and review what my practice route has been.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Hacker Rank </h3>
                <p>
                  Check my Hacker Rank profile and review what my practice route has been.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
