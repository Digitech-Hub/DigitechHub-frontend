import type { UserProfile } from '@/types/components';

interface UserProfileSectionProps {
    userProfile: UserProfile;
    isDark: boolean;
}

/**
 * 사용자 프로필 섹션 컴포넌트
 * 사용자 정보를 표시합니다.
 */
export default function UserProfileSection({
    userProfile,
    isDark
}: UserProfileSectionProps) {
    return (
        <section className="flex items-center justify-center pt-10 pb-4">
            <div className="flex flex-col items-center space-y-4">
                <div className="text-center space-y-1">
                    <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {userProfile.username}
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {userProfile.studentNumber}
                    </p>
                </div>
            </div>
        </section>
    );
};
