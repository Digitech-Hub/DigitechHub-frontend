export interface LogoProps {
    /** 로고의 크기를 설정합니다 */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** 로고에 애니메이션을 적용할지 여부 */
    animated?: boolean;
    /** 로고의 색상 테마 */
    theme?: 'gradient' | 'white' | 'black';
    /** 추가 CSS 클래스명 */
    className?: string;
}

export interface ButtonProps {
    /** 버튼의 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 버튼의 스타일 변형 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** 버튼이 비활성화 상태인지 */
    disabled?: boolean;
    /** 버튼 클릭 핸들러 */
    onClick?: () => void;
    /** 버튼 내용 */
    children: React.ReactNode;
    /** 추가 CSS 클래스명 */
    className?: string;
}

export interface InputProps {
    /** 입력 필드 타입 */
    type?: 'text' | 'email' | 'password' | 'number';
    /** 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 입력 필드 값 */
    value?: string;
    /** 값 변경 핸들러 */
    onChange?: (value: string) => void;
    /** 에러 메시지 */
    error?: string;
    /** 필수 입력 여부 */
    required?: boolean;
    /** 추가 CSS 클래스명 */
    className?: string;
}

// HomePage 관련 타입들
export interface UserProfile {
    /** 사용자 이름 */
    username: string;
    /** 학번 */
    studentNumber: string;
    /** 사용자 소개 */
    bio: string;
}

export interface MenuOption {
    /** 옵션 값 */
    value: string;
    /** 표시할 텍스트 */
    label: string;
}

export interface LunchMenu {
    /** 메뉴 제목 */
    title: string;
    /** 오늘의 메뉴 */
    todayMenu: string;
    /** 선택 옵션들 */
    options: MenuOption[];
    /** 현재 선택된 옵션 */
    selectedOption: string;
}

export interface TimeTable {
    /** 시간표 제목 */
    title: string;
    /** 오늘의 시간표 */
    todaySchedule: string;
    /** 학기 옵션들 */
    semesterOptions: MenuOption[];
    /** 현재 선택된 학기 */
    selectedSemester: string;
}

export interface HomePageData {
    /** 사용자 프로필 정보 */
    userProfile: UserProfile;
    /** 점심 메뉴 정보 */
    lunchMenu: LunchMenu;
    /** 시간표 정보 */
    timeTable: TimeTable;
}

export interface HeaderPorps {
    /** 사용자 아이디 */
    userid: string | null;
    /** 비교 대상 데이터 */
    data: string;
}

// 공통 섹션 컴포넌트 타입
export interface SectionProps {
    /** 섹션 제목 */
    title: string;
    /** 섹션 내용 */
    children: React.ReactNode;
    /** 추가 CSS 클래스명 */
    className?: string;
    /** 다크 모드 여부 */
    isDark?: boolean;
}

export interface SelectProps {
    /** 선택 옵션들 */
    options: MenuOption[];
    /** 현재 선택된 값 */
    value: string;
    /** 값 변경 핸들러 */
    onChange: (value: string) => void;
    /** 추가 CSS 클래스명 */
    className?: string;
}

export interface SelectTimeProps {
    /** 현재 선택된 시간의 값 */
    value: string;
}
