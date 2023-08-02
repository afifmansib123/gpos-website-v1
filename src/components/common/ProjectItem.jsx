import Image from "next/image";
import Link from "next/link";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectItem = ({ project }) => {
  return (
    <Column classes="carousel__slide">
      <Column classes="w-full bg-[var(--dialogColor)] p-4 rounded-lg items-center justify-between text-center">
        <Column classes="w-full items-center justify-center">
          <Row classes="w-[20rem] aspect-square bg-[var(--textColor10)] rounded-full p-[1rem] items-center justify-center">
            <Image
              src={project.icon}
              alt={`project-${project.title}`}
              width={100}
              height={100}
              sizes="100%"
              priority
              placeholder="blur"
              blurDataURL={project.icon}
              style={{
                objectFit: "cover",
                width: "100%",
                aspectRatio: "1 / 1",
              }}
            />
          </Row>

          <h4 className="font-bold mt-4">{project.title}</h4>

        </Column>

        <Column classes="w-full mt-12">
          <p>{project.description}</p><p>{project.description1}</p>

        </Column>
      </Column>
    </Column>
  );
};

export default ProjectItem;
