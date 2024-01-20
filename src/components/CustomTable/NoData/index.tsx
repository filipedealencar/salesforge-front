import React, { CSSProperties, ReactNode } from "react";
import { Card, Container, Content } from "./styles";
import { TableNoData } from "@/icons";

interface NoDataProps {
  text?: string;
  subText?: string | ReactNode;
  icon?: ReactNode;
  style?: {
    container?: CSSProperties;
    card?: CSSProperties;
    content?: CSSProperties;
    iconSvg?: CSSProperties;
    title?: CSSProperties;
    subtitle?: CSSProperties;
  };
}

const NoData: React.FC<NoDataProps> = ({
  icon,
  text = "Não há dados",
  subText,
  style,
}) => {
  const RenderSubText = () => {
    if (!subText) return null;

    if (typeof subText === "string") {
      return <span style={style?.subtitle ?? {}}>{subText}</span>;
    }

    return <>{subText}</>;
  };

  return (
    <Container style={style?.container ?? {}}>
      <Card style={style?.card ?? {}}>
        <Content style={style?.content ?? {}}>
          {icon ?? <TableNoData style={style?.iconSvg ?? {}} />}
          <h1 style={style?.title ?? {}}>{text}</h1>
          <RenderSubText />
        </Content>
      </Card>
    </Container>
  );
};

export default NoData;
