import styled from "styled-components";

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2vh;

  /* svg {
    width: 7vw;
    height: 17vh;
  } */
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  padding: 1vw 1vw 1.15vw 2vw;
  border-radius: 5px;
  /* height: 100vh; */
  /* max-height: 15vh; */

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 2vh;
    line-height: 2vh;
    color: #252728;
  }
  span {
    width: 60%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.55vh;
    line-height: 2vh;
    text-align: center;
    color: #8f9194;
  }
`;
