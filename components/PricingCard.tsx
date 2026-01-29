import { getDiscount } from '@/lib/discount';

export interface PricingCardProps {
  period: string;
  price: number;
  full_price: number;
  text: string;
  isHighlighted?: boolean;
  isHit?: boolean;
}

export function PricingCard({
  period,
  price,
  full_price,
  text,
  isHighlighted = false,
  isHit = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative block w-full rounded-[20px] border-2 border-[#fdb056] bg-[#313637] px-[20px] py-[20px] lg:flex lg:flex-col lg:items-center lg:justify-around lg:gap-10 lg:rounded-[40px] lg:px-5 lg:py-[20px] lg:pt-[70px] lg:pr-[16px] lg:pb-6 lg:pl-[20px] ${
        isHighlighted ? 'border-[#fdb056]' : 'border-[#484d4e]'
      }`}
    >
      <div className='absolute top-0 right-[8%] flex items-center justify-center rounded-b-lg bg-[#fd5656] px-2 py-[5px] lg:right-auto lg:left-[49px]'>
        <span className='font-montserrat text-[14px] leading-[1.3] font-medium text-white md:text-[22px]'>
          -{getDiscount(price, full_price)}%
        </span>
      </div>

      <div className='flex items-center justify-around gap-10 lg:block'>
        <div className='item-start flex w-1/2 flex-col gap-10 lg:w-auto lg:items-center'>
          <div className='flex flex-col items-start gap-[12px] md:gap-[30px] lg:items-center'>
            <span className='text-[16px] leading-[1.2] font-medium text-white md:text-[26px]'>
              {period}
            </span>

            <div className='flex flex-col items-end'>
              <span
                className={`text-[30px] leading-none font-semibold md:text-[50px] ${
                  isHighlighted ? 'text-[#fdb056]' : 'text-white'
                }`}
              >
                {price}&nbsp;₽
              </span>
              <div className='relative inline-grid'>
                <span className='text-[14px] leading-[1.2] font-normal text-[#919191] md:text-[24px]'>
                  {full_price}&nbsp;₽
                </span>
                <div className='absolute top-[50%] left-0 h-[2px] w-full bg-[#919191]'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-1/2 items-start justify-start py-2.5 lg:w-auto lg:justify-center'>
          <p className='text-[13px] leading-[1.3] font-normal text-white md:w-[204px] md:text-[16px]'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
