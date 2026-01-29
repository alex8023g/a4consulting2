import { getDiscount } from '@/lib/discount';
import { PricingCard } from './PricingCard';
import { Dispatch, SetStateAction, useContext } from 'react';
import { DataContext } from './ClientProvider';
import { twJoin } from 'tailwind-merge';

export function HeroPricingCard({
  card,
  setCardsData,
}: {
  card: PricingCard;
  setCardsData: Dispatch<SetStateAction<PricingCard[]>>;
}) {
  const ctx = useContext(DataContext);
  const time = ctx?.time;
  return (
    <div
      className={`relative block w-full rounded-[20px] border-2 bg-[#313637] px-[20px] py-[20px] md:h-[190px] md:rounded-[34px] md:pt-[30px] md:pb-[26px] md:pl-5 xl:flex xl:flex-col xl:items-end xl:justify-center xl:gap-4 ${
        card.isSelected ? 'border-[#fdb056]' : 'border-[#484d4e]'
      }`}
      onClick={() =>
        setCardsData((prev) =>
          prev.map((c) => ({
            ...c,
            isSelected: c.id === card.id && c.is_best,
          })),
        )
      }
    >
      <div className='absolute top-0 right-[18%] flex items-center justify-center overflow-hidden rounded-b-lg bg-[#fd5656] px-2 py-[5px] xl:right-auto xl:left-[50px]'>
        <span className='text-[13px] leading-[1.3] font-medium text-white md:text-[22px]'>
          -{getDiscount(card.price, card.full_price)}%
        </span>
      </div>

      <span className='absolute top-[10px] right-[4%] text-[14px] leading-[1.3] font-medium tracking-[0.66px] text-[#fdb056] md:text-[22px] xl:right-[66px]'>
        хит!
      </span>

      <div className='flex items-center justify-around gap-10'>
        <div className='flex w-1/2 flex-col items-start gap-[12px] md:gap-4 lg:w-auto lg:items-center'>
          <span className='text-[16px] leading-[1.2] font-medium text-white md:text-[26px]'>
            {card.period}
          </span>
          <div className='flex flex-col items-end'>
            {
              <span
                className={twJoin(
                  `text-[30px] leading-none font-semibold transition-opacity duration-500 md:text-[50px]`,
                  card.isSelected ? 'text-[#fdb056]' : 'text-white',
                  time && time === 1 ? 'opacity-0' : 'opacity-100',
                )}
              >
                {time ? (
                  <span>{card.price}&nbsp;₽</span>
                ) : (
                  <span>{card.full_price}&nbsp;₽</span>
                )}
              </span>
            }
            <div
              className={twJoin(
                'relative inline-grid transition-opacity duration-500',
                time && time > 1 ? 'opacity-100' : 'opacity-0',
              )}
            >
              <span className='text-[14px] leading-[1.2] font-normal text-[#919191] md:text-[24px]'>
                {card.full_price} ₽
              </span>
              <div className='absolute top-[50%] left-0 h-[2px] w-full bg-[#919191]'></div>
            </div>
          </div>
        </div>

        <div className='flex w-1/2 items-start justify-start py-2.5 text-[16px] leading-[1.3] font-normal text-white lg:w-auto lg:items-start lg:justify-center'>
          <p className='hidden w-[328px] md:block'>{card.text}</p>
          <p className='text-[13px] md:hidden'>Всегда быть в форме</p>
        </div>
      </div>
    </div>
  );
}
