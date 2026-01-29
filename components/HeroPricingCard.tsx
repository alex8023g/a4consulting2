import { getDiscount } from '@/lib/discount';
import { PricingCardProps } from './PricingCard';

export function HeroPricingCard({
  period,
  price,
  full_price,
  text,
  isHighlighted = false,
  isHit = false,
}: PricingCardProps) {
  return (
    <div className='relative block w-full rounded-[20px] border-2 border-[#fdb056] bg-[#313637] px-[20px] py-[20px] md:h-[190px] md:w-[748px] md:rounded-[34px] md:pt-[30px] md:pb-[26px] md:pl-5 lg:w-full xl:flex xl:flex-col xl:items-end xl:justify-center xl:gap-4'>
      <div className='absolute top-0 right-[18%] flex items-center justify-center overflow-hidden rounded-b-lg bg-[#fd5656] px-2 py-[5px] xl:right-auto xl:left-[50px]'>
        <span className='text-[13px] leading-[1.3] font-medium text-white md:text-[22px]'>
          -{getDiscount(price, full_price)}%
        </span>
      </div>

      <span className='absolute top-[10px] right-[4%] text-[14px] leading-[1.3] font-medium tracking-[0.66px] text-[#fdb056] md:text-[22px] xl:right-[66px]'>
        хит!
      </span>

      <div className='flex items-center justify-around gap-10'>
        <div className='flex w-1/2 flex-col items-start gap-[12px] md:gap-4 lg:w-auto lg:items-center'>
          <span className='text-[16px] leading-[1.2] font-medium text-white md:text-[26px]'>
            {period}
          </span>
          <div className='flex flex-col items-end'>
            <span className='text-[30px] leading-none font-semibold text-[#fdb056] md:text-[50px]'>
              {price}&nbsp;₽
            </span>
            <div className='relative inline-grid'>
              <span className='text-[14px] leading-[1.2] font-normal text-[#919191] md:text-[24px]'>
                {full_price} ₽
              </span>
              <div className='absolute top-[50%] left-0 h-[2px] w-full bg-[#919191]'></div>
            </div>
          </div>
        </div>

        <div className='flex w-1/2 items-start justify-start py-2.5 text-[16px] leading-[1.3] font-normal text-white lg:w-auto lg:items-start lg:justify-center'>
          <p className='hidden w-[328px] md:block'>{text}</p>
          <p className='text-[13px] md:hidden'>Всегда быть в форме</p>
        </div>
      </div>
    </div>
  );
}
