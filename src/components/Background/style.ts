import styled from "styled-components";
import BgImage from "@assets/bg.jpg";
import TinyNoisy from "@assets/tinyNoisy.jpg";

export const StyledBackground = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  margin: 0 auto;

  @media (min-width: 1400px) {
    width: 1400px;
  }
`;

export const StyledShadow = styled.div`
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 70%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const StyledNoisy = styled.div`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100%;
  background-image: url(${TinyNoisy});
  background-position: center;
  background-size: cover;
  opacity: 5%;
  overflow-y: auto;
`;
