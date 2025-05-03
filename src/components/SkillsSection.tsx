import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  //   FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiFigma,
  SiSublimetext,
  SiFirebase,
  SiZod,
  //   SiVisualstudiocode,
  //   SiJest,
  //   SiIntellijidea,
  //   SiStackblitz,
  //   SiCodesandbox,
  //   SiMysql,
  //   SiNestjs,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Chakra UI", icon: <SiChakraui /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Zod", icon: <SiZod /> },
    // { name: "MySQL", icon: <SiMysql /> },
    // { name: "NestJS", icon: <SiNestjs /> },
  ];

  const tools = [
    { name: "VS Code", icon: <BiLogoVisualStudio /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Sublime Text", icon: <SiSublimetext /> },
    // { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    // { name: "Stackblitz", icon: <SiStackblitz /> },
    // { name: "CodeSandbox", icon: <SiCodesandbox /> },
  ];

  //   const testTools = [{ name: "Jest", icon: <SiJest /> }];
  return (
    <section className="w-full px-4 py-12 max-w-[81.25rem] mx-auto">
      <h2 className="text-center font-bold text-2xl md:text-3xl text-white mb-10">
        &lt;Skills /&gt;
      </h2>

      <div className="grid md:grid-cols-2 gap-10 justify-between">
        {/* -------- Technologies -------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white underline decoration-accent decoration-3">
            Technologies:
          </h3>
          <ul className="flex flex-wrap gap-4" role="list">
            {skills.map((tech) => (
              <li
                key={tech.name}
                role="listitem"
                className="flex items-center gap-2 bg-[#00000080] outline outline-[#3978BD] border text-white px-3 py-2 rounded-lg text-sm"
              >
                <span className="text-lg text-accent" aria-hidden='true'>{tech.icon}</span>
                {tech.name}
              </li>
            ))}
          </ul>
        </div>

        {/* -------- Tools -------- */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4 text-white underline decoration-accent decoration-3">
            Tools:
          </h3>
          <ul className="flex flex-wrap gap-4" role="list">
            {tools.map((tool) => (
              <li
                key={tool.name}
                role="listitem"
                className="flex items-center gap-2 bg-[#00000080] outline outline-[#3978BD] border text-white px-3 py-2 rounded-lg text-sm shadow-sm"
              >
                <span className="text-lg text-accent" aria-hidden='true'>{tool.icon}</span>
                {tool.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Testing */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">Testing:</h3>
          <div className="flex flex-wrap gap-4">
            {testTools.map((test) => (
              <div
                key={test.name}
                className="flex items-center gap-2 bg-jet-black text-white px-3 py-2 rounded-lg text-sm shadow-sm"
              >
                <span className="text-lg text-accent">{test.icon}</span>
                {test.name}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;

// const SkillsSection = () => {
//     const skills = [
//         { name: "HTML", icon: '/images/html.svg', alt: "HTML" },
//         { name: "CSS", icon: '/images/css.svg', alt: "CSS" },
//         { name: "JavaScript", icon: '/images/javascript.svg', alt: "JavaScript" },
//         { name: "TypeScript", icon: '/images/typescript.svg', alt: "TypeScript" },
//         { name: "React", icon: '/images/react.svg', alt: "React" },
//         { name: "Next.js", icon: '/images/nextjs.svg', alt: "Next.js" },
//         { name: "Tailwind CSS", icon: '/images/tailwindcss.svg', alt: "Tailwind CSS" },
//         { name: "Chakra UI", icon: '/images/chakraui.svg', alt: "Chakra UI" },
//         // { name: "Node.js", icon: '/images/nodejs.svg', alt: "Node.js" },
//         // { name: "Git", icon: '/images/git.svg', alt: "Git" },
//         // { name: "Figma", icon: '/images/figma.svg', alt: "Figma" },
//         // { name: "NestJS", icon: '/images/nestjs.svg', alt: "NestJS" },
//         // { name: "PostgreSQL", icon: '/images/postgresql.svg', alt: "PostgreSQL" },
//     ]
//   return (
//     <div className='w-full flex flex-col flex-wrap gap-5 md:gap-7 items-center px-2 lg:px-[4.8125rem] h-full mt-10 md:mt-24'>
//         <h2 className="font-bold text-xl md:text-2xl text-raisin-black">&lt;Skills /&gt;</h2>
//         {/* -------- skills list -------- */}
//         <div className='grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-8 items-center justify-between md:justify-between gap-4'>
//         {skills.map((skill, index) => (
//             <div key={index} className="flex flex-col items-center gap-2">
//                 <img src={skill.icon} alt={skill.alt} className="w-12 h-12" />
//                 <span className="text-base text-center text-text-blue">{skill.name}</span>
//             </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default SkillsSection
