import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card.jsx";

function PScard({ imglogo, title, paragraph, index }) {
  return (
    <CardContainer className="h-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-gray-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] rounded-xl p-6 border h-full flex flex-col justify-between">
        <div>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imglogo}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-white mt-6"
          >
            #{index + 1} {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-sm mt-4 text-neutral-300"
          >
            {paragraph}
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            See more →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default PScard;
