import { useState, useCallback } from 'react';
import type { HomePageData } from '@/types/components';

// 임시 데이터 - 실제로는 API에서 가져올 데이터
const initialData: HomePageData = {
  userProfile: {
    username: 'Username',
    studentNumber: 'Student Number',
    bio: 'Hello World'
  },
  lunchMenu: {
    title: 'Lunch Menu',
    todayMenu: "Today's Menu",
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' }
    ],
    selectedOption: '1'
  },
  timeTable: {
    title: 'Time Table',
    todaySchedule: "Today's Time Table",
    semesterOptions: [
      { value: '1', label: '1st' },
      { value: '2', label: '2nd' },
      { value: '3', label: '3rd' }
    ],
    selectedSemester: '1'
  }
};

/**
 * 홈페이지 상태 관리를 위한 커스텀 훅
 * 점심 메뉴와 시간표 옵션 변경, 날짜 선택을 처리합니다.
 */
export const useHomePage = () => {
  const [data, setData] = useState<HomePageData>(initialData);
  const [lunchMenuDate, setLunchMenuDate] = useState<Date>(new Date());
  const [timeTableDate, setTimeTableDate] = useState<Date>(new Date());

  const handleLunchMenuChange = useCallback((value: string) => {
    setData(prev => ({
      ...prev,
      lunchMenu: {
        ...prev.lunchMenu,
        selectedOption: value
      }
    }));
  }, []);

  const handleTimeTableChange = useCallback((value: string) => {
    setData(prev => ({
      ...prev,
      timeTable: {
        ...prev.timeTable,
        selectedSemester: value
      }
    }));
  }, []);

  const handleLunchMenuDateChange = useCallback((date: Date) => {
    setLunchMenuDate(date);
    // 여기서 선택된 날짜에 따른 메뉴 데이터를 가져올 수 있습니다
  }, []);

  const handleTimeTableDateChange = useCallback((date: Date) => {
    setTimeTableDate(date);
    // 여기서 선택된 날짜에 따른 시간표 데이터를 가져올 수 있습니다
  }, []);

  return {
    data,
    lunchMenuDate,
    timeTableDate,
    handleLunchMenuChange,
    handleTimeTableChange,
    handleLunchMenuDateChange,
    handleTimeTableDateChange
  };
};