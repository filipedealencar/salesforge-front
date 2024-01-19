import {
  ArrowBackwardsNoBorderIcon,
  ArrowForwardNoBorderIcon,
} from "../../../icons";
import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  ContainerItens,
  ContentSelect,
  PageNavigationContainer,
  PaginationContainer,
  TextPagination,
  TextSelect,
  TextValuePagination,
  WrrapperPagination,
} from "./styles";
import { useSearchParams } from "next/navigation";
import { Select } from "./Select";

interface PaginationProps {
  visiblePages: number;
  pageSize: number;
  pageTotal: number;
  totalRows?: number;
  pageChangeHandler?: (currentPage: number) => void;
  onPageSizeChange?: (currentPage: number, pageSize: number) => void;
  ref?: React.RefObject<HTMLDivElement>;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      pageTotal,
      pageSize,
      totalRows = 10,
      pageChangeHandler,
      onPageSizeChange,
    },
    ref
  ) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPagesArray, setTotalPagesArray] = useState<number[]>([]);

    useEffect(() => {
      setTotalPagesArray(
        Array.from({ length: pageTotal }, (_, index) => index + 1)
      );

      console.log(totalPagesArray);
    }, [totalRows, pageSize, pageTotal]);

    useEffect(() => {
      if (currentPage) {
        pageChangeHandler?.(currentPage);
      }
    }, [currentPage]);

    const onNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
    const onPrevPage = () => {
      setCurrentPage(currentPage - 1);
    };
    const onPageSelect = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

    return (
      <WrrapperPagination ref={ref}>
        <PaginationContainer>
          {currentPage > 1 && (
            <ButtonContainer onClick={onPrevPage}>
              <ArrowBackwardsNoBorderIcon />
              <TextPagination>Anterior</TextPagination>
            </ButtonContainer>
          )}
          <ContainerItens>
            {React.Children.toArray(
              totalPagesArray.map((total, i, arr) => (
                <TextValuePagination
                  onClick={() => onPageSelect(total)}
                  $isActive={total === currentPage}
                >
                  {total}
                </TextValuePagination>
              ))
            )}
          </ContainerItens>
          {currentPage < pageTotal && (
            <ButtonContainer onClick={onNextPage}>
              <TextPagination>Próximo</TextPagination>
              <ArrowForwardNoBorderIcon />
            </ButtonContainer>
          )}
        </PaginationContainer>
        <ContentSelect>
          <TextSelect>Linhas por página</TextSelect>
          <Select
            // width={54}
            backgroundColor={"#fff"}
            options={[
              { value: "10", label: "10" },
              { value: "25", label: "25" },
              { value: "50", label: "50" },
            ]}
            onChange={(option) => {
              onPageSizeChange && onPageSizeChange(currentPage, Number(option));
            }}
          />
        </ContentSelect>
      </WrrapperPagination>
    );
  }
);
