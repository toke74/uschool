import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from "./singleCourseStyle";
import Card from "../../card/Card";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIos
        style={{ color: "white", fontSize: "20px", fontWeight: 700 }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "white", fontSize: "20px", fontWeight: 700 }}
      />
    </div>
  );
};

const SingleCourse = ({ course, category }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
        {course.map((courseItem) => (
          <Card key={courseItem.id} courseItem={courseItem} />
        ))}
      </Slider>
    </Container>
  );
};

export default SingleCourse;
