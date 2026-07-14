import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const allTechs = [
  { icon: <JavaScriptLogo /> },
  { icon: <ReactLogo /> },
  { icon: <TypeScriptLogo /> },
  { icon: <NodeLogo /> },
  { icon: <MongoDBLogo /> },
  { icon: <AWSLogo /> },
  { icon: <GitLogo /> },
  { icon: <VercelLogo /> },
  { icon: <RenderLogo /> },
  { icon: <VSCodeLogo /> },
  { icon: <PostmanLogo /> },
  { icon: <BashLogo /> },
  { icon: <WindowsLogo /> },
  { icon: <UbuntuLogo /> },
  { icon: <LinuxLogo /> },
  { icon: <TailwindLogo /> },
  { icon: <NextjsLogo /> },
  { icon: <PythonLogo /> },
  { icon: <ReduxLogo /> },
  { icon: <ExpressLogo /> },
  { icon: <BcryptLogo /> },
  { icon: <JWTLogo /> },
];

const Skills = () => {
  return (
    <div className="bg-primary py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-left mb-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-black">
              Skills
            </h2>
          </div>
        </ScrollAnimation>

        {/* Large Tech Icons Grid - Original Colors Only */}
        <div className="flex items-center gap-8 flex-wrap">
          {allTechs.map((tech, index) => (
            <ScrollAnimation key={index} delay={index * 0.02}>
              <div className="group flex justify-center items-center">
                <div className="w-10 h-10 md:w-10 md:h-10 flex items-center justify-center transition-all duration-500 group-hover:scale-125">
                  {tech.icon}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;