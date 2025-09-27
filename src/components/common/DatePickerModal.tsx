import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DatePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDateSelect: (date: Date) => void;
    selectedDate?: Date;
    isDark?: boolean;
}

/**
 * 날짜 선택 모달 컴포넌트
 * 달력을 통해 날짜를 선택할 수 있습니다.
 */
export default function DatePickerModal({
    isOpen,
    onClose,
    onDateSelect,
    selectedDate = new Date(),
    isDark = false
}: DatePickerModalProps) {
    const [currentDate, setCurrentDate] = useState(selectedDate);
    const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());

    useEffect(() => {
        if (isOpen) {
            setCurrentDate(selectedDate);
            setSelectedDay(selectedDate.getDate());
        }
    }, [isOpen, selectedDate]);

    if (!isOpen) return null;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const monthNames = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ];

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day: number) => {
        setSelectedDay(day);
        const newDate = new Date(year, month, day);
        onDateSelect(newDate);
        onClose();
    };

    const renderCalendarDays = () => {
        const days = [];

        // 빈 칸들 (이전 달의 마지막 날들)
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(
                <div key={`empty-${i}`} className="h-8 w-8"></div>
            );
        }

        // 현재 달의 날짜들
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = day === selectedDay;
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`h-8 w-8 rounded-full text-sm transition-colors ${isSelected
                        ? 'bg-blue-500 text-white'
                        : isToday
                            ? `${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`
                            : `${isDark ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`
                        }`}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className={`relative w-80 rounded-lg p-6 shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        날짜 선택
                    </h3>
                    <button
                        onClick={onClose}
                        className={`rounded-full p-1 ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        <X />
                    </button>
                </div>

                {/* Month Navigation */}
                <div className="mb-4 flex items-center justify-between">
                    <button
                        onClick={handlePrevMonth}
                        className={`rounded-full p-2 ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {monthNames[month]} {year}
                    </h4>

                    <button
                        onClick={handleNextMonth}
                        className={`rounded-full p-2 ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Calendar */}
                <div className="space-y-2">
                    {/* Day names */}
                    <div className="grid grid-cols-7 gap-1">
                        {dayNames.map((day) => (
                            <div
                                key={day}
                                className={`text-center text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar days */}
                    <div className="grid grid-cols-7 gap-1">
                        {renderCalendarDays()}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${isDark
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            const newDate = new Date(year, month, selectedDay);
                            onDateSelect(newDate);
                            onClose();
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600"
                    >
                        선택
                    </button>
                </div>
            </div>
        </div>
    );
}
