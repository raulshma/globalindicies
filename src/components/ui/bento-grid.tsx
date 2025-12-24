import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 border border-border bg-card text-card-foreground group/bento shadow-hard hover:shadow-hard-lg transition-all duration-200 justify-between flex flex-col space-y-4 p-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        {icon}
        <div className="font-bold text-lg text-foreground mb-1 mt-2">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-xs">
          {description}
        </div>
        {children}
      </div>
    </div>
  );
};
