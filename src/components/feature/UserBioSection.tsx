import { Section } from '@/components/common';
import type { UserProfile } from '@/types/components';

interface UserBioSectionProps {
    userProfile: UserProfile;
    isDark: boolean;
}

/**
 * 사용자 소개 섹션 컴포넌트
 * 사용자의 소개글을 표시합니다.
 */
export default function UserBioSection({
    userProfile,
    isDark
}: UserBioSectionProps) {
    return (
        <Section title={""} isDark={isDark}>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {userProfile.bio}
            </p>
        </Section>
    );
};
