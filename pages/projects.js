import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Projects</h2>
            <p>Here is a brief explanation about the projects I have worked on or in which I'm working on</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
          <h3 id="aventurate" className="major">Aventurate App</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis.
              Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis
              vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id
              malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec
              vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies
              odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <h3 id="mercampo" className="major">Mercampo App</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis.
              Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis
              vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id
              malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec
              vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies
              odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <h3 id="pinart" className="major">Pinart App</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis.
              Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis
              vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id
              malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec
              vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies
              odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <h3 id="booklick" className="major">Booklick S.A.</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis.
              Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis
              vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id
              malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec
              vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies
              odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <h3 className="major">Vitae phasellus</h3>
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non
              pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci,
              sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat
              auctor laoreet.
            </p>

            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <h3 id='test' className="major">Sed feugiat lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim
                  dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Nisl placerat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim
                  dapibus ultrices.
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

export default Projects;
