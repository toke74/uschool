import { useRouter } from "next/router";
import styled from "styled-components";
import { coursesItem } from "../../components/util/data/data";
import CourseHeader from "../../components/courses/courseDetails/courseHeader/CourseHeader";
import CourseRightBar from "../../components/courses/courseDetails/courseRightBar/CourseRightBar";
import CourseContent from "../../components/courses/courseDetails/courseContent/CourseContent";

const Container = styled.div`
  margin-top: 4.3rem;
`;
const Wrapper = styled.div`
  position: relative;
`;

const BodyContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    display: flex;
  }
`;

const CourseDetail = () => {
  const router = useRouter();
  const { courseDetail } = router.query;
  let singleCourse = coursesItem.filter((c) => c.id === parseInt(courseDetail));

  return (
    <Container>
      {singleCourse[0] && (
        <Wrapper>
          <CourseHeader singleCourse={singleCourse[0]} />
          <BodyContainer>
            <CourseRightBar />
            <CourseContent singleCourse={singleCourse[0]} />
          </BodyContainer>
        </Wrapper>
      )}
    </Container>
  );
};

export default CourseDetail;
