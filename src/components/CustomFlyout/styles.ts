import styled from "styled-components";

export const MainFlyout = styled.div<MainFlyoutStyle>`
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  z-index: 999;
  top: 0;
  right: 0;
  transition: transform 0.5s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0%)" : "translateX(106%)"};

  ${({ theme }) => theme.media.max.tabletL`
    width: 330px;
  
  `}
`;

export const ContainerFlyout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-between;

  ${({ theme }) => theme.media.max.tabletL`
    padding: 38px;
  
  `}
`;

export const ContentFlyout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 70px;
`;

export const HeaderFlyout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const ContentButtonCloseFlyout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 20px;
  color: #000;
  top: 0px;
`;

export const TitleFlyout = styled.span`
  color: #000;
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentSelect = styled.div`
  width: 100%;
`;
