import Image from 'next/image';

const imgStar = '/img/star.png';

export function CountdownTimer() {
  return (
    // <div className='flex w-full flex-col items-center gap-1 bg-[#1d5b43] py-2'>
    //   <span className='text-[24px] leading-[1.3] font-semibold text-white'>
    //     Успейте открыть пробную неделю
    //   </span>
    <div className='flex items-center gap-2'>
      <Image src={imgStar} alt='' width={14} height={14} />
      <div className='font-raleway flex items-center gap-1.5 text-[28px] font-bold text-[#fb0] uppercase md:text-[40px]'>
        <span>15</span>
        <span>:</span>
        <span>59</span>
      </div>
      <Image src={imgStar} alt='' width={14} height={14} />
    </div>
    // </div>
  );
}
