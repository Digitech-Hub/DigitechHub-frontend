import { DigitechLogo } from "@/assets/images";
import type { HeaderPorps } from "@/types/components.type";
import { Link } from "react-router";

// 메뉴 항목 데이터 구조화
const NAV_ITEMS = [
  { name: "교내안내", path: "/info" },
  { name: "기자재대여", path: "/equipment" },
  { name: "동아리", path: "/clubs" },
  { name: "마이페이지", path: "/mypage" },
];

export default function Header({ userid, data }: HeaderPorps) {
  const isAuthenticated = userid === data && userid !== null; // userid와 data가 같으면 임시로 로그인 상태로 간주함

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              src={DigitechLogo}
              alt="서울디지텍고등학교 로고"
              className="w-24 h-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-15">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[1.375rem] p-3 rounded-md font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/** 로그인 회원가입 또는 사용자 ID 표시 */}
        {/** 임시 논리 부정 연산자 사용 */}
        {!isAuthenticated ? (
          // 로그인 상태 -> 사용자 ID
          <div className="flex-1 flex justify-end items-center space-x-8">
            <span className="text-lg font-bold">{userid}님</span>
          </div>
        ) : (
          // 비로그인 상태 -> 로그인 회원가입 버튼
          <div className="flex-1 flex justify-end items-center space-x-8">
            <Link to="/login" className="text-gray-800">
              로그인
            </Link>
            <Link
              to="/register"
              className="bg-black text-white py-2 px-5 rounded-md"
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
