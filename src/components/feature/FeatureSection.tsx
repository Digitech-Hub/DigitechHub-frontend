import type { BoxPosition } from "@/types/components";
import { Section } from "../layout";
import { Box } from "../common";
import { RealTimeBoxContent } from "./RealTimeBoxContent";

export default function FeatureSection() {
    const position: BoxPosition[] = [
        {position: "top-0 left-0", label: ""},
        {position: "top-0 right-0", label: ""},
        {position: "bottom-0 left-0", label: ""},
        {position: "bottom-0 right-0", label: ""},
    ];

    return (
        <Section bgColor="skyBlue">
            <div className="relative w-full h-full flex justify-center items-center">
                <div className="relative w-3/4 h-[70%] flex items-center justify-center">
                    {position.map(({position, label}) => (
                        <Box width="w-2/5" height="h-2/5" className={`absolute ${position}`}>
                            <RealTimeBoxContent label={label} />
                            </Box>
                    ))}
                </div>
            </div>
        </Section>
    )
}