import React from "react";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

interface ServiceData {
  id: number;
  title: string;
  icon: React.ReactElement;
  description: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Branding",
    icon: <RxCrop />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    title: "Design",
    icon: <RxPencil2 />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    title: "Development",
    icon: <RxDesktop />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 4,
    title: "Copywriting",
    icon: <RxReader />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 5,
    title: "SEO",
    icon: <RxRocket />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

const Services = () => {
  return <div>Services</div>;
};

export default Services;
