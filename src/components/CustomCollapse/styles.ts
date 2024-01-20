import styled from "styled-components";

export const CollapseContainer = styled.div`
  width: 100%;
  /* border: 1px solid #ddd; */
  margin-bottom: 16px;
  /* overflow: hidden;
  transition: border 0.3s; */
`;

export const CollapseHeader = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8f9194;
  padding: 8px;
`;

export const CollapseContent = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  padding: ${(props) => (props.isOpen ? "10px" : "0")} 10px;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const ContentItemCollapse = styled.div`
  cursor: pointer;
  &:hover {
    background: #e7e7e7;
  }
`;

export const ItemCollapseOptions = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8f9194;
  padding: 8px;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  border: 1px solid rgb(212, 213, 214);
  border-radius: 4px;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const InputCollapse = styled.input`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: rgb(143, 145, 148);
  border: none;
  text-align: center;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonInput = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  padding: 0px 12px;
  pointer-events: visible;
  background-color: #2d695a;
  border-width: 0px;
  border-style: solid;
  border-color: #2d695a;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
`;
