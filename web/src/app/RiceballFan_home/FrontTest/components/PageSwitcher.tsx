// components/PageSwitcher.tsx
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface PageSwitcherProps {
  children: React.ReactNode;
  swipeThreshold?: number; // 手動設定的滑動距離閾值
  animationDuration?: number; // 手動設定的動畫持續時間（毫秒）
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({
  children,
  swipeThreshold = 100, // 預設滑動距離閾值為 100px
  animationDuration = 500, // 預設動畫持續時間為 500 毫秒
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlers = useSwipeable({
    onSwiping: ({ deltaY }) => {
      if (!isAnimating) {
        setOffsetY(deltaY); // 根據滑動距離設置偏移
      }
    },
    onSwipedUp: ({ deltaY }) => {
      setIsAnimating(true);
      if (deltaY < -swipeThreshold && pageIndex < React.Children.count(children) - 1) {
        setPageIndex((prev) => prev + 1); // 超過閾值，切換頁面
      }
      setOffsetY(0);
      setTimeout(() => setIsAnimating(false), animationDuration);
    },
    onSwipedDown: ({ deltaY }) => {
      setIsAnimating(true);
      if (deltaY > swipeThreshold && pageIndex > 0) {
        setPageIndex((prev) => prev - 1);
      }
      setOffsetY(0);
      setTimeout(() => setIsAnimating(false), animationDuration);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <div
        style={{
          transform: `translateY(calc(-${pageIndex * 100}vh + ${offsetY}px))`,
          transition: isAnimating ? `transform ${animationDuration}ms` : 'none',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ height: '100vh' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSwitcher;
