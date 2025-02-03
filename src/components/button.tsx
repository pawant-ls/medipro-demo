import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CButton = ({
  children,
  icon,
  white,
  className,
  ...props
}: {
  children: React.ReactNode;
  icon?: any;
  white?: boolean;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Button
      {...props}
      className={cn(
        className,
        `hover:bg-secondary hover:text-primary transition-all text-lg py-5 px-6 items-center ${
          white ? "text-white border-white" : "text-secondary border-secondary"
        }   border-2 rounded-full`
      )}
    >
      {children}
      {icon}
    </Button>
  );
};

export default CButton;
