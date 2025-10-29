import type { BoxProps } from "@/types/components";

export default function Box({
  children,
  width = "w-full",
  height = "h-auto",
  className = "",
}: BoxProps) {
  const sizeClasses = `${width} ${height}`;
  return (
    <div className={`p-4 bg-gray-100 rounded-2xl ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
}
