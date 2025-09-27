import type { SelectProps } from '@/types/components';

/**
 * 공통 Select 컴포넌트
 * 옵션 선택을 위한 드롭다운을 제공합니다.
 */
export default function Select({
    options,
    value,
    onChange,
    className = 'w-24 h-8 rounded-md'
}: SelectProps) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={className}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
