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
    const [ellipsisEvery, setEllipsisEvery] = useState(4);

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

    const generatePaginationArray = () => {
      const visiblePages = 3;
      const sidePages = Math.floor(4 / 2);

      let startPage = Math.max(1, currentPage - sidePages);
      let endPage = Math.min(pageTotal, startPage + visiblePages - 1);

      if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
      }

      const paginationArray = [];

      if (startPage > 1) {
        paginationArray.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        paginationArray.push(i);
      }

      if (endPage < pageTotal - 3) {
        paginationArray.push("...");
        paginationArray.push(pageTotal - 2);
        paginationArray.push(pageTotal - 1);
        paginationArray.push(pageTotal);
      }

      return paginationArray;
    };

    // const totalPagesArray = generatePaginationArray();

    return (
      <WrrapperPagination ref={ref}>
        <PaginationContainer>
          <ButtonContainer $isVisible={currentPage > 1} onClick={onPrevPage}>
            <ArrowBackwardsNoBorderIcon />
            <TextPagination>Anterior</TextPagination>
          </ButtonContainer>

          <ContainerItens>
            {React.Children.toArray(
              generatePaginationArray().map((total, i, arr) => (
                <TextValuePagination
                  onClick={() =>
                    total === "..." ? null : onPageSelect(Number(total))
                  }
                  $isActive={total === currentPage}
                  $isEllipsis={total === "..."}
                >
                  {total}
                </TextValuePagination>
              ))
            )}
          </ContainerItens>

          <ButtonContainer
            $isVisible={currentPage < pageTotal}
            onClick={onNextPage}
          >
            <TextPagination>Próximo</TextPagination>
            <ArrowForwardNoBorderIcon />
          </ButtonContainer>
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
