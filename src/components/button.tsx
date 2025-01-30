import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

const CButton = ({
  children,
  icon,
  ...props
}: {
  children: React.ReactNode;
  icon?: any;
  [key: string]: any;
}) => {
  return (
    <Button
      {...props}
      className=" hover:bg-secondary hover:text-primary transition-all text-lg py-5 px-6 items-center text-secondary border-secondary border-2 rounded-full"
    >
      {children}
      {icon}
    </Button>
  );
};

export default CButton;
