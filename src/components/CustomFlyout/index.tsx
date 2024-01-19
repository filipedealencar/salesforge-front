import {
  ContainerFlyout,
  ContentFlyout,
  HeaderFlyout,
  MainFlyout,
  ContentButtonCloseFlyout,
  TitleFlyout,
  ContentSelect,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Select } from "../Select";
import { Backdrop } from "../Backdrop";
import CustomCollapse from "../CustomCollapse";

export const CustomFlyout: React.FC<IFlayout> = ({
  isOpen,
  closedFlyout,
  filterCallback,
}) => {
  const refFlyout = useRef<HTMLDivElement>(null);

  const [openFlyout, setOpenFlyout] = useState(false);

  //   useOutsideClick({
  //     ref: refFlyout,
  //     callback: () => {
  //       setOpenFlyout(false);
  //       closedFlyout(!openFlyout);
  //     },
  //   });

  useEffect(() => {
    setOpenFlyout(isOpen);
  }, [isOpen]);

  return (
    <>
      <MainFlyout ref={refFlyout} $isOpen={openFlyout}>
        <ContainerFlyout>
          <ContentButtonCloseFlyout onClick={() => closedFlyout(!openFlyout)}>
            X
          </ContentButtonCloseFlyout>
          <ContentFlyout>
            <HeaderFlyout>
              <TitleFlyout>Selecione os filtros que deseja aplicar</TitleFlyout>
            </HeaderFlyout>
            <ContentSelect>
              <CustomCollapse
                openCollapse={!openFlyout}
                filterBy={(val) => {
                  filterCallback("idBandeiraCartao", val);
                  closedFlyout(!openFlyout);
                }}
                title="ID da Bandeira do Cartão"
                options={[
                  {
                    label: "1",
                    value: "1",
                  },
                  {
                    label: "2",
                    value: "2",
                  },
                  {
                    label: "3",
                    value: "3",
                  },
                  {
                    label: "4",
                    value: "4",
                  },
                  {
                    label: "5",
                    value: "5",
                  },
                  {
                    label: "6",
                    value: "6",
                  },
                  {
                    label: "7",
                    value: "7",
                  },
                  {
                    label: "8",
                    value: "8",
                  },
                  {
                    label: "9",
                    value: "9",
                  },
                  {
                    label: "10",
                    value: "10",
                  },
                ]}
              />
              <CustomCollapse
                openCollapse={!openFlyout}
                filterBy={(val) => {
                  filterCallback("idAdquirente", val);
                  closedFlyout(!openFlyout);
                }}
                title="ID do Adquirente"
                options={[
                  {
                    label: "1",
                    value: "1",
                  },
                  {
                    label: "2",
                    value: "2",
                  },
                  {
                    label: "3",
                    value: "3",
                  },
                  {
                    label: "4",
                    value: "4",
                  },
                  {
                    label: "5",
                    value: "5",
                  },
                  {
                    label: "6",
                    value: "6",
                  },
                  {
                    label: "7",
                    value: "7",
                  },
                  {
                    label: "8",
                    value: "8",
                  },
                  {
                    label: "9",
                    value: "9",
                  },
                  {
                    label: "10",
                    value: "10",
                  },
                ]}
              />
              <CustomCollapse
                openCollapse={!openFlyout}
                filterBy={(val) => {
                  filterCallback("dataVenda", val);
                  closedFlyout(!openFlyout);
                }}
                title="ID da Bandeira do Cartão"
                options={[]}
                type={"input"}
              />
            </ContentSelect>
          </ContentFlyout>
        </ContainerFlyout>
      </MainFlyout>
      <Backdrop isOpen={openFlyout} />
    </>
  );
};
