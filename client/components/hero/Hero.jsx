import React from "react";
import {
  Container,
  Wrapper,
  RightHero,
  Heading,
  Paragraph,
  JoinUsLink,
  JoinUsALink,
  LeftHero,
  HeroImage,
} from "./heroStyle";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        {/* Right Hero */}
        <RightHero>
          <Heading>Learn without limits</Heading>
          <Paragraph>
            Build new skills for that “this is my year” feeling with courses,
            certificates, and degrees from world-class universities and companie
          </Paragraph>
          <JoinUsLink href="/register">
            <JoinUsALink> Join US Today</JoinUsALink>
          </JoinUsLink>
        </RightHero>

        {/* Left hero */}
        <LeftHero>
          <HeroImage
            src="/static/images/hero/edu-tran.png"
            alt=""
            width="350"
            height="350"
          />
        </LeftHero>
      </Wrapper>
    </Container>
  );
};

export default Hero;
