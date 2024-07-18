import { cn } from "@/lib/utils";
import React from "react";

type PProps = React.HTMLProps<HTMLParagraphElement>;

export const P: React.FC<PProps> = (props) => {
  return (
    <p {...props} className={cn("text-foreground", props.className)}>
      {props.children}
    </p>
  );
};
