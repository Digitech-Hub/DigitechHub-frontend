import { useEffect, useState } from "react";

// 예시용 WebSocket 시뮬레이션용 Hook
export const useRealtimeData = (): string | null => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = (Math.random() * 100).toFixed(2);
            setData(`현재 값: ${random}`);
        }, 2000)
        return () => clearInterval(interval);
    }, []);
    return data;
}