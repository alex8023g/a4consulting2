export function HeroPricingCard() {
  return (
    <div className='relative flex h-[190px] w-[748px] flex-col items-end justify-center gap-4 rounded-[34px] border-2 border-[#fdb056] bg-[#313637] pt-[30px] pr-20 pb-[26px] pl-5'>
      {/* Discount badge */}
      <div className='absolute top-0 left-[50px] flex items-center justify-center overflow-hidden rounded-b-lg bg-[#fd5656] px-2 py-[5px]'>
        <span className='text-[22px] leading-[1.3] font-medium text-white'>
          -70%
        </span>
      </div>

      {/* Hit label */}
      <span className='absolute top-[10px] right-[66px] text-[22px] leading-[1.3] font-medium tracking-[0.66px] text-[#fdb056]'>
        хит!
      </span>

      {/* Content */}
      <div className='flex items-center gap-10'>
        <div className='flex flex-col items-center gap-4'>
          <span className='text-[26px] leading-[1.2] font-medium text-white'>
            Навсегда
          </span>
          <div className='flex flex-col items-end'>
            <span className='text-[50px] leading-none font-semibold text-[#fdb056]'>
              5990 ₽
            </span>
            <div className='relative inline-grid'>
              <span className='text-[24px] leading-[1.2] font-normal text-[#919191]'>
                18 990 ₽
              </span>
              <div className='absolute top-[15px] left-0 h-[2px] w-[95px] bg-[#919191]'></div>
            </div>
          </div>
        </div>
        <div className='flex items-start justify-center py-2.5'>
          <p className='w-[328px] text-[16px] leading-[1.3] font-normal text-white'>
            Для тех, кто хочет всегда быть в форме и поддерживать здоровье
          </p>
        </div>
      </div>
    </div>
  );
}
