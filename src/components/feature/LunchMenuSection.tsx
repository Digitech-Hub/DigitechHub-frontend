import { Section } from '@/components/common';
import { DatePickerButton } from '@/components/common';
import type { LunchMenu } from '@/types/components';

interface LunchMenuSectionProps {
    lunchMenu: LunchMenu;
    isDark: boolean;
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

/**
 * 점심 메뉴 섹션 컴포넌트
 * 오늘의 점심 메뉴와 날짜 선택을 제공합니다.
 */
export default function LunchMenuSection({
    lunchMenu,
    isDark,
    selectedDate,
    onDateChange
}: LunchMenuSectionProps) {
    return (
        <Section
            title={lunchMenu.title}
            isDark={isDark}
            className="h-36"
            headerContent={
                <DatePickerButton
                    selectedDate={selectedDate}
                    onDateChange={onDateChange}
                    isDark={isDark}
                />
            }
        >
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {lunchMenu.todayMenu}
            </p>
        </Section>
    );
};
