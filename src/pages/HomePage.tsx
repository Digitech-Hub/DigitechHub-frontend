import { Header } from "@/components/layout";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300">
            <Header userid="" data="" />
            <main className={`rounded-t-3xl flex flex-col gap-3 flex-grow w-full h-full "
                }`}>
            </main>
        </div>
    );
}