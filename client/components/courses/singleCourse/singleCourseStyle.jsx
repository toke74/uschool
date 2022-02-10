import styled from "styled-components";

export const Container = styled.div`
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    background: #000;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .slick-prev {
    top: 20%;
    left: 0;
  }
  .slick-next {
    right: 0;
    top: 20%;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;
