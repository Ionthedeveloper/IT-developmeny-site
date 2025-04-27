import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

interface ServicesData {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const servicesData: ServicesData[] = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    icon: <RxReader />,
    title: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

const Services = () => {
  return <div>Services</div>;
};

export default Services;
