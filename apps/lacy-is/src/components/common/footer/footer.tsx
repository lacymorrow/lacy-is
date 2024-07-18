import { cn } from "@/lib/utils";
import React from "react";

type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer
      {...props}
      className={cn(
        "flex flex-col items-center border-y border-border text-foreground",
        props.className
      )}
    >
      <div className="p-sm max-w-lg">
        <p>Be better.</p>
      </div>
      {props?.children}
    </footer>
  );
};
