import React from "react";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={classNames("container mx-auto px-6", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
