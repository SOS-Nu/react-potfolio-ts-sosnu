import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  githubLink1?: string;

  demoLink: string;
}

function ProjectCardFeatured(props: IProps) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: 350 }}
      />
      <Card.Body className="d-flex flex-column" style={{ paddingTop: "5px" }}>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div>
            <Button variant="primary" href={props.githubLink} target="_blank">
              <BsGithub /> &nbsp; GitHub Backend
            </Button>
            <Button
              variant="primary"
              href={props.githubLink1}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub /> &nbsp; GitHub Frontend
            </Button>

            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCardFeatured;
