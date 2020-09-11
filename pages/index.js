import Navigation from "../components/navigation";
import AboutMeModule from "../components/AboutMeModule";
import SkillsModule from "../components/SkillsModule";
import ExperienceModule from "../components/ExperienceModule";
import ProjectsModule from "../components/ProjectsModule";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout props={false}>
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
    </Layout>
  );
};

export default Index;
