import styled, { css } from "styled-components";

interface SelectProps {
  open: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

interface OptionItemProps {
  disabled?: boolean;
  borderColor?: string;
  boxShadow?: boolean;
  background?: string;
}
export const Container = styled.div<OptionItemProps>`
  position: relative;

  /* height: 2rem; */

  /* border: 1px solid gray; */
  border-radius: 4px;

  /* &:hover {
    border-color: ${({ borderColor }) => borderColor || "#000000"};
    background-color: ${({ background }) => background};
  }

  &:focus {
    outline: none;
    border-color: ${({ borderColor }) => borderColor || "#000000"};
    box-shadow: ${({ boxShadow }) =>
    boxShadow ? "0 0 4px rgba(72, 164, 249, 0.52)" : "none"};
  } */

  p {
    font-size: 12px;
    font-weight: 400;
    color: gray;
    margin: 0;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          &:hover {
            border-color: gray;
          }
        `
      : ""}
`;

interface ButtonProps extends SelectProps {
  color?: string;
  padding?: string;
}
export const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ padding }) => padding || "4px"};

  background-color: #fff;
  border: 1px solid gray;
  border-radius: 5px;

  cursor: pointer;
  user-select: none;

  p {
    color: ${({ color }) => color};
    margin: 0;
  }

  & > svg {
    transition: transform 0.3s;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "")};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0;
  }

  &[disabled] {
    background-color: gray;
    pointer-events: none;

    p {
      color: gray;
    }
  }
`;

interface ContentProps extends SelectProps {
  position?: "top" | "bottom";
  height?: number;
}
export const Content = styled.div<ContentProps>`
  position: absolute;
  width: inherit;
  max-height: 18rem;
  bottom: 120%;
  left: -15%;
  background: #ffffff;
  /* border: 1px solid gray; */
  border-radius: 4px;

  /* margin-top: ${({ position, height }) =>
    position === "bottom" ? 10 : -(31 + (height ?? 0))}px; */

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  z-index: 100;
  /* overflow-y: scroll; */
  overflow-x: hidden;

  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: opacity 0.3s;
`;

export const OptionItem = styled.div<OptionItemProps>`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 12px;
  color: #252728;

  padding: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          &:hover {
            background-color: inherit;
          }
        `
      : ""}
`;
