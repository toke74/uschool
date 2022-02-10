import Rating from "@mui/material/Rating";
import Link from "next/link";
import {
  Container,
  CardImage,
  CardBody,
  CardTitle,
  Instructor,
  RatingWrapper,
  RatingSection,
  RatingNumber,
  TotalRating,
  Price,
  ButtonGroup,
  BestSellerBtn,
  NewCourseBtn,
} from "./cardStyle";

const titleLimit = (string, limit) => {
  var dots = "...";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
};

const Card = ({ courseItem }) => {
  return (
    <Container>
      <Link href={`/course/${courseItem.id}`}>
        <a>
          <figure>
            <CardImage src={courseItem.img} alt="" width={400} height={200} />
            
          </figure>

          <CardBody>
            <CardTitle> {titleLimit(courseItem.title, 43)}</CardTitle>
            <Instructor>{courseItem.instructor}</Instructor>
            <RatingWrapper>
              <RatingSection>
                <RatingNumber>{courseItem.rating.toFixed(1)}</RatingNumber>
                <Rating
                  name="read-only"
                  value={courseItem.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </RatingSection>
              <TotalRating>
                {"("}
                {courseItem.totalRating}
                {")"}
              </TotalRating>
            </RatingWrapper>
            <Price>
              {"$"}
              {courseItem.price}
            </Price>
            <ButtonGroup>
              {courseItem.bestSeller && (
                <BestSellerBtn> {courseItem.bestSeller}</BestSellerBtn>
              )}
              {courseItem.newCourse && (
                <NewCourseBtn> {courseItem.newCourse}</NewCourseBtn>
              )}
            </ButtonGroup>
          </CardBody>
        </a>
      </Link>
    </Container>
  );
};

export default Card;
