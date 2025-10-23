/* eslint-disable no-irregular-whitespace */
import { DigitechLogo } from "@/assets/images";
import { NAV_ITEMS } from "@/data/navData";
import type { HeaderPorps } from "@/types/components";
import NavItem from "@/components/common/NavItem";
import { useState, useRef } from "react";
import { Link } from "react-router";

export default function Header({ userid, data }: HeaderPorps) {
  const isAuthenticated = userid === data && userid !== null;

  const [isMegaDropdownOpen, setIsMegaDropdownOpen] = useState<boolean>(false);
  const [activeMenuName, setActiveMenuName] = useState<string | null>(null);
  const tiemoutRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = (menuName: string) => {
    clearTimeout(tiemoutRef.current);
    setActiveMenuName(menuName);
    setIsMegaDropdownOpen(true);
  };

  const handleDropDownEnter = () => {
    clearTimeout(tiemoutRef.current);
    setIsMegaDropdownOpen(true);
  };

  const handleDropDownLeave = () => {
    tiemoutRef.current = setTimeout(() => {
      setIsMegaDropdownOpen(false);
      setActiveMenuName(null);
    }, 250);
  };

  const renderMegaDropdown = () => {
    if (!isMegaDropdownOpen) return null;

    return (
      <div
        className="absolute inset-x-0 top-full mt-0 bg-gray-100 shadow-xl z-50 p-8 dropdown-area"
        onMouseEnter={handleDropDownEnter}
        onMouseLeave={handleDropDownLeave}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${NAV_ITEMS.length}, minmax(0, 1fr))`,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="space-y-2">
                <h3
                  className={`text-xl font-bold ${
                    activeMenuName === item.name
                      ? "text-blue-600"
                      : "text-gray-800"
                  }`}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMegaDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                </h3>

                {item.columns?.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-1 mt-2">
                    {column.title && (
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        {column.title}
                      </h4>
                    )}
                    <ul className="space-y-1">
                      {column.links.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            onClick={() => setIsMegaDropdownOpen(false)}
                            className="block py-2 text-gray-700 hover:bg-gray-200 rounded-sm transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="max-w-8xl mx-auto flex items-center h-20 px-4 sm:px-6 lg:px-40">
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              src={DigitechLogo}
              alt="서울디지텍고등학교 로고"
              className="w-24 h-auto"
            />
          </Link>
        </div>

        {/* Hover 영역 확장 */}
        <div
          className="hidden md:flex space-x-25 h-full relative"
          onMouseEnter={() => {
            clearTimeout(tiemoutRef.current);
            setIsMegaDropdownOpen(true);
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              onMouseEnter={handleMouseEnter} onMouseLeave={function (): void {
                throw new Error("Function not implemented.");
              } }            />
          ))}
        </div>

        {/* 로그인/회원가입 */}
        {!isAuthenticated ? (
          <div className="flex-1 flex justify-end items-center space-x-8">
            <span className="text-lg font-bold">{userid}님</span>
          </div>
        ) : (
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

      {/* ✅ 메뉴 바 + 드롭다운을 하나의 hover 영역으로 통합 */}
      <div
        className="absolute left-0 right-0 z-40"
        onMouseEnter={handleDropDownEnter}
        onMouseLeave={handleDropDownLeave}
      >
        {renderMegaDropdown()}
      </div>
    </header>
  );
}
