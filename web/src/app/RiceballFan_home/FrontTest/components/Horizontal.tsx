// components/HorizontalSwipe.tsx
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface HorizontalSwipeProps {
  children: React.ReactNode;
  swipeThreshold?: number; // 手動設定的滑動距離閾值
  animationDuration?: number; // 手動設定的動畫持續時間（毫秒）
}

const HorizontalSwipe: React.FC<HorizontalSwipeProps> = ({
  children,
  swipeThreshold = 100, // 預設滑動距離閾值為 100px
  animationDuration = 500, // 預設動畫持續時間為 500 毫秒
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => {
      if (!isAnimating) {
        setOffsetX(deltaX); // 根據滑動距離設置偏移
      }
    },
    onSwipedLeft: ({ deltaX }) => {
      setIsAnimating(true);
      if (deltaX < -swipeThreshold && pageIndex < React.Children.count(children) - 1) {
        setPageIndex((prev) => prev + 1); // 超過閾值，切換頁面
      }
      setOffsetX(0);
      setTimeout(() => setIsAnimating(false), animationDuration);
    },
    onSwipedRight: ({ deltaX }) => {
      setIsAnimating(true);
      if (deltaX > swipeThreshold && pageIndex > 0) {
        setPageIndex((prev) => prev - 1);
      }
      setOffsetX(0);
      setTimeout(() => setIsAnimating(false), animationDuration);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ display: 'flex', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(calc(-${pageIndex * 100}vw + ${offsetX}px))`,
          transition: isAnimating ? `transform ${animationDuration}ms` : 'none',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ minWidth: '100vw' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSwipe;
