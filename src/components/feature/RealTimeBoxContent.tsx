import { useRealtimeData } from "@/hooks/useRealtimeData";

export function RealTimeBoxContent({ label }: { label: string }) {
    const data = useRealtimeData();
    return (
        <div className="flex flex-col items-center justify-center h-full text-lg font-semibold text-gray-800">
            <div className="text-2xl mb-2">{label}</div>
            {data ? (
                <p className="text-blue-700 animate-pulse">{data}</p>
            ) : (
                <p className="text-gray-400 italic">데이터 수신 중...</p>
            )}
        </div>
    )
}