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
