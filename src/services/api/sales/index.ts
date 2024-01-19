import { SalesResponse, SaleData } from "@/services/types";
import { IHttpResponse } from "../../data/IHttpClient";
import { SWRHttpClient } from "../../http/SWRHttpClient";

export async function getAllSales(params?: {
  idBandeiraCartao?: string;
  idAdquirente?: string;
  dataVenda?: string;
  pageSize?: string;
  page?: string;
}): Promise<SalesResponse> {
  const valueFilters: string[] = [];

  type Type = keyof typeof params;

  for (const key in params) {
    if (params.hasOwnProperty(key))
      if (params.hasOwnProperty(key)) {
        params[key as Type] !== undefined &&
          valueFilters?.push(`${key}=${params[key as Type]}`);
      }
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIS_BASE_URL}/?${
        params ? `${valueFilters.join("&")}` : ""
      }`
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição GET: ${response.statusText}`);
    }

    const data: SalesResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
