import type { SectionProps } from "@/types/components";

const bgClassMap: Record<SectionProps["bgColor"], string> = {
    white: "bg-white",
    lightGray: "bg-[lightgray]",
    skyBlue: "bg-blue-300",
    blue: "bg-blue-500",
};

export default function Section({ children, bgColor }: SectionProps) {

  return (
    <section className={`grid w-full h-screen m-0 p-0 ${bgClassMap[bgColor]}`}>
      {children}
    </section>
  );
}
