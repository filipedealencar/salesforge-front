import styled from "styled-components";

export const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  background-color: #2d695a;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.1);
  min-width: 100px;

  z-index: 99;
  /* transform: translateX(${({ $isOpen }) => ($isOpen ? 100 : 0)}%); */
  right: 100%;
  transition: transform 0.5s ease-out 0s;

  ${({ theme, $isOpen }) => theme.media.max.mobileXL`  
 ${$isOpen ? "transform: translateX(100%)" : "transform: translateX(0%)"} ;
 position: fixed;
   `}
`;

export const ButtonSidebar = styled.div<{ $customHeight?: number }>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  height: ${({ $customHeight }) => $customHeight}px;
  overflow: ${({ $customHeight }) => $customHeight && "auto"};
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
export const ContentIcon = styled.div`
  padding: 10px 20px;
  background: #235a4b;
  border-radius: 10px;
`;

export const ContentAvatar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const TextIcon = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#2d695a" : "#fff")};
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
`;

export const ContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 100px;
    height: 50px;

    path {
      fill: #fff;
    }
  }
`;

export const ContentIconLoupeSidebar = styled.div`
  position: relative;
  padding: 0px 20px 20px 20px;
  svg {
    width: 50px;
    height: 30px;

    path {
      fill: #fff;
    }
  }
`;

export const OpenSearchMobileSidebar = styled.div<{
  $isOpen: boolean;
  $customWidth: number;
}>`
  position: absolute;
  z-index: 999;
  width: ${({ $customWidth }) => $customWidth}px;
  margin-left: auto;
  margin-right: auto;
  left: 140px;
  text-align: center;
  top: ${({ $isOpen }) => ($isOpen ? "-50%" : "-500%")};
  transition: all 0.5s ease-out 0s;
`;

export const ContainerSeparator = styled.div`
  padding: 0 20px;
`;

export const SeparatorLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
`;
