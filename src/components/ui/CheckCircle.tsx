import classNames from "classnames";
import iconCheck from "../../assets/images/icon-check.svg";

type CheckCircleProps = {
  completed?: boolean;
};

function CheckCircle({ completed = false }: CheckCircleProps) {
  const circleClasses = classNames(
    "h-6 w-6 rounded-full border border-light-gray-200 grid place-items-center dark:border-dark-gray-400 relative",
    { "bg-check-gradient": completed },
  );
  return (
    <div className={circleClasses}>
      {completed && <img src={iconCheck} alt="" aria-hidden="true" />}
    </div>
  );
}

export default CheckCircle;
