import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Projects</h2>
            <p id="aventurate" >Here is a brief explanation about the projects I have worked on or in which I'm working on</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
          <h3  className="major">Aventurate App</h3>
            <p id="d4d">
              Aventurate App was a university project, the purpose was to give the opportunity of small
              tourist business to publish information about the activities they offer or places in Colombia
              in which tourist can stay. This project was meant for only one semester in which my team and I
              developed both the back-end and the front-end. I participated in both back and front end,
              however, my main focus was the applications back-end.
              <br />
              <br />
              If you want to checkout the project and the code, feel free to click the links below. The app
              may take a while to start because of how heroku hosting works, therefore you should hit reload
              couple times. After that you can take a look at the app.
            </p>
            <div className="projectLinks">
              <a href="https://github.com/jcmonterrosas/Project-IngSoft2" className="button" target="_blank">
                Github Repository
              </a>
              <a href="https://aventurate.herokuapp.com/" className="special" target="_blank">
                Check out Aventurate App
              </a>
            </div>

            <h3 className="major">Data for Decision</h3>
            <p id="pinart">
              Data for Decision (D4D) is a startup in which I worked for about 3 months. In there my job
              was to both work in the back-end and front-end of the application they were creating. Mainly
              focused on the back-end, in which I developed a micro service that was used for the sales team
              management of the financial entities that have bought the product. After the development of
              the micro service I then start to build the front-end that implemented the API, but didn't
              finish it. Here is the link to the page of the company if you want to check it out.
            </p>
            <a href="https://d4d.com.co/" className="special" target="_blank">
                Visit Data for Decision
            </a>

            <h3 className="major">Pinart App</h3>
            <p id="booklick">
              Pinart is a clone of pinterest, made also in the university as a project for the software
              architecture class. This project consists of multiple micro services, the authentication, profile
              and images upload/download micro services are the ones I had in charge. The image management was
              via AWS S3 service, and all the micro services where coded in .NET Core. Also worked in the
              API Gateway made with GraphQL and in the front-end of the application written in VueJs. This project
              is a showcase of the knowledge I have not only in javascript but also in .NET Core, and both in 
              the back-end and front-end. The page of the project is not available due to the deployment was made
              in a AWS EC2 machine that now is unavailable. However I encourage you to check out the github
              repository where the work of my colleagues and mine can be revised.
            </p >
            <div className="projectLinks">
              <a href="https://github.com/PinArt-sa-2020-i" className="button" target="_blank">
                  Github Repository
              </a>
            </div>

            <h3 className="major">Booklick S.A.</h3>
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
