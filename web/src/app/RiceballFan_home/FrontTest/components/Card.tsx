// components/Card.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';

interface CardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  onSwipe: (direction: 'left' | 'right') => void;
}

const Card: React.FC<CardProps> = ({ data, onSwipe }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe('left'),
    onSwipedRight: () => onSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <animated.div
      {...handlers}
      className="card"
      style={{
        transform: x.interpolate((x) => `translateX(${x}px)`),
        backgroundImage: `url(${data.image})`,
      }}
    >
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </animated.div>
  );
};

export default Card;
