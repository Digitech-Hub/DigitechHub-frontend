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
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const tiemoutRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(tiemoutRef.current);
    setIsDropdownVisible(true);
    setIsMegaDropdownOpen(true);
  };

  const handleDropDownEnter = () => {
    clearTimeout(tiemoutRef.current);
    setIsDropdownVisible(true);
    setIsMegaDropdownOpen(true);
  };

  const handleDropDownLeave = () => {
    setIsMegaDropdownOpen(false);
    tiemoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300);
  };

  const renderMegaDropdown = () => {
    if (!isDropdownVisible) return null;

    return (
      <div
        className={`absolute inset-x-0 top-full mt-0 bg-gray-50 shadow-xl z-50 p-8
        transition-all duration-300 ease-out
        ${isMegaDropdownOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={handleDropDownEnter}
        onMouseLeave={handleDropDownLeave}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid gap-10 items-start text-center"
            style={{
              gridTemplateColumns: `repeat(${NAV_ITEMS.length}, minmax(0, 1fr))`,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="space-y-2">
                {item.columns?.map((column, colIndex) => (
                  <ul key={colIndex} className="space-y-1">
                    {column.links.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          onClick={() => setIsDropdownVisible(false)}
                          className="block text-[1.05rem] py-2 hover:bg-gray-200 rounded-sm transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
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

        {/* 헤더 메뉴 */}
        <div
          className="hidden md:flex space-x-30 h-full relative"
          onMouseEnter={() => {
            clearTimeout(tiemoutRef.current);
            setIsDropdownVisible(true);
            setIsMegaDropdownOpen(true);
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              onMouseEnter={handleMouseEnter}
            />
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

      {/* 드롭다운 패널 */}
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
