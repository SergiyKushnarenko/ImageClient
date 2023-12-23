import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (onScroll: () => void) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          onScroll();
        }
      },
      { threshold: 0.5 }
    );
    if (bottomRef?.current) {
      observer.observe(bottomRef.current);
    }
    return () => observer.disconnect();
  }, [onScroll]);

  return { bottomRef };
};
