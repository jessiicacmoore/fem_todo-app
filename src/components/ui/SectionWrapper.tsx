import React from "react";
import classNames from "classnames";

type SectionWrapperProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SectionWrapper({
  children,
  className = "",
  ...props
}: SectionWrapperProps) {
  return (
    <div
      className={classNames(
        "my-4 rounded-lg bg-light-gray-100 p-4 shadow-lg dark:bg-dark-blue-800",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
