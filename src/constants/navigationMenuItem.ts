import { ArrowRight, Bell, MessageCircle, Settings, User2, type LucideProps } from "lucide-react";

// 메뉴 아이템 타입 정의
export interface MenuItem {
  id: number;
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  route: string;
}

// 네비게이션 메뉴 아이템들
export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: "내 정보", icon: User2, route: "/home" },
  { id: 2, label: "알림", icon: Bell, route: "/notification" },
  { id: 3, label: "바로가기", icon: ArrowRight, route: "/shortcut" },
  { id: 4, label: "채팅", icon: MessageCircle, route: "/chat" },
  { id: 5, label: "설정", icon: Settings, route: "/settings" },
];