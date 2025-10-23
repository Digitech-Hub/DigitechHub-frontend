import type { NavItemPropsModified } from "@/types/components";
import { Link } from "react-router";

const BaseLinkStyle =
  "text-[1.375rem] h-20 px-6 flex items-center font-medium transition-colors no-underline hover:text-gray-700 hover:bg-gray-50 leading-none";

export default function NavItem({
  item,
  onMouseEnter,
}: NavItemPropsModified) {
  return (
    <Link
      to={item.path}
      className={BaseLinkStyle}
      onMouseEnter={() => onMouseEnter(item.name)}
    >
      {item.name}
    </Link>
  );
}
