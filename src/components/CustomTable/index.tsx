import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTable } from "react-table";
import {
  TableStyle,
  TheadStyle,
  TRStyle,
  THStyle,
  TbodyStyle,
  TDStyle,
  TableWrapper,
  ContainerTable,
} from "./styles";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Pagination } from "./Pagination";
import CustomSkeleton from "../CustomSkeleton";
import NoData from "./NoData";

const CustomTable: React.FC<ICustomTable> = ({
  data,
  visiblePages,
  pageSize,
  pageTotal,
  totalRows,
  loading,
  pageChangeHandler,
  onPageSizeChange,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const { sizeScreen } = useContext(GlobalContext);
  const [tableSize, setTableSize] = useState(0);

  useEffect(() => {
    setTableSize(tableRef.current?.getBoundingClientRect().width ?? 100);
  }, [sizeScreen, tableRef.current]);

  const columns = useMemo(() => {
    if (data.length === 0) {
      return [];
    }

    const sampleItem = data[0];
    return Object.keys(sampleItem).map((key) => ({
      Header: key,
      accessor: key.toLowerCase(),
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <TableWrapper>
        <ContainerTable
          style={{
            height: `calc(100vh - 274px)`,
          }}
        >
          <TableStyle ref={tableRef} {...getTableProps()}>
            <TheadStyle>
              {React.Children.toArray(
                headerGroups.map((headerGroup, index) => (
                  <TRStyle
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((column) => (
                      <THStyle {...column.getHeaderProps()} key={column.id}>
                        {column.render("Header")}
                      </THStyle>
                    ))}
                  </TRStyle>
                ))
              )}
            </TheadStyle>
            {data.length > 0 ? (
              loading ? (
                <CustomSkeleton
                  params={{
                    count: 10,
                    width: `${tableSize - 20}`,
                    style: {
                      width: tableSize,
                      position: "absolute",
                      height: "calc(100vh - 312px)",
                      overflow: "scroll",
                    },
                  }}
                />
              ) : (
                <TbodyStyle {...getTableBodyProps()}>
                  {React.Children.toArray(
                    rows.map((row, index) => {
                      prepareRow(row);
                      return (
                        <TRStyle {...row.getRowProps()} key={row.id}>
                          {row.cells.map((cell) => {
                            return (
                              <TDStyle
                                {...cell.getCellProps()}
                                key={cell.column.id}
                              >
                                {cell.render("Cell")}
                              </TDStyle>
                            );
                          })}
                        </TRStyle>
                      );
                    })
                  )}
                </TbodyStyle>
              )
            ) : (
              <NoData />
            )}
          </TableStyle>
        </ContainerTable>
      </TableWrapper>
      <Pagination
        onPageSizeChange={onPageSizeChange}
        pageChangeHandler={pageChangeHandler}
        totalRows={totalRows}
        visiblePages={visiblePages}
        pageSize={pageSize}
        pageTotal={pageTotal}
      />
    </>
  );
};

export default CustomTable;
