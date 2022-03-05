import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-primary-700 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({textOnLeft = true}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Countries",
      value: "192",
    },
    {
      key: "Hotels",
      value: "479",
    },
    {
      key: "Rooms",
      value: "2093",
    },
    {
      key: "Workers",
      value: "10347",
    }
  ]

  return (
    <Container>
      <TwoColumn>
    
          <ImageColumn>
          <Image imageSrc="https://img.freepik.com/free-vector/flat-hand-drawn-people-starting-business-project_52683-56392.jpg?w=740"/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent className="w-full">
            <Heading>About</Heading>
            <Description>The MEA Innovation and Entrepreneurship Development Cell(IEDC) is an active organization aiming to foster innovation culture in our institution. IEDC provide venues for creative students to learn and collaborate their innovative ideas into prototypes of viable products and services.We promote technology based startup ventures from the college students and provide them with access to requirements. we organise various workshops,webinars,entalks, competitions for developing the innovative ideas to  start new venture as an entrepreneur.</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
