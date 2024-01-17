import styled from "styled-components";

export const ContainerBadgeText = styled.span<{ $isColorBg: boolean }>`
  color: #757575;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  background: ${({ $isColorBg }) => ($isColorBg ? "#f0f0f5" : "#fff")};
  width: 100%;
  padding: 1px;
`;
