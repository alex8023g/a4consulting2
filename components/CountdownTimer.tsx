'use client';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { TimerContext } from './ClientProvider';

const imgStar = '/img/star.png';

export function CountdownTimer() {
  const ctx = useContext(TimerContext);

  useEffect(() => {
    if (!ctx) return;
    if (ctx.time <= 0) return;
    const interval = setInterval(() => {
      ctx.setTime(ctx.time - 1);
      if (ctx.time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [ctx]);

  if (!ctx) return null;

  return (
    <div className='flex items-center gap-2'>
      <Image src={imgStar} alt='' width={14} height={14} />
      <div
        className={`font-raleway flex items-center gap-1.5 text-[28px] font-bold uppercase md:text-[40px] ${
          ctx.time > 30
            ? 'text-[#fb0]'
            : ctx.time > 0
              ? 'animate-pulse text-red-500'
              : 'text-red-500'
        }`}
      >
        <span>{String(Math.floor(ctx.time / 60)).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(ctx.time % 60).padStart(2, '0')}</span>
      </div>
      <Image src={imgStar} alt='' width={14} height={14} />
    </div>
  );
}
