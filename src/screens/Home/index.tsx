import {
  ButtonFilter,
  ContainerTextTitle,
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
import { CustomFlyout } from "@/components/CustomFlyout";

const Home: React.FC = ({}) => {
  const [salesData, setSalesData] = useState<SalesResponse>({
    data: [],
    pageInfo: {
      currentPage: 0,
      pageSize: 0,
      totalPages: 0,
      totalItems: 0,
    },
  });

  const [openFlyout, setOpenFlyout] = useState(false);
  const [loadRequest, setLoadRequest] = useState(false);

  const fetchPage = (params?: {
    idBandeiraCartao?: string;
    idAdquirente?: string;
    dataVenda?: string;
    pageSize?: string;
    page?: string;
  }) => {
    setLoadRequest(true);
    getAllSales(params)
      .then((res) => setSalesData(res))
      .finally(() =>
        setTimeout(() => {
          setLoadRequest(false);
        }, 1000)
      );
  };

  useEffect(() => {
    fetchPage();
  }, []);

  const dataSale =
    //   useMemo(() => {
    //     return
    !Array.isArray(salesData.data)
      ? []
      : salesData.data.map((item, index) => {
          return {
            id: <BadgeText name={String(item.id_adquirente)} odd={index} />,
            "numero do cartão": (
              <BadgeText name={String(item.numero_cartao)} odd={index} />
            ),
            valor: <BadgeText name={String(item.valor)} odd={index} />,
            parcelas: (
              <BadgeText name={String(item.numero_parcelas)} odd={index} />
            ),
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
    <>
      <MainHome>
        <Sidebar isOpen={true} refSideBar={null} />
        <HomeWrapper>
          <ContainerTextTitle>
            <ContentTextTitle>
              <TableTitle>Vendas</TableTitle>
              <TableDescription>
                Nessa tela você tem acesso as informações detalhadas a respeito
                das vendas
              </TableDescription>
              <TableDescription>{`${salesData.pageInfo.totalItems} Resultados encontrados`}</TableDescription>
            </ContentTextTitle>
            <ButtonFilter onClick={() => setOpenFlyout((state) => !state)}>
              Filtros
            </ButtonFilter>
          </ContainerTextTitle>
          <CustomTable
            loading={loadRequest}
            pageChangeHandler={(currentPage, pageSize) => {
              fetchPage({
                page: String(currentPage),
                pageSize: String(pageSize),
              });
            }}
            onPageSizeChange={(currentPage, pageSize) => {
              fetchPage({
                // page: String(currentPage),
                pageSize: String(pageSize),
              });
            }}
            visiblePages={salesData.pageInfo.totalItems}
            pageSize={salesData.pageInfo.pageSize}
            pageTotal={salesData.pageInfo.totalPages}
            data={dataSale}
          />
        </HomeWrapper>
      </MainHome>
      <CustomFlyout
        filterCallback={(type, val) => fetchPage({ [type]: String(val) })}
        isOpen={openFlyout}
        closedFlyout={(val) => {
          setOpenFlyout(val);
        }}
      />
    </>
  );
};

export default Home;
