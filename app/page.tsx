import { CardsContainer } from '@/components/CardsContainer';
import { CountdownTimer } from '@/components/CountdownTimer';
import { PricingCard } from '@/components/PricingCard';
import Image from 'next/image';
import { DataProvider } from '@/components/ClientProvider';
import { getData } from '@/lib/getData';
import { Checkbox } from '@/components/Checkbox';
import { BuyBtn } from '@/components/BuyBtn';

export type PricingData = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};

const pricingData: PricingData[] = await getData();

const cardsData: PricingCard[] = pricingData.map((card) =>
  card.is_best
    ? {
        ...card,
        isSelected: true,
      }
    : {
        ...card,
        isSelected: false,
      },
);

export default function Home() {
  return (
    <DataProvider>
      <header className='sticky top-0 z-10 bg-white'>
        <div className='flex w-full flex-col items-center gap-1 bg-[#1d5b43] py-2 xl:rounded-t-[60px]'>
          <span className='text-[14px] leading-[1.3] font-semibold text-white md:text-[24px]'>
            Успейте открыть пробную неделю
          </span>
          <CountdownTimer />
        </div>
      </header>
      <div className='flex flex-col overflow-hidden bg-[#232829] px-[16px] pb-[30px] xl:rounded-b-[60px] xl:px-0 xl:pb-[150px]'>
        <div className='mx-auto pt-[20px] lg:max-w-[760px] xl:max-w-[1240px] xl:pt-[50px]'>
          <h1 className='mb-[24px] text-[22px] leading-none font-bold tracking-[0.4px] text-white xl:mb-[110px] xl:text-[40px]'>
            Выбери подходящий для себя{' '}
            <span className='text-[#fdb056]'>тариф</span>
          </h1>

          <div className='relative flex flex-col xl:flex-row xl:gap-[88px]'>
            <div className='relative mx-auto h-[200px] w-full xl:mx-0 xl:mt-16 xl:h-[767px] xl:w-[381px]'>
              <Image
                src={'/img/man.png'}
                alt='Fitness hero'
                fill
                className='mx-auto object-contain'
              />
              <div className='absolute bottom-0 left-0 h-20 w-[362px] bg-linear-to-b from-transparent to-[#232829]' />
            </div>

            <div className='flex flex-col gap-[14px] xl:mx-0'>
              <CardsContainer cardsDataProp={cardsData} />

              <div className='mt-0 flex gap-2 rounded-[20px] bg-[#2d3233] py-[14px] pr-[20px] pl-[12px] md:px-[20px] md:py-[18px] lg:w-[500px] xl:mt-5'>
                <div className='h-[26px] w-[24px] shrink-0'>
                  <Image
                    src={'/img/exclamation.png'}
                    alt=''
                    width={24}
                    height={26}
                  />
                </div>
                <p className='text-[12px] leading-[1.6] font-normal text-white md:text-[16px]'>
                  Следуя плану на 3 месяца и более, люди получают в 2 раза
                  лучший результат, чем за 1 месяц
                </p>
              </div>

              <div className='mt-0 flex max-w-[605px] items-center gap-3 xl:mt-4'>
                <Checkbox />
              </div>

              <BuyBtn />

              <p className='mt-4 max-w-[748px] text-[14px] leading-[1.2] font-normal text-[#9b9b9b]'>
                Нажимая кнопку «Купить», Пользователь соглашается на разовое
                списание денежных средств для получения пожизненного доступа к
                приложению. Пользователь соглашается, что данные
                кредитной/дебетовой карты будут сохранены для осуществления
                покупок дополнительных услуг сервиса в случае желания
                пользователя.
              </p>
            </div>
          </div>

          <div className='mt-[24px] flex flex-col gap-[30px] rounded-[30px] border border-[#484d4e] p-[12px] md:p-[20px] xl:mt-[66px]'>
            <div className='inline-flex w-fit rounded-[30px] border border-[#81fe95] bg-[#2d3233] px-[18px] pt-[10px] pb-[12px] md:px-[30px] md:pt-[16px] md:pb-[18px]'>
              <span className='text-[16px] leading-[1.2] font-medium text-[#81fe95] md:text-[28px]'>
                гарантия возврата 30 дней
              </span>
            </div>
            <p className='/w-[1176px] text-[13px] leading-[1.3] font-normal text-[#dcdcdc] md:text-[24px]'>
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </p>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}
