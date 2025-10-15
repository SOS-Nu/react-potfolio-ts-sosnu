import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { PROJECTS, PROJECTSFeatured } from "helpers/data";
import ProjectCardFeatured from "./project.card.featured";
import GlowCard from "@/components/share/glow-card";

const Project = () => {
  return (
    <>
      <Row>
        <Col xs={12} className="text-center mt-md-0 mt-6">
          <h3 className="text-center mt-md-3">
            My Recent <span className="brand-red">Works</span>
          </h3>
          <h6 className="text-center mb-md-2  mb-2">
            Here are a few projects I've worked on recently.
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTSFeatured?.map((item) => {
            return (
              <Col md={8} className="project-card" key={item.id}>
                <GlowCard
                  identifier="project-1"
                  autoRotate={true}
                  spread={100}
                  proximity={0}
                >
                  <ProjectCardFeatured
                    imgPath={item.imgPath}
                    title={item.title}
                    description={item.description}
                    githubLink={item.githubLink}
                    githubLink1={item.githubLink1}
                    demoLink={item.demoLink}
                  />
                </GlowCard>
              </Col>
            );
          })}
        </Row>

        {PROJECTS?.map((item) => {
          return (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          );
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
