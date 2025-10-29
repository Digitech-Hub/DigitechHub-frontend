import { Arrow } from "@/assets/images";
import FeatureSection from "@/components/feature/FeatureSection";
import { Header, Section } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header userid="" data="" />
      <main className="flex flex-col flex-grow w-full h-full">
        <Section bgColor="white">
          <div className="flex flex-col items-center mt-20 space-y-14 text-center">
            <div className="w-5/22 mx-auto rounded-full p-4 bg-gray-200 text-xl shadow-md">
              서울디지텍고등학교의 편의 서비스를 한손에
            </div>
            <h1 className="text-7xl font-bold text-gray-900">DIGITECH HUB</h1>
            <p className="text-3xl text-gray-600 whitespace-pre-line">
              서울디지텍고등학교 학생과 교직원을 위한 <br />
              교내 커뮤니티, 알림, 편의 서비스를 통합 제공하는 서비스
            </p>
            <img
              src={Arrow}
              alt="화살표"
              className="mt-30 w-17 h-45 text-gray-500 animate-bounce"
            />
          </div>
        </Section>
        <FeatureSection />
        <Section bgColor="blue">섹션 3</Section>
      </main>
    </div>
  );
}
