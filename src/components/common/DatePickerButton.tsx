import { useState } from 'react';
import DatePickerModal from './DatePickerModal';

interface DatePickerButtonProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
    isDark?: boolean;
    className?: string;
}

/**
 * 날짜 선택 버튼 컴포넌트
 * 클릭 시 날짜 선택 모달을 엽니다.
 */
export default function DatePickerButton({
    selectedDate,
    onDateChange,
    isDark = false,
    className = 'min-w-20 h-8'
}: DatePickerButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formatDate = (date: Date) => {
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();

        if (isToday) {
            return '오늘';
        }

        return date.toLocaleDateString('ko-KR', {
            month: 'short',
            day: 'numeric'
        });
    };

    const handleDateSelect = (date: Date) => {
        onDateChange(date);
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`
                    ${className} 
                    group relative overflow-hidden
                    ${isDark
                        ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white border-gray-500 hover:from-gray-600 hover:to-gray-500'
                        : 'bg-gradient-to-r from-white to-gray-50 text-gray-700 border-gray-200 hover:from-gray-50 hover:to-gray-100'
                    }
                    border shadow-sm hover:shadow-md
                    rounded-md px-2 py-1
                    text-xs font-medium
                    transition-all duration-200 ease-in-out
                    hover:scale-[1.02] active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-blue-500/20
                `}
            >
                <div className="flex items-center justify-center">
                    {/* Date Text */}
                    <span className="font-medium text-xs">
                        {formatDate(selectedDate)}
                    </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200
                    ${isDark ? 'bg-white' : 'bg-gray-900'}
                `} />
            </button>

            <DatePickerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
                isDark={isDark}
            />
        </>
    );
}
