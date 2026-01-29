'use client';

import { DataContext } from './ClientProvider';
import { useContext } from 'react';

export function BuyBtn() {
  const ctx = useContext(DataContext);
  return (
    <button
      className='mt-4 flex animate-pulse items-center justify-center rounded-[20px] bg-[#fdb056] px-[60px] py-5 md:w-[352px]'
      onClick={() => ctx?.setIsBuyBtnClicked(true)}
    >
      <span className='text-[18px] leading-[1.3] font-bold text-[#191e1f] md:text-[20px]'>
        Купить
      </span>
    </button>
  );
}
