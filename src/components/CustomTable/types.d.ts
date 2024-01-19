interface ICustomTable {
  data: Array<any>;
  visiblePages: number;
  pageTotal: number;
  pageSize: number;
  totalRows?: number;
  pageChangeHandler?: (currentPage: number) => void;
  onPageSizeChange?: (currentPage: number, pageSize: number) => void;
}
