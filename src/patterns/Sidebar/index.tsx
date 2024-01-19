import { Button } from "@/components/Buttons";
import {
  ButtonSidebar,
  ContainerIcon,
  ContainerSeparator,
  ContentAvatar,
  ContentIcon,
  ContentIconLoupeSidebar,
  ContentMobile,
  OpenSearchMobileSidebar,
  SeparatorLine,
  SidebarWrapper,
  TextIcon,
} from "./styles";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useState, useRef, useContext, useEffect } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import useScreenSize from "@/hooks/useScreenSize";
import { Backdrop } from "@/components/Backdrop";
import { useRouter } from "next/router";
import { IconHome } from "@/icons";
import Avatar from "@/components/Avatar";

const Sidebar: React.FC<ISidebar> = ({ isOpen, refSideBar }) => {
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const { sizeScreen } = useContext(GlobalContext);
  const router = useRouter();
  const pathname = router.pathname;
  const screenSize = useScreenSize();

  const refContainerButtonSearch = useRef<HTMLDivElement>(null);
  const refSearchButtonMobile = useRef<HTMLDivElement>(null);
  const refContentMobile = useRef<HTMLDivElement>(null);

  const [customSizes, setCustomSizes] = useState({
    contentMobile: {
      height: refContentMobile?.current?.getBoundingClientRect().height ?? 0,
      width: 0,
    },
  });

  useEffect(() => {
    setCustomSizes((state) => {
      return {
        ...state,
        contentMobile: {
          ...state.contentMobile,
          height:
            refContentMobile?.current?.getBoundingClientRect().height ?? 0,
        },
      };
    });
  }, [sizeScreen.width, sizeScreen.height, refContentMobile, screenSize]);

  useOutsideClick({
    ref: refSearchButtonMobile ?? null,
    extraRef: refContainerButtonSearch ?? null,
    callback() {
      setIsOpenSearchButton(false);
    },
  });

  return (
    <>
      <SidebarWrapper ref={refSideBar} $isOpen={isOpen}>
        <ButtonSidebar
          $customHeight={
            sizeScreen.height - customSizes.contentMobile.height - 20
          }
        >
          <ContentAvatar>
            <Avatar size="50px" />
          </ContentAvatar>
          <ContainerSeparator>
            <SeparatorLine />
          </ContainerSeparator>

          <ContainerIcon>
            <ContentIcon>
              <IconHome />
            </ContentIcon>
          </ContainerIcon>
        </ButtonSidebar>
      </SidebarWrapper>

      <Backdrop isOpen={isOpenSearchButton} />
    </>
  );
};

export default Sidebar;
