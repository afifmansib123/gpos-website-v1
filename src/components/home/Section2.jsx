import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import Carousel from "@/components/common/carousel/Carousel";
import ProjectItem from "@/components/common/ProjectItem";


const projects = [
  {
    title: "ระบบออกแบบเมนู",
    description:
      "",
    icon: "/x1.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/social-media-app-flutter",
    url: "https://www.nixlab.co.in/projects/com.nixlab.rippl",
    repoType: "public",
    tags: ["Flutter", "Dart", "GetX", "Hive"],
  },
  {
    title: "ระบบจัดการโต๊ะ",
    description:
      "",
    icon: "/x2.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/ecommerce-web-reactjs",
    url: "https://nixlab-shop.cyclic.app",
    repoType: "public",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
  {
    title: "ระบบจัดการออเดอร์",
    description:
      "",
    icon: "/x3.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://www.nixlab.co.in/projects/livebox-app",
    repoType: "public",
    tags: ["Flutter", "Dart", "GetX", "Agora SDK"],
  },
  {
    title: "ระบบชำระเงิน",
    description:
      "",
    icon: "/x4.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    repoType: "private",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    title: "ระบบสร้าง QR Menu",
    description:
      "",
    icon: "/x5.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
    url: "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
    repoType: "public",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    title: "ระบบรายงานการขาย",
    description:
      "",
    icon: "/x6.png",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    repoType: "public",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
];

const HomeSection4 = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)]">
      <ConstraintedBox classNames="p-4 py-20">
        <h2 className="text-center mx-auto">
          GPOS <span className="text-[var(--primaryColor)]">Features</span>
        </h2>

        <Carousel classes="mt-12 w-full">
          {projects.map((project, index) => {
            return <ProjectItem key={`service-${index}`} project={project} />;
          })}
        </Carousel>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
