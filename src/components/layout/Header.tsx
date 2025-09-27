import { UserProfile } from "@/components/feature";


export default function Header() {
  return (
    < header className="flex items-center justify-center h-48 bg-gray-200 relative bg-[url('/assets/images/header-bg.png')] bg-cover bg-center" >
      {/* 헤더 배경 이미지 */}
      <section className="absolute transform -translate-x-1/2 translate-y-1/3 bottom-1 left-1/2">
        <UserProfile /> {/* 프로필 이미지 */}
      </section>
    </header >
  );
}
