import styled from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 360px;
  height: 320px;
  margin: auto;

  background: #4ad2d26c;

  backdrop-filter: blur(5.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 39px;
`;

export const Diagrams = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  h2 {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    background: #43cccc;
    mix-blend-mode: normal;
    opacity: 1;
    border-radius: 22px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    text-transform: capitalize;
    padding: 5px 7px;
    color: #ffffff;
  }
`;
