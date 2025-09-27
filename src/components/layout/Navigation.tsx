import useBottomNavigation from "@/hooks/useBottomNavigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router";

export default function Navigation() {
  const { isDark } = useTheme();
  const {
    isOpen,
    toggleNavigation,
    MENU_ITEMS,
    getMenuItemPosition,
    isItemVisible,
  } = useBottomNavigation();
  const navigate = useNavigate();

  const radius = 120;

  return (
    <div className="fixed transform -translate-x-1/2 left-1/2 bottom-4">
      {/* 메뉴 아이템들 */}
      {isOpen && (
        <div className="absolute transform -translate-x-1/2 bottom-20 left-1/2">
          <div className="relative">
            {MENU_ITEMS.map((item, index) => {
              const { x, y } = getMenuItemPosition(
                index,
                MENU_ITEMS.length,
                radius
              );
              const isVisible = isItemVisible(item.id);

              return (
                <div
                  key={item.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                  style={{ left: `${x}px`, top: `${y}px` }}
                >
                  <button
                    className={`
                      w-14 h-14 rounded-full flex items-center justify-center shadow-lg
                      hover:scale-110 transition-transform duration-200
                      ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white"
                          : "bg-white hover:bg-gray-50 border border-gray-200 text-gray-700"
                      }
                    `}
                    onClick={() => {
                      navigate(item.route);
                      toggleNavigation();
                    }}
                  >
                    <item.icon size={20} />
                  </button>

                  {/* 라벨 */}
                  <div
                    className={`
                    absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 rounded-md text-xs whitespace-nowrap
                    ${
                      isDark
                        ? "bg-gray-800 text-gray-200 border border-gray-600"
                        : "bg-gray-900 text-white"
                    }
                  `}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 메인 네비게이션 버튼 */}
      <nav
        className={`
          ${
            isDark
              ? "bg-gray-800 border border-gray-200"
              : "bg-white border border-gray-200"
          } 
          flex items-center justify-center transition-all duration-300 transform 
          border rounded-full shadow-xl cursor-pointer w-18 h-18 
          hover:scale-105 active:scale-95
        `}
        onClick={toggleNavigation}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient-shift bg-[length:200%_200%]">
          <div
            className={`w-6 h-6 duration-300 rounded-full transition-transform ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          />
        </div>
      </nav>
    </div>
  );
}
