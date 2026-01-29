'use client';
import Image from 'next/image';
import { DataContext } from './ClientProvider';
import { useContext } from 'react';
import { twJoin } from 'tailwind-merge';
export function Checkbox() {
  const ctx = useContext(DataContext);
  const isAgreementChecked = ctx?.isAgreementChecked;
  const isBuyBtnClicked = ctx?.isBuyBtnClicked;

  return (
    <div className='flex max-w-[605px] gap-3'>
      <div className='flex shrink-0 items-center'>
        <div
          className={twJoin(
            'group relative h-[32px] w-[32px] rounded-[6px] border',
            isBuyBtnClicked && !isAgreementChecked
              ? 'border-red-500'
              : 'border-[#606566]',
          )}
        >
          <input
            checked={isAgreementChecked}
            onChange={() => ctx?.setIsAgreementChecked(!isAgreementChecked)}
            id='checkbox-1'
            name='checkbox-1'
            type='checkbox'
            className='absolute top-0 left-0 z-10 size-full opacity-0'
          />
          {isAgreementChecked ? (
            <Image
              src={'/img/checked.png'}
              alt='Checkbox'
              width={23}
              height={23}
              className='/bg-red-500 size-full rounded-full'
            />
          ) : null}
        </div>
      </div>
      <div className='text-sm/6'>
        <label htmlFor='checkbox-1'>
          <p className='text-[12px] leading-[1.1] font-normal text-[#cdcdcd] md:text-[16px]'>
            Я согласен с{' '}
            <span className='underline'>офертой рекуррентных платежей</span> и{' '}
            <span className='underline'>Политикой конфиденциальности</span>
          </p>
        </label>
      </div>
    </div>
  );
}
