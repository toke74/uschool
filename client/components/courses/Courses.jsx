import { useState } from "react";
import {
  BottomSection,
  Container,
  TopHeading,
  TopParagraph,
  TopSection,
  CourseCategoryLists,
  CourseCategoryListItem,
  CourseCategoryALink,
  CourseCategoryContent,
  CourseCategoryDesc,
  BottomHeading,
  BottomParagraph,
  ExploreButton,
} from "./coursesStyle";
import SingleCourse from "./singleCourse/SingleCourse";
import { coursesItem } from "../util/data/data";

const courseByCategory = (category) => {
  const courseCategory = coursesItem.filter(
    (course) => course.category === category
  );
  return <SingleCourse course={courseCategory} category={category} />;
};

const Courses = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Container>
      {/***************************************************
       ****** Top selection start ************************
       ***************************************************/}
      <TopSection>
        <TopHeading> A broad selection of courses</TopHeading>
        <TopParagraph>
          Choose from 183,000 online video courses with new additions published every month Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
        </TopParagraph>

        {/*List of Course Category */}
        <CourseCategoryLists>
          {/* list item */}
          <CourseCategoryListItem>
            <CourseCategoryALink
              openTab={openTab === 1 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              Development
            </CourseCategoryALink>
          </CourseCategoryListItem>

          {/* list item */}
          <CourseCategoryListItem>
            <CourseCategoryALink
              openTab={openTab === 2 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              Marketing
            </CourseCategoryALink>
          </CourseCategoryListItem>

          {/* list item */}
          <CourseCategoryListItem>
            <CourseCategoryALink
              openTab={openTab === 3 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
            >
              Design
            </CourseCategoryALink>
          </CourseCategoryListItem>

          {/* list item */}
          <CourseCategoryListItem>
            <CourseCategoryALink
              openTab={openTab === 4 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
            >
              Business
            </CourseCategoryALink>
          </CourseCategoryListItem>

          {/* list item */}
          <CourseCategoryListItem>
            <CourseCategoryALink
              openTab={openTab === 5 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
            >
              IT & Software
            </CourseCategoryALink>
          </CourseCategoryListItem>
        </CourseCategoryLists>
      </TopSection>

      {/***************************************************
       ****** Bottom selection start *********************
       ***************************************************/}
      <BottomSection>
        <CourseCategoryContent openTab={openTab === 1 ? true : false}>
          <CourseCategoryDesc>
            <BottomHeading>
              Build websites and applications with Web Development
            </BottomHeading>
            <BottomParagraph>
              The world of web development is as wide as the internet itself.
              Much of our social and vocational lives play out on the internet,
              which prompts new industries aimed at creating, managing, and
              debugging the websites and applications that we increasingly rely
              on.
            </BottomParagraph>
            <ExploreButton>Explore Development</ExploreButton>
          </CourseCategoryDesc>
          {courseByCategory("Development")}
        </CourseCategoryContent>

        <CourseCategoryContent openTab={openTab === 2 ? true : false}>
          <CourseCategoryDesc>
            <BottomHeading>
              Expand your career opportunities with Marketing
            </BottomHeading>
            <BottomParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum
              architecto, dicta qui expedita nemo. Mollitia velit architecto
              recusandae consequuntur eveniet facilis vitae minus temporibus.
            </BottomParagraph>
            <ExploreButton>Explore Marketing</ExploreButton>
          </CourseCategoryDesc>
          {courseByCategory("Marketing")}
        </CourseCategoryContent>

        <CourseCategoryContent openTab={openTab === 3 ? true : false}>
          <CourseCategoryDesc>
            <BottomHeading>
              Expand your career opportunities with Design
            </BottomHeading>
            <BottomParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum
              architecto, dicta qui expedita nemo. Mollitia velit architecto
              recusandae consequuntur eveniet facilis vitae minus temporibus.
            </BottomParagraph>
            <ExploreButton>Explore Design</ExploreButton>
          </CourseCategoryDesc>
          {courseByCategory("Design")}
        </CourseCategoryContent>

        <CourseCategoryContent openTab={openTab === 4 ? true : false}>
          <CourseCategoryDesc>
            <BottomHeading>
              Expand your career opportunities with Business
            </BottomHeading>
            <BottomParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum
              architecto, dicta qui expedita nemo. Mollitia velit architecto
              recusandae consequuntur eveniet facilis vitae minus temporibus.
            </BottomParagraph>
            <ExploreButton>Explore Business</ExploreButton>
          </CourseCategoryDesc>
          {courseByCategory("Business")}
        </CourseCategoryContent>
        <CourseCategoryContent openTab={openTab === 5 ? true : false}>
          <CourseCategoryDesc>
            <BottomHeading>
              Expand your career opportunities with IT & Software
            </BottomHeading>
            <BottomParagraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum
              architecto, dicta qui expedita nemo. Mollitia velit architecto
              recusandae consequuntur eveniet facilis vitae minus temporibus.
            </BottomParagraph>
            <ExploreButton>Explore IT & Software</ExploreButton>
          </CourseCategoryDesc>
          {courseByCategory("IT & Software")}
        </CourseCategoryContent>
      </BottomSection>
    </Container>
  );
};

export default Courses;
