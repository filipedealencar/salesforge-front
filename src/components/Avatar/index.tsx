import React from "react";
import { AvatarImage, AvatarWrapper } from "./styles";

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return (
    <AvatarWrapper $size={size}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <span>{alt ? alt.charAt(0).toUpperCase() : ""}</span>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
