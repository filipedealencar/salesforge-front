import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

interface CustomSkeletonProps {
  params: {
    count: number;
    width?: string;
    height?: number;
    style?: React.CSSProperties;
  };
}

const StyleSkeleton = styled.div<{ $width: string }>`
  display: flex;
  align-items: center;
  width: ${({ $width }) => ($width ? `${$width}` : "100%")};
  border-bottom: 1px solid #e5e6e6;
  padding: 1vh 0;

  span {
    width: ${({ $width }) => ($width ? `${$width}` : "100%")};
    span {
      width: 100%;
    }
  }
`;

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
  params: { count, width = "100%", style },
}) => {
  return (
    <div style={style}>
      {Array(count)
        .fill(1)
        .map((_, index) => (
          <StyleSkeleton $width={`${width}px`} key={index}>
            <Skeleton
              style={{ marginRight: "10px", width: `${width}px` }}
              height="70px"
              borderRadius="4px"
            />
          </StyleSkeleton>
        ))}
    </div>
  );
};

export default CustomSkeleton;
