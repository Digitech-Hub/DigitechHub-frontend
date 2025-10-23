import type { NavItemType } from "@/types/components";

// 메뉴 항목 데이터 구조화
export const NAV_ITEMS: NavItemType[] = [
  {
    name: "교내안내",
    path: "/info",
    columns: [
      {
        links: [
          { name: "방과후 교실 예약", path: "/info/class-reservation" },
          { name: "submenu", path: "/info/sub" },
          { name: "submenu", path: "/info/sub" },
        ],
      },
    ],
  },
  {
    name: "기자재대여",
    path: "/equipment",
    columns: [
      {
        links: [
          { name: "기자재 목록", path: "/equipment/list" },
          { name: "submenu", path: "/equipment/sub" },
          { name: "submenu", path: "/equipment/sub" },
        ],
      },
    ],
  },
  {
    name: "동아리",
    path: "/clubs",
    columns: [
      {
        links: [
          { name: "동아리 정보", path: "/clubs/info" },
          { name: "동아리 QnA", path: "/clubs/qna" },
          { name: "submenu", path: "/clubs/sub" },
        ],
      },
    ],
  },
  {
    name: "마이페이지",
    path: "/mypage",
    columns: [
      {
        links: [
          { name: "학생", path: "/mypage/student" },
          { name: "교사", path: "/mypage/teacher" },
          { name: "학부모", path: "/mypage/admin" },
        ],
      },
    ],
  },
];
