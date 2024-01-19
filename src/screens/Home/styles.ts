import styled from "styled-components";

export const MainHome = styled.div`
  width: 100%;
  display: flex;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 0px 80px 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const ContainerHeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 0px 20px 5px;
`;
export const HomeContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

export const ContentTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 60px 0px 30px;
`;
export const TableTitle = styled.h1`
  color: #1e2837;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;
export const TableDescription = styled.span`
  color: #9498a7;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
`;
