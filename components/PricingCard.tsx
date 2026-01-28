interface PricingCardProps {
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
  const discount = Math.round((1 - price / full_price) * 100);
  return (
    <div
      className={`relative flex flex-col items-center rounded-[40px] border-2 bg-[#313637] px-5 pt-[70px] pb-6 ${
        isHighlighted ? 'border-[#fdb056]' : 'border-[#484d4e]'
      }`}
    >
      {/* Discount badge */}
      <div className='absolute top-0 left-[49px] flex items-center justify-center rounded-b-lg bg-[#fd5656] px-2 py-[5px]'>
        <span className='font-montserrat text-[22px] leading-[1.3] font-medium text-white'>
          -{discount}%
        </span>
      </div>

      {/* Hit label */}
      {isHit && (
        <span className='absolute top-[10px] right-[20px] text-[22px] leading-[1.3] font-medium tracking-[0.66px] text-[#fdb056]'>
          хит!
        </span>
      )}

      {/* Content */}
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col items-center gap-[30px]'>
          {/* Duration */}
          <span className='text-[26px] leading-[1.2] font-medium text-white'>
            {period}
          </span>

          {/* Price */}
          <div className='flex flex-col items-end'>
            <span
              className={`text-[50px] leading-none font-semibold ${
                isHighlighted ? 'text-[#fdb056]' : 'text-white'
              }`}
            >
              {price}
            </span>
            <div className='relative inline-grid'>
              <span className='text-[24px] leading-[1.2] font-normal text-[#919191]'>
                {full_price}
              </span>
              <div className='absolute top-[15px] left-0 h-[2px] w-full bg-[#919191]'></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='flex items-start justify-center py-2.5'>
          <p className='w-[204px] text-[16px] leading-[1.3] font-normal text-white'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
