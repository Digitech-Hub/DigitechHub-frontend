import { DigitechLogo, MCLogo } from "@/assets/images";
import useSplash from "@/hooks/useSplash";
  
export default function SplashPage() {
  useSplash();

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <span className="px-2 overflow-hidden font-bold text-transparent text-white max-w-0 animate-logo-sync text-4xl/12 box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500">
              Digitech
            </span>
            <span className="px-2 overflow-hidden font-bold text-transparent text-white max-w-0 animate-logo-sync text-4xl/12 box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500">
              Hub
            </span>
          </div>
          <span className="mt-4 font-bold text-gray-700 text-md animate-tagline">
            서울디지텍고를 한손에 담다
          </span>
        </div>

        <div className="absolute flex items-end justify-center text-sm text-gray-500 animate-tagline bottom-10 gap-x-4">
          <img
            src={DigitechLogo}
            alt="서울디지텍고등학교 로고"
            className="w-24"
          />
          <span className="text-black">x</span>
          <img src={MCLogo} alt="MC 동아리 로고" className="w-12" />
        </div>
      </div>
    </>
  );
}
