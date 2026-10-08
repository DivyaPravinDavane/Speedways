"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  from?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  format?: boolean;
  className?: string;
}

export function AnimatedNumber({
  value,
  from,
  duration = 1600,
  decimals = 0,
  suffix = "",
  prefix = "",
  format = false,
  className = "",
}: AnimatedNumberProps) {
  // If value is 0 and no explicit 'from' was passed, start from 5 so '0' visibly counts down to 0
  const startFrom = from !== undefined ? from : value === 0 ? 5 : 0;
  const [displayValue, setDisplayValue] = useState<number>(startFrom);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (now: number) => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            // Smooth ease-out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const raw = startFrom + (value - startFrom) * easedProgress;

            if (decimals > 0) {
              setDisplayValue(parseFloat(raw.toFixed(decimals)));
            } else {
              setDisplayValue(Math.round(raw));
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, startFrom, duration, decimals, hasAnimated]);

  let formatted = "";
  if (decimals > 0) {
    formatted = displayValue.toFixed(decimals);
  } else if (format) {
    formatted = displayValue.toLocaleString("en-IN");
  } else {
    formatted = String(displayValue);
  }

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default AnimatedNumber;
