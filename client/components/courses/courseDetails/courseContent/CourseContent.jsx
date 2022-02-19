import { useState } from "react";

import {
  Container,
  Wrapper,
  WhatToLearn,
  WhatToLearnWrapper,
  WhatToLearnHeading,
  WhatToLearnList,
  WhatToLearnListItem,
  RightIcon,
  CourseContentWrapper,
  CourseContentHeader,
  CourseContentLecturerWrapper,
  CourseContentLecturer,
  CourseContentExpandButton,
  CourseContentTitleWrapper,
  CourseContentTitleLists,
  CourseContentTitleListItem,
  ArrowDownIcon,
  ArrowUpIcon,
  TotalLecturesTime,
  TitleListItem,
  CourseContentLists,
  CourseContentListItem,
  PlayCircle,
  SpecficCourseTitle,
  SpecficCourseDuration,
  CourseRequirementWrapper,
  CourseRequirementHeader,
  CourseRequirementLists,
  StarUniCode,
  CourseRequirementListItem,
  CourseDescriptionWrapper,
  CourseDescriptionHeader,
  CourseDescription,
} from "./courseContentStyle";

const CourseContent = ({ singleCourse }) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openTab, setOpenTab] = useState(0);

  return (
    <Container>
      <Wrapper>
        {/*  What you'll Learn */}
        <WhatToLearn>
          <WhatToLearnHeading>What you will learn</WhatToLearnHeading>
          <WhatToLearnWrapper>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Use Plotly for interactive dynamic visualizations Learn to use
                Pandas for Data Analysis
              </WhatToLearnListItem>
            </WhatToLearnList>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Implement Machine Learning Algorithms
              </WhatToLearnListItem>
            </WhatToLearnList>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Learn to use modern frameworks like Selenium, Beautiful Soup,
                Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, Matplotlib,
                Seaborn,
              </WhatToLearnListItem>
            </WhatToLearnList>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Master the Python programming language by building 100 projects
                over 100 days
              </WhatToLearnListItem>
            </WhatToLearnList>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Use Python for Data Science and Machine Learning
              </WhatToLearnListItem>
            </WhatToLearnList>
            <WhatToLearnList>
              <RightIcon>&#10004;</RightIcon>
              <WhatToLearnListItem>
                Implement Machine Learning Algorithms
              </WhatToLearnListItem>
            </WhatToLearnList>
          </WhatToLearnWrapper>
        </WhatToLearn>

        {/*  Course content  */}
        <CourseContentWrapper>
          {/*  Course content header */}
          <CourseContentHeader>Course content</CourseContentHeader>
          <CourseContentLecturerWrapper>
            <CourseContentLecturer>
              101 sections • 676 lectures • 64h 2m total length
            </CourseContentLecturer>

            <CourseContentExpandButton>
              Expand all sections
            </CourseContentExpandButton>
          </CourseContentLecturerWrapper>

          {/*  Course content Title and List */}
          <CourseContentTitleWrapper>
            {singleCourse &&
              singleCourse.courseContents &&
              singleCourse.courseContents.map((cc) => (
                <CourseContentTitleLists key={cc.id}>
                  {/*  Course content Title */}
                  <CourseContentTitleListItem
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(cc.id);
                      setOpenCollapse(!openCollapse);
                    }}
                  >
                    <ArrowDownIcon
                      isVisable={openCollapse && openTab === cc.id}
                    />
                    <ArrowUpIcon
                      isVisable={openCollapse && openTab === cc.id}
                    />
                    <TitleListItem>{cc.title}</TitleListItem>
                    <TotalLecturesTime>
                      {cc.totalLectures} lectures . {cc.totalTime}
                    </TotalLecturesTime>
                  </CourseContentTitleListItem>

                  {/*  Course content List */}
                  <CourseContentLists>
                    {cc.specficCourses.map((spc) => (
                      <CourseContentListItem
                        key={spc.cid}
                        isVisable={openCollapse && openTab === cc.id}
                      >
                        <PlayCircle />
                        <SpecficCourseTitle>
                          {spc.courseTitle}
                        </SpecficCourseTitle>
                        <SpecficCourseDuration>
                          {spc.duration}
                        </SpecficCourseDuration>
                      </CourseContentListItem>
                    ))}
                  </CourseContentLists>
                </CourseContentTitleLists>
              ))}
          </CourseContentTitleWrapper>
        </CourseContentWrapper>

        {/* Requirements */}
        <CourseRequirementWrapper>
          <CourseRequirementHeader>Requirements</CourseRequirementHeader>
          {singleCourse &&
            singleCourse.courseRequirements &&
            singleCourse.courseRequirements.map((cr, i) => (
              <CourseRequirementLists key={i}>
                <StarUniCode>&#9830;</StarUniCode>
                <CourseRequirementListItem>{cr}</CourseRequirementListItem>
              </CourseRequirementLists>
            ))}
        </CourseRequirementWrapper>

        {/* Description */}
        <CourseDescriptionWrapper>
          <CourseDescriptionHeader>Description</CourseDescriptionHeader>
          <CourseDescription>{singleCourse.description}</CourseDescription>
        </CourseDescriptionWrapper>

        {/* Instructors Info */}
        <div>Instructors</div>

        {/* Course Rating */}
        <div>Course Rating</div>

        {/* Course Reviews */}
        <div>Reviews</div>
      </Wrapper>
    </Container>
  );
};

export default CourseContent;
