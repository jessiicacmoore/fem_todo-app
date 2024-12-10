import classNames from "classnames";

type FilterButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  const btnClasses = classNames(
    "text-light-gray-300 dark:text-dark-gray-300",
    { "hover:text-light-gray-500 :dark:hover:text-dark-gray-100": !isActive },
    {
      "text-primary-brightBlue dark:text-primary-brightBlue cursor-default":
        isActive,
    },
  );
  return (
    <button
      aria-pressed={isActive}
      onClick={onClick}
      className={btnClasses}
      disabled={isActive}
    >
      {label}
    </button>
  );
}

export default FilterButton;
