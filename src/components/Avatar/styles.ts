import { styled } from "styled-components";

export const AvatarWrapper = styled.div<{ $size?: string }>`
  width: ${(props) => (props.$size ? props.$size : "40px")};
  height: ${(props) => (props.$size ? props.$size : "40px")};
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
