import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "../../images/iedclogo-removebg-preview.png";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-primary-800 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-primary-900 hover:text-primary-500`}
  }
`;
export const Logo = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-full mr-3`}
  }
`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black  text-primary-900 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-secondary-900 text-primary-800 hocus:bg-primary-900 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Events
      </NavLink>
      <NavLink href="../../enova/index.html">
        Enova
      </NavLink>
      <NavLink href="#test">
        Contact
      </NavLink>
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Hire Us
    //   </PrimaryLink>
    // </NavLinks>
  ];

  return (
    <Container>
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              It's not about ideas
              <br />
              It's about making ideas happen
          </Heading>
          <Logo href="/">
      <img src={logo} alt="logo" />
    </Logo>
          {/* <PrimaryAction>Contact Us</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
