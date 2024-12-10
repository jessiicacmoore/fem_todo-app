import classNames from "classnames";
import React from "react";

type FloatingLabelInputProps = {
  className?: string;
  id: string;
  name: string;
  value: string;
  changeHandler: (value: string) => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

function FloatingLabelInput({
  className,
  id,
  name,
  value,
  changeHandler,
  children,
  ...props
}: FloatingLabelInputProps) {
  const inputGroupClasses = classNames("group relative", className);
  return (
    <div className={inputGroupClasses}>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        required
        className="peer block w-full bg-transparent py-4 dark:text-dark-gray-100"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute top-4 transform text-light-gray-300 transition-transform group-focus-within:-translate-y-12 group-focus-within:text-light-gray-100 peer-valid:-translate-y-12 peer-valid:text-light-gray-100 dark:text-dark-gray-300"
      >
        {children}
      </label>
    </div>
  );
}

export default FloatingLabelInput;
