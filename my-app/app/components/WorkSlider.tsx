import React from "react";

interface Slide {
  id: number;
  title: string;
  path: string;
}

interface WorkSliderData {
  slides: Slide[];
}

export const workSliderData: WorkSliderData = {
  slides: [
    {
      id: 1,
      title: "title",
      path: "../../public/images/thumb/slide1.jpg",
    },
    {
      id: 2,
      title: "title",
      path: "../../public/images/thumb/slide1.jpg",
    },
    {
      id: 3,
      title: "title",
      path: "../../public/images/thumb/slide1.jpg",
    },
    {
      id: 4,
      title: "title",
      path: "../../public/images/thumb/slide1.jpg",
    },
  ],
};

const WorkSlider = () => {
  return <div>WorkSlider</div>;
};

export default WorkSlider;
