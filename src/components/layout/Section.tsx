import type { SectionProps } from "@/types/components";

export default function Section({ children, bgColor }: SectionProps) {
    const bgClassMap: Record<string, string> = {
        white: "bg-white",
        lightGray: "bg-[lightgray]",
        skyBlue: "bg-blue-300",
        blue: "bg-blue-500",
    };

  return (
    <section className={`grid place-items-center w-full h-screen m-0 p-0 ${bgClassMap[bgColor]}`}>
      {children}
    </section>
  );
}
