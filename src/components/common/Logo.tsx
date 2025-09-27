import type { LogoProps } from "@/types/components";
import { useTheme } from "@/contexts/ThemeContext";

export const Logo = ({
  size = "lg",
  animated = true,
  theme = "gradient",
  className = "",
}: LogoProps) => {
  const { isDark } = useTheme();

  // 크기별 스타일 매핑
  const sizeClasses = {
    sm: "text-2xl/8",
    md: "text-3xl/10",
    lg: "text-4xl/12",
    xl: "text-5xl/14",
  };

  // 테마별 스타일 매핑
  const getThemeClasses = () => {
    switch (theme) {
      case "gradient":
        return "text-white bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-clone";
      case "white":
        return isDark ? "text-white" : "text-gray-900";
      case "black":
        return isDark ? "text-gray-900" : "text-gray-900";
      default:
        return "text-white bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-clone";
    }
  };

  const animationClass = animated ? "animate-logo-sync max-w-0" : "";
  const baseClasses = "px-2 overflow-hidden font-bold";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <span
        className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${getThemeClasses()} 
        ${animationClass}
      `}
      >
        Digitech
      </span>
      <span
        className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${getThemeClasses()} 
        ${animationClass}
      `}
      >
        Hub
      </span>
    </div>
  );
};

export default Logo;
