import React from "react";
import { SkeletonStyle } from "./style";
import classNames from "classnames";

const Skeleton = ({
  shape,
  width,
  height,
  children,
  ...props
}: {
  shape?: string;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <SkeletonStyle
      style={{ width, height }}
      {...props}
      className={classNames(shape, props.className)}
    >
      {children}
    </SkeletonStyle>
  );
};

export default Skeleton;
