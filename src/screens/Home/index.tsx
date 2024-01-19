import {
  ContentTextTitle,
  HomeWrapper,
  MainHome,
  TableDescription,
  TableTitle,
} from "./styles";
import CustomTable from "@/components/CustomTable";
import { BadgeText } from "@/components/CustomTable/Badges/ValueText";
import { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useRouter } from "next/router";
import Sidebar from "@/patterns/Sidebar";
import { SalesResponse } from "@/services/types";
import { getAllSales } from "@/services/api/sales";

const Home: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [salesData, setSalesData] = useState<SalesResponse>({
    data: [],
    pageInfo: {
      currentPage: 0,
      pageSize: 0,
      totalPages: 0,
      totalItems: 0,
    },
  });

  const mock = [
    // Venda 1
    {
      value: "150.0",
      cardNumber: "1234-5678-9012-3456",
      id_adquirente: "1",
      numero_parcelas: "3",
      id_bandeira_cartao: "2",
      data_venda: "2024-01-20",
    },

    // Venda 2
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
    {
      value: "99.99",
      cardNumber: "9876-5432-1098-7654",
      id_adquirente: "2",
      numero_parcelas: "2",
      id_bandeira_cartao: "1",
      data_venda: "2024-01-21",
    },
  ];

  const fetchPage = (params?: {
    idBandeiraCartao?: string;
    idAdquirente?: string;
    dataVenda?: string;
    pageSize?: string;
    page?: string;
  }) => {
    getAllSales(params).then((res) => setSalesData(res));
  };

  useEffect(() => {
    fetchPage();
  }, []);

  const dataSale =
    //   useMemo(() => {
    //     return
    salesData.data.map((item, index) => {
      return {
        id: <BadgeText name={String(item.id_adquirente)} odd={index} />,
        "numero do cartão": (
          <BadgeText name={String(item.numero_cartao)} odd={index} />
        ),
        valor: <BadgeText name={String(item.valor)} odd={index} />,
        parcelas: <BadgeText name={String(item.numero_parcelas)} odd={index} />,
        "id bandeira do cartão": (
          <BadgeText name={String(item.id_bandeira_cartao)} odd={index} />
        ),
        "data da venda": (
          <BadgeText
            name={new Date(item.data_venda).toLocaleDateString()}
            odd={index}
          />
        ),
      };
      //   const { Parcelas, Bandeira, ...rest } = itens;
      //   return sizeScreen.width > 770 && sizeScreen.width < 1012
      //     ? { ...rest, Bandeira }
      //     : sizeScreen.width > 640 && sizeScreen.width < 770
      //     ? rest
      //     : itens;
    });
  //   }, [mock, sizeScreen.width]);

  console.log(salesData);

  return (
    <MainHome>
      <Sidebar isOpen={true} refSideBar={null} />
      <HomeWrapper>
        <ContentTextTitle>
          <TableTitle>Vendas</TableTitle>
          <TableDescription>
            Nessa tela você tem acesso as informações detalhadas a respeito das
            vendas
          </TableDescription>
          <TableDescription>{`${salesData.pageInfo.totalItems} Resultados encontrados`}</TableDescription>
        </ContentTextTitle>
        <CustomTable
          pageChangeHandler={(val) => fetchPage({ page: String(val) })}
          onPageSizeChange={(val, pageSize) => {
            fetchPage({ pageSize: String(pageSize) });
          }}
          visiblePages={salesData.pageInfo.totalItems}
          pageSize={salesData.pageInfo.pageSize}
          pageTotal={salesData.pageInfo.totalPages}
          data={dataSale}
          // totalRows={salesData.pageInfo.totalPages}
        />
      </HomeWrapper>
    </MainHome>
  );
};

export default Home;
