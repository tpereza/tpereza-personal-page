import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Especifico de About */}
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>About Me</h2>
            <p>Get to know more about Me</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Education</h3>
            <p>
              As told in my introduction I'm an student at the National University of Colombia, in
              the Computer Engineering degree. I started my education on 2016 when I was 16 years
              old, my goal when I choose to study this degree was to develop videogames. However, as
              the time passed by the Data analysis and Back-end develop became some of my prefered
              areas to work on. Finished secondary school at the New England School, in which I
              studied from first grade until I graduated. Education as you can notice has always
              been part of my life, and I'm always looking for online courses and tutorials to keep
              fresh my knowledge on technology matters.
            </p>

            <h3 className="major">Life & Hobbies</h3>
            <p>
              As a young men I try to keep a balance between work, education, family and being
              social. For me having free time to spent with friends or family is useful to keep my
              mind clear and performing better in other matters such as my developer work or at the
              university. Some of the hobbies I have are listed below, with a small description,
              each one to a separate information/blog page in which I discuss more about those
              things.
            </p>

            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <h3 className="major">Videogames</h3>
                <p>
                  Playing and also watching videogames are key for me. My goal still is to develop
                  videogames and staying in touch with the indsutry via videos or forums, therefore,
                  in this blog I try to give my opinion and also discuss about what other think.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Entrepreneurship</h3>
                <p>
                  Trying to come up with ideas and starting to develop them is kind of a hobbie.
                  Most of my ideas I work them with a couple of friends of mine. If you want to take
                  a look to what we have done, and what ideas I have feel free to.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Hackaton</h3>
                <p>
                  Working fast and coming out with solutions is one of the skills I have worked on
                  with the hackatons. Been there with friends from the university and came out with
                  some clever ideas, most of them we can't finish in the short time the hackatons
                  have, but nevertheless the time spent there teach great things.
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

export default About;
