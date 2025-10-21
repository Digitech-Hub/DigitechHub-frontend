import classNames from 'classnames';

import type { LogoProps } from '@/types/components.type';

export const Logo = ({
    size = 'lg',
    animated = true,
    theme = 'gradient',
    className = '',
}: LogoProps) => {
    // 크기별 스타일 매핑
    const sizeClasses = {
        sm: 'text-2xl/8',
        md: 'text-3xl/10',
        lg: 'text-4xl/12',
        xl: 'text-5xl/14',
    };

    const animationClass = animated ? 'animate-logo-sync max-w-0' : '';
    const baseClasses = 'px-2 overflow-hidden font-bold';

    return (
        <div className={classNames('flex flex-col items-start', className)}>
            <span
                className={classNames(
                    baseClasses,
                    sizeClasses[size],
                    animationClass,
                )}
            >
                Digitech
            </span>
            <span
                className={classNames(
                    baseClasses,
                    sizeClasses[size],
                    animationClass,
                )}
            >
                Hub
            </span>
        </div>
    );
};

export default Logo;
