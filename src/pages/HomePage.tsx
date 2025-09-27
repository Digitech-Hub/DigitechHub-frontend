import { Header, Navigation } from "@/components/layout";
import { useTheme } from "@/contexts/ThemeContext";

export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-800" : "bg-white"
      }`}
    >
      <Header />
      <div className="pb-20">
        {/* 메인 콘텐츠 영역 */}
        <div className="container px-4 py-8 mx-auto">
          <h1
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Digitech Hub
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            서울디지텍고를 한손에 담다
          </p>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
