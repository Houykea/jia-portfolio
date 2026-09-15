import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow border border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export default Card