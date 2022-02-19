import styled from "styled-components";
import Courses from "../components/courses/Courses";
import Hero from "../components/hero/Hero";

const Container = styled.div``;

const Index = () => {
  return (
    <Container>
      <Hero />
      <Courses />
    </Container>
  );
};

export default Index;
