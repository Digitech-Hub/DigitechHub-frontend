import { Header, Navigation } from "@/components/layout";
import {
    UserProfileSection,
    UserBioSection,
    LunchMenuSection,
    TimeTableSection
} from "@/components/feature";
import { useTheme } from "@/contexts/ThemeContext";
import { useHomePage } from "@/hooks/useHomePage";

/**
 * 홈페이지 컴포넌트
 * 사용자 프로필, 소개, 점심 메뉴, 시간표를 표시합니다.
 */
export default function HomePage() {
    const { isDark } = useTheme();
    const {
        data,
        lunchMenuDate,
        timeTableDate,
        handleLunchMenuDateChange,
        handleTimeTableDateChange
    } = useHomePage();

    return (
        <div className="min-h-screen transition-colors duration-300 flex flex-col">
            <Header />
            <main className={`rounded-t-3xl flex flex-col gap-3 flex-grow w-full h-full ${isDark ? "bg-slate-800" : "bg-white"
                }`}>
                <UserProfileSection
                    userProfile={data.userProfile}
                    isDark={isDark}
                />

                <UserBioSection
                    userProfile={data.userProfile}
                    isDark={isDark}
                />

                <LunchMenuSection
                    lunchMenu={data.lunchMenu}
                    isDark={isDark}
                    selectedDate={lunchMenuDate}
                    onDateChange={handleLunchMenuDateChange}
                />

                <TimeTableSection
                    timeTable={data.timeTable}
                    isDark={isDark}
                    selectedDate={timeTableDate}
                    onDateChange={handleTimeTableDateChange}
                />
            </main>
            <Navigation />
        </div>
    );
}