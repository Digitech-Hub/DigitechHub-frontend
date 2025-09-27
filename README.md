# Digitech Hub Frontend

서울디지텍고교 학생들을 위한 통합 서비스 플랫폼의 프론트엔드 애플리케이션입니다.

## 🚀 주요 기능

- **기자재 대여**: 학교 기자재 온라인 대여 시스템
- **방과후 교실 예약**: 방과후 교실 사용 예약 및 관리
- **융합실 출입관리**: 융합실 출입 권한 관리 및 모니터링
- **동아리 채팅방**: 동아리별 소통을 위한 채팅 시스템

## 🛠 기술 스택

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Language**: TypeScript 5.8.3
- **Styling**: TailwindCSS 4.1.13
- **Routing**: React Router 7.9.3
- **Linting**: ESLint 9.36.0

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Button, Input, Modal 등)
│   ├── layout/         # 레이아웃 컴포넌트 (Header, Sidebar, Footer 등)
│   └── feature/        # 기능별 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── equipment/      # 기자재 대여 관련 페이지
│   ├── classroom/      # 방과후 교실 예약 페이지
│   ├── lab/           # 융합실 출입관리 페이지
│   └── chat/          # 동아리 채팅 페이지
├── hooks/              # 커스텀 React 훅
├── services/           # API 통신 및 외부 서비스
├── stores/             # 상태 관리 (Zustand/Redux 등)
├── utils/              # 유틸리티 함수
├── types/              # TypeScript 타입 정의
├── constants/          # 상수 정의
├── assets/             # 정적 자산 (이미지, 아이콘 등)
├── routes.ts           # 라우팅 설정
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## 📋 코드 컨벤션

### 파일 명명 규칙

- **컴포넌트**: PascalCase (예: `EquipmentCard.tsx`, `ClassroomBooking.tsx`)
- **페이지**: PascalCase (예: `EquipmentListPage.tsx`, `ChatRoomPage.tsx`)
- **훅**: camelCase with `use` prefix (예: `useEquipmentRental.ts`, `useChatRoom.ts`)
- **유틸리티**: camelCase (예: `formatDate.ts`, `validateForm.ts`)
- **상수**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`, `EQUIPMENT_TYPES.ts`)

### 컴포넌트 구조

```typescript
// 컴포넌트 파일 구조 예시
import React from 'react';
import { ComponentProps } from '@/types/components';

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // hooks
  // event handlers
  // render logic
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Props 타입 정의 규칙

#### 1. **중앙 집중식 타입 관리**
- 모든 컴포넌트 props 타입은 `@/types/components.ts`에 정의
- 컴포넌트별로 인터페이스를 분리하여 관리
- 재사용 가능한 타입은 별도 파일로 분리

```typescript
// ✅ 권장: @/types/components.ts
export interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  theme?: 'gradient' | 'white' | 'black';
  className?: string;
}

// ❌ 비권장: 컴포넌트 파일 내부
interface LogoProps { ... }
```

#### 2. **타입 네이밍 컨벤션**
- 컴포넌트명 + `Props` 접미사 사용
- PascalCase로 작성
- JSDoc 주석으로 각 prop 설명 추가

```typescript
export interface ButtonProps {
  /** 버튼의 크기를 설정합니다 */
  size?: 'sm' | 'md' | 'lg';
  /** 버튼의 스타일 변형 */
  variant?: 'primary' | 'secondary' | 'outline';
  /** 버튼 클릭 핸들러 */
  onClick?: () => void;
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 추가 CSS 클래스명 */
  className?: string;
}
```

#### 3. **타입 정의 위치별 사용 가이드**

| 위치 | 사용 케이스 | 예시 |
|------|-------------|------|
| `@/types/components.ts` | 컴포넌트 props | `LogoProps`, `ButtonProps` |
| `@/types/api.ts` | API 응답/요청 | `EquipmentResponse`, `UserRequest` |
| `@/types/common.ts` | 공통 타입 | `ApiResponse<T>`, `Pagination` |
| 컴포넌트 내부 | 로컬 타입만 | 컴포넌트 내부 상태 타입 |

