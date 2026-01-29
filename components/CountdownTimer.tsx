'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imgStar = '/img/star.png';

export function CountdownTimer() {
  const [time, setTime] = useState(120);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime(time - 1);
      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <div className='flex items-center gap-2'>
      <Image src={imgStar} alt='' width={14} height={14} />
      <div
        className={`font-raleway flex items-center gap-1.5 text-[28px] font-bold uppercase md:text-[40px] ${
          time > 30
            ? 'text-[#fb0]'
            : time > 0
              ? 'animate-pulse text-red-500'
              : 'text-red-500'
        }`}
      >
        <span>{String(Math.floor(time / 60)).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(time % 60).padStart(2, '0')}</span>
      </div>
      <Image src={imgStar} alt='' width={14} height={14} />
    </div>
  );
}
