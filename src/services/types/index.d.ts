export interface SaleData {
  id_venda: number;
  valor: string;
  numero_cartao: string;
  id_adquirente: number;
  numero_parcelas: number;
  id_bandeira_cartao: number;
  data_venda: string;
}

export interface PageInfo {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export interface SalesResponse {
  data: SaleData[];
  pageInfo: PageInfo;
}