### 폴더별 역할

#### `/src/components`
- **common/**: 앱 전반에서 사용되는 재사용 가능한 컴포넌트
  - `Button`, `Input`, `Modal`, `LoadingSpinner` 등
- **layout/**: 페이지 레이아웃을 구성하는 컴포넌트
  - `Header`, `Sidebar`, `Footer`, `Navigation` 등
- **feature/**: 특정 기능에 특화된 컴포넌트
  - `EquipmentCard`, `BookingForm`, `ChatMessage` 등

#### `/src/pages`
- 라우트별 페이지 컴포넌트
- 각 페이지는 해당 기능의 메인 컨테이너 역할

#### `/src/hooks`
- 재사용 가능한 커스텀 훅
- API 호출, 상태 관리, 폼 처리 등의 로직 캡슐화

#### `/src/services`
- API 통신 로직
- 외부 서비스 연동 (인증, 파일 업로드 등)
- HTTP 클라이언트 설정

#### `/src/stores`
- 전역 상태 관리
- Zustand 또는 Redux Toolkit 사용 예정

### TypeScript 컨벤션

```typescript
// 인터페이스 명명: PascalCase with I prefix 또는 그냥 PascalCase
interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  available: boolean;
}

// 타입 별칭: PascalCase
type EquipmentStatus = 'available' | 'rented' | 'maintenance';

// 열거형: PascalCase
enum EquipmentCategory {
  LAPTOP = 'laptop',
  CAMERA = 'camera',
  PROJECTOR = 'projector'
}
```

### Import Alias 사용법

프로젝트에서는 절대 경로 import를 위해 alias를 사용합니다:

```typescript
// ❌ 상대 경로 (권장하지 않음)
import { Button } from '../../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

// ✅ 절대 경로 alias 사용 (권장)
import { Button } from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { Equipment } from '@/types/equipment';
import { API_ENDPOINTS } from '@/constants/api';
```

**사용 가능한 Alias:**
- `@/*` - src 폴더의 모든 파일
- `@/components/*` - 컴포넌트 파일들
- `@/pages/*` - 페이지 컴포넌트들
- `@/hooks/*` - 커스텀 훅들
- `@/services/*` - API 서비스들
- `@/stores/*` - 상태 관리 스토어들
- `@/utils/*` - 유틸리티 함수들
- `@/types/*` - TypeScript 타입 정의들
- `@/constants/*` - 상수 정의들
- `@/assets/*` - 정적 자산들

### 스타일링 컨벤션

- **TailwindCSS** 사용
- 컴포넌트별 스타일은 클래스명으로 관리
- Headwidn Extension을 설치하여 className을 정렬 관리
- 공통 스타일은 `index.css`에 정의
- 반응형 디자인 우선 적용

```typescript
// 스타일링 예시
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
  <h1 className="text-3xl font-bold text-gray-900 mb-8">
    Digitech Hub
  </h1>
</div>
```

### Git 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 과정 또는 보조 도구 변경
```

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 린팅
pnpm lint

# 미리보기
pnpm preview
```

### 개발 환경 설정

1. Node.js 18+ 설치
2. pnpm 설치: `npm install -g pnpm`
3. 프로젝트 클론 및 의존성 설치
4. 환경 변수 설정 (`.env` 파일)

## 📝 개발 가이드라인

1. **컴포넌트 개발**: 재사용 가능하고 단일 책임 원칙을 따르는 컴포넌트 작성
2. **타입 안전성**: TypeScript를 적극 활용하여 타입 안전성 확보
3. **접근성**: 웹 접근성 가이드라인 준수
4. **성능**: 불필요한 리렌더링 방지 및 최적화
5. **테스팅**: 단위 테스트 및 통합 테스트 작성 (추후 추가 예정)

## 🤝 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 기능 브랜치 생성: `git checkout -b feature/새로운기능`
3. 변경사항 커밋: `git commit -m 'feat: 새로운 기능 추가'`
4. 브랜치 푸시 및 Pull Request 생성

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 통해 연락해 주세요.