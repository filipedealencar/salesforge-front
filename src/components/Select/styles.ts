import styled from "styled-components";

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;
export const SelectLabel = styled.span`
  white-space: nowrap;
`;

interface BoxSelectProps {
  selected: boolean;
  hasBorder?: boolean;
  padding?: string;
  width?: number;
}

export const BoxSelect = styled.div<BoxSelectProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${({ padding }) => (padding ? padding : "8px")};
  gap: 8px;
  border: ${({ hasBorder }) => hasBorder && "1px solid rgb(212, 213, 214)"};
  border-radius: ${({ selected }) => (selected ? "4px 4px 0px 0px" : "4px")};
  cursor: pointer;
  width: 100%;
`;

interface ContainerOptionsProps {
  active: boolean;
  width?: number;
}

export const ContainerOptions = styled.div<ContainerOptionsProps>`
  position: absolute;
  opacity: 1;
  display: ${({ active }) => (active ? "flex" : "none")};
  background: rgb(255, 255, 255);
  /* border: 1px solid rgb(212, 213, 214); */
  /* border-radius: 0px 0px 4px 4px; */
  padding: 5px 20px;
  z-index: 100;
  overflow: hidden;
  transition: all 0.3s ease 0s;
  left: -0.5%;
  top: 100%;
  max-height: 22vh;
  overflow-y: auto;
  min-width: 11.5rem;
  width: ${({ width }) => (width ? `${width}px` : `101.5%`)};
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ContentOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  &:hover {
    background-color: #e7e7e7;
  }
`;

export const BoxOptions = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8f9194;
  padding: 8px;
`;

export const OptionSelected = styled.span`
  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8f9194;
`;

export const ContainerTextStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

interface TitleProps {
  type: string;
  color: string;
  backgroundColor: string;
}

export const ContentTitle = styled.div<TitleProps>`
  width: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 8px;
  background: #ffffff;
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 16px;
`;

export const IconTitle = styled.div<TitleProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
  text-align: center;
  color: rgb(255, 255, 255);
  font-style: normal;
  font-weight: 500;
  font-size: 1.4vh;
  line-height: 2vh;
  padding-top: 2%;
  display: inline-block !important;
`;

export const Title = styled.span<TitleProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4vh;
  line-height: 2vh;
  color: ${({ color }) => color};
`;
