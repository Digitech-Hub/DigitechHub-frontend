import { DigitechLogo } from "@/assets/images";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center h-20 px-4 sm:px-6 lg:px-8">        
        <div className="flex-1 flex justify-start">
          <img 
            src={DigitechLogo} 
            alt="서울디지텍고등학교 로고" 
            className="w-24 h-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-15"> 
          <div className="text-[1.375rem] cursor-pointer p-3 rounded-md font-medium">
            교내안내
          </div>
          <div className="cursor-pointer p-3 rounded-md text-[1.375rem] font-medium">
            기자재대여
          </div>
          <div className="text-[1.375rem] cursor-pointer p-3 rounded-md font-medium">
            동아리
          </div>
          <div className="text-[1.375rem] cursor-pointer p-3 rounded-md font-medium">
            마이페이지
          </div>
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-8"> 
          <div className="text-gray-800cursor-pointer">
            로그인
          </div>
          <div className="bg-black text-white py-2 px-5 rounded-md hover:bg-gray-700 cursor-pointer">
            회원가입
          </div>
        </div>
        
      </div>
    </header>
  );
}