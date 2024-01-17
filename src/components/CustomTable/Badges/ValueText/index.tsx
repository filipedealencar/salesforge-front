import { ContainerBadgeText } from "./styles";

export const BadgeText: React.FC<PropsBadgeText> = ({
  name,
  callBack,
  odd,
}) => {
  return (
    <ContainerBadgeText $isColorBg={odd % 2 !== 0} onClick={callBack}>
      {name}
    </ContainerBadgeText>
  );
};
