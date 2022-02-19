import Link from "next/link";
import { MdOutlineUpdate, MdOutlineLanguage } from "react-icons/md";
import {
  HeaderContainer,
  HeaderWrapper,
  CourseTitle,
  CourseDescription,
  ButtonRatingContainer,
  ButtonGroup,
  BestSellerButton,
  NewCourseButton,
  RatingGroup,
  NumberOfRating,
  StarRating,
  TotalNumberOfRating,
  TotalNumberOfStudent,
  StarBorder,
  CreatedBy,
  InstructorName,
  LastUpdateAndLanguage,
  LastUpdateWrapper,
  LastUpdate,
  LanguageWrapper,
  Language,
} from "./courseHeaderStyle";

const LimitDesc = (string, limit) => {
  var dots = "...";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }
  return string;
};

const CourseHeader = ({ singleCourse }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <CourseTitle>{singleCourse.title}</CourseTitle>
        <CourseDescription>
          {LimitDesc(singleCourse.desc, 200)}
        </CourseDescription>

        {/* Container of button  and Rating section */}
        <ButtonRatingContainer>
          {/* Container of buttons */}
          <ButtonGroup>
            {singleCourse.bestSeller && (
              <BestSellerButton>{singleCourse.bestSeller}</BestSellerButton>
            )}
            {singleCourse.newCourse && (
              <NewCourseButton> {singleCourse.newCourse}</NewCourseButton>
            )}
          </ButtonGroup>

          {/* Container of Rating section */}
          <RatingGroup>
            <NumberOfRating> {singleCourse.rating.toFixed(1)}</NumberOfRating>
            <StarRating
              name="read-only"
              value={singleCourse.rating}
              precision={0.5}
              size="small"
              readOnly
              emptyIcon={<StarBorder />}
            />
            <Link href="/">
              <a className="link-stlye">
                <TotalNumberOfRating>
                  {"("}
                  {singleCourse.totalRating}
                  {" ratings)"}
                </TotalNumberOfRating>
              </a>
            </Link>
            <TotalNumberOfStudent>
              {singleCourse.numberOfStudent} Students
            </TotalNumberOfStudent>
          </RatingGroup>
        </ButtonRatingContainer>

        {/* Container of Created by  */}
        <CreatedBy>
          Created by
          <Link href="/">
            <a className="link-stlye">
              <InstructorName> {singleCourse.instructor}</InstructorName>
            </a>
          </Link>
        </CreatedBy>

        {/* Container of  Last updated  */}
        <LastUpdateAndLanguage>
          <LastUpdateWrapper>
            <MdOutlineUpdate />
            <LastUpdate>Last updated 1/2022</LastUpdate>
          </LastUpdateWrapper>

          {/* Container of  Language  */}
          <LanguageWrapper>
            <MdOutlineLanguage />
            <Language>English</Language>
          </LanguageWrapper>
        </LastUpdateAndLanguage>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default CourseHeader;
