import { Container } from "react-bootstrap";
import Project from "components/sections/project";
import bg from "assets/top-bg.svg";

const ProjectPage = () => {
  return (
    <div className="project-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-md-2 mt-2 pt-md-5 pt-0">
        <Container>
          <Project />
        </Container>
      </section>
    </div>
  );
};

export default ProjectPage;
