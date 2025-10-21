import classNames from 'classnames';

import type { SectionProps } from '@/types/components.type';

interface SectionWithHeaderProps extends SectionProps {
    headerContent?: React.ReactNode;
}

/**
 * 공통 섹션 컴포넌트
 * 다크/라이트 모드에 따른 스타일링을 자동으로 처리합니다.
 */
export default function Section({
    title,
    children,
    className = '',
    isDark = false,
    headerContent,
}: SectionWithHeaderProps) {
    const baseClasses = classNames(
        'rounded-lg p-4',
        isDark ? 'bg-gray-700' : 'bg-gray-50',
        className,
    );
    const titleClasses = classNames(
        'text-lg font-medium',
        isDark ? 'text-white' : 'text-gray-900',
    );

    return (
        <section className={classNames('px-6 pb-6', className)}>
            <div className={baseClasses}>
                {(title || headerContent) && (
                    <div className="flex items-center justify-between mb-2">
                        {title && <h3 className={titleClasses}>{title}</h3>}
                        {headerContent}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
