import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className }: Props) => {
  return (
    <button
      className={cn(
        "bg-blue-500 text-white rounded-full  font-medium px-8 py-2.5 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
