import { MENU_ITEMS } from "@/constants/navigationMenuItem";
import { useState, useEffect, useCallback } from "react";

export default function useBottomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // 반원 형태 위치 계산
  const getMenuItemPosition = useCallback(
    (index: number, totalItems: number, radius: number) => {
      const startAngle = -180;
      const endAngle = 0;
      const angle =
        startAngle + (index * (endAngle - startAngle)) / (totalItems - 1);

      return {
        x: Math.cos((angle * Math.PI) / 180) * radius,
        y: Math.sin((angle * Math.PI) / 180) * radius + 30,
        angle,
      };
    },
    []
  );

  const toggleNavigation = useCallback(() => setIsOpen((prev) => !prev), []);

  // 순차적 아이템 표시
  useEffect(() => {
    if (!isOpen) {
      setVisibleItems(new Set());
      return;
    }

    setVisibleItems(new Set());
    MENU_ITEMS.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => new Set([...prev, item.id]));
      }, index * 150);
    });
  }, [isOpen]);

  return {
    isOpen,
    toggleNavigation,
    MENU_ITEMS,
    getMenuItemPosition,
    isItemVisible: useCallback(
      (itemId: number) => visibleItems.has(itemId),
      [visibleItems]
    ),
  };
}
