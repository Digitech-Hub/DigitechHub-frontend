import type { SectionProps } from "@/types/components";

export default function Section({children, bgColor}: SectionProps ) {
    return (
        <section className={`grid place-items-center w-full h-screen bg-[${bgColor}] m-0 p-0`}>
            {children}
        </section>
    )
}