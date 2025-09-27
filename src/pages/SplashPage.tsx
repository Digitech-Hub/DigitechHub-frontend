import { DigitechLogo, MCLogo } from "@/assets/images";
import { Logo } from "@/components/common";
import useSplash from "@/hooks/useSplash";
import { useTheme } from "@/contexts/ThemeContext";

export default function SplashPage() {
  const { theme: appTheme } = useTheme();
  useSplash();

  return (
    <>
      <div className={`flex items-center justify-center h-screen transition-colors duration-300 ${appTheme === "dark"
        ? "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}>
        <div className="flex flex-col items-center justify-center">
          <Logo theme="gradient" />
          <span className={`mt-4 font-bold text-md animate-tagline transition-colors duration-300 ${appTheme === "dark" ? "text-white" : "text-gray-700"
            }`}>
            서울디지텍고를 한손에 담다
          </span>
        </div>

        <div className={`absolute flex items-end justify-center text-sm animate-tagline bottom-10 gap-x-4 transition-colors duration-300 ${appTheme === "dark" ? "text-white" : "text-gray-500"
          }`}>
          <img
            src={DigitechLogo}
            alt="서울디지텍고등학교 로고"
            className="w-24"
          />
          <span className={`transition-colors duration-300 ${appTheme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}>x</span>
          <img src={MCLogo} alt="MC 동아리 로고" className="w-12" />
        </div>
      </div>
    </>
  );
}
