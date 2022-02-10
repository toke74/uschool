import styled from "styled-components";
import Courses from "../components/courses/Courses";
import Hero from "../components/hero/Hero";
import CourseContent from "../components/courses/courseDetails/courseContent/CourseContent";

const Container = styled.div``;

const Index = () => {
  return (
    <Container>
      <Hero />
      <Courses />
      <CourseContent />
    </Container>
  );
};

export default Index;
