import { Section } from '@/components/common';
import { DatePickerButton } from '@/components/common';
import type { TimeTable } from '@/types/components';

interface TimeTableSectionProps {
    timeTable: TimeTable;
    isDark: boolean;
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

/**
 * 시간표 섹션 컴포넌트
 * 오늘의 시간표와 날짜 선택을 제공합니다.
 */
export default function TimeTableSection({
    timeTable,
    isDark,
    selectedDate,
    onDateChange
}: TimeTableSectionProps) {
    return (
        <Section
            title={timeTable.title}
            isDark={isDark}
            className="h-96"
            headerContent={
                <DatePickerButton
                    selectedDate={selectedDate}
                    onDateChange={onDateChange}
                    isDark={isDark}
                />
            }
        >
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {timeTable.todaySchedule}
            </p>
        </Section>
    );
};

