import React from "react";
import { LucideIcon } from "lucide-react";

interface SymbolBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SymbolBadge({
  icon: Icon,
  size = "md",
  className = "",
}: SymbolBadgeProps) {
  const sizeClasses = {
    sm: "w-10 h-10 p-2 rounded-xl",
    md: "w-13 h-13 p-3.5 rounded-2xl",
    lg: "w-16 h-16 p-4 rounded-3xl",
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 30,
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 bg-green-100 text-green-700 border border-green-200/80 shadow-xs transition-transform duration-200 group-hover:scale-105 ${sizeClasses[size]} ${className}`}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.2} className="text-green-700" />
    </div>
  );
}
