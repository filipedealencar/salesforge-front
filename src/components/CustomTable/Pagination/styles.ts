import styled from "styled-components";

export const WrrapperPagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 56px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const ContainerItens = styled.div`
  display: flex;
  gap: 4px;
`;

export const PageNavigationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div<{ $isVisible: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;
export const TextPagination = styled.span`
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  user-select: none;
`;
export const TextValuePagination = styled.span<{
  $isActive?: boolean;
  $isEllipsis: boolean;
}>`
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding: 10px 18px;
  user-select: none;
  border-radius: 10px;
  cursor: ${({ $isEllipsis }) => ($isEllipsis ? "default" : "pointer")};
  color: ${({ $isActive }) => $isActive && "#fff"};
  background: ${({ $isActive }) => ($isActive ? "#2d695a" : "none")};
`;

export const ContentSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TextSelect = styled.span`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #797979;
  user-select: none;
`;
