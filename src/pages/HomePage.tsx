import { Header } from "@/components/layout";
import Section from "@/components/layout/Section";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header userid="" data="" />
      <main className="flex flex-col flex-grow w-full h-full">
        <Section bgColor="white">
          <div className="flex flex-col items-center mt-20 space-y-10 text-center">
            {/* 박스 */}
            <div className="w-5/22 mx-auto rounded-full p-4 bg-gray-200 text-xl shadow-md">
              서울디지텍고등학교의 편의 서비스를 한손에
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-7xl font-bold text-gray-900">
              DIGITECH HUB
            </h1>

            {/* 부제 텍스트 */}
            <p className="text-lg text-gray-600">
              학교 생활에 필요한 모든 정보를 한눈에 확인하세요
            </p>

            {/* 아래 화살표 */}
            <ArrowDown className="mt-10 w-10 h-10 text-gray-500 animate-bounce" />
          </div>
        </Section>
        <Section bgColor="lightGray">섹션 2</Section>
        <Section bgColor="blue">섹션 3</Section>
      </main>
    </div>
  );
}
