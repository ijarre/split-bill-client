import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  isLoading?: boolean | undefined;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={` bg-cream-10 p-2 rounded-md hover:bg-green-40 hover:text-white text-gray-800  border-2 border-green-40 hover:border-cream-10 active:bg-green-40/75 `}>{children}</button>;
};
