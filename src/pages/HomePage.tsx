import { Header } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header userid="" data="" />

      <main className="flex flex-col flex-grow w-full h-full">
        {/* 섹션 1 */}
        <section className="grid place-items-center w-full h-screen bg-red-500 m-0 p-0">
          <div className="w-5/12 mx-auto rounded-full p-13 bg-[lightgray]">
            {/* 내용 */}
          </div>
        </section>

        {/* 섹션 2 */}
        <section className="grid place-items-center w-full h-screen bg-green-500 m-0 p-0">
          섹션 2
        </section>

        {/* 섹션 3 */}
        <section className="grid place-items-center w-full h-screen bg-blue-500 m-0 p-0">
          섹션 3
        </section>
      </main>
    </div>
  );
}
