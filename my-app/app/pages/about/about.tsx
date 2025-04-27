import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import { SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";

interface SkillsData {
	title: string;
	icon: React.ReactElement[];
}

export const skillsData: SkillsData[] = [
  {
    title: "web development",
    icon: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <SiTypescript />,
      <FaReact />,
      <SiTailwindcss />,
    ],
  },
  {
    title: "design",
    icon: [<FaFigma />, <SiFramer />],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
