import { CountdownTimer } from '@/components/CountdownTimer';
import { HeroPricingCard } from '@/components/HeroPricingCard';
import { PricingCard } from '@/components/PricingCard';
import Image from 'next/image';

const pricingCards = [
  {
    id: 'f347d050-073c-4969-ae91-7346f935cf70',
    period: '1 неделя',
    price: 149,
    full_price: 999,
    is_best: false,
    text: 'Чтобы просто начать',
  },
  {
    id: 'f347d050-073c-4969-ae91-7346f935cf71',
    period: '1 месяц',
    price: 399,
    full_price: 1690,
    is_best: false,
    text: 'Чтобы получить первые результаты',
  },
  {
    id: 'f347d050-073c-4969-ae91-7346f935cf72',
    period: '3 месяца',
    price: 990,
    full_price: 3990,
    is_best: false,
    text: 'Привести тело в порядок',
  },
  {
    id: 'f347d050-073c-4969-ae91-7346f935cf72',
    period: 'Навсегда',
    price: 5990,
    full_price: 18990,
    is_best: true,
    text: 'Для тех, кто хочет всегда быть в форме и поддерживать здоровье',
  },
];

const cards = pricingCards.filter((card) => !card.is_best);

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden rounded-[60px] bg-[#232829] pb-[150px]'>
      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Main Content */}
      <div className='mx-auto max-w-[1920px] px-[352px] pt-[153px]'>
        {/* Title */}
        <h1 className='text-[40px] leading-none font-bold tracking-[0.4px] text-white'>
          Выбери подходящий для себя{' '}
          <span className='text-[#fdb056]'>тариф</span>
        </h1>

        {/* Content Area */}
        <div className='relative mt-[154px] flex gap-[88px]'>
          {/* Hero Image */}
          <div className='relative h-[767px] w-[381px]'>
            <Image
              src={'/img/man.png'}
              alt='Fitness hero'
              fill
              className='object-cover'
              style={{ objectPosition: '-14% 0' }}
            />
            {/* Gradient overlay */}
            <div className='absolute bottom-0 left-0 h-20 w-[362px] bg-gradient-to-b from-transparent to-[#232829]' />
          </div>

          {/* Pricing Cards Section */}
          <div className='flex flex-col gap-[14px]'>
            {/* Hero Card */}
            <HeroPricingCard />

            {/* Other Cards */}
            <div className='flex gap-[14px]'>
              {cards.map((card) => (
                <div key={card.id} className='w-[240px]'>
                  <PricingCard {...card} />
                </div>
              ))}
            </div>

            {/* Attention Block */}
            <div className='mt-5 flex gap-2 rounded-[20px] bg-[#2d3233] px-5 py-[18px]'>
              <Image
                src={'/img/exclamation.png'}
                alt=''
                width={24}
                height={26}
              />
              <p className='w-[427px] text-[16px] leading-[1.3] font-normal text-white'>
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className='mt-4 flex items-center gap-3'>
              <button className='h-8 w-8 flex-shrink-0'>
                <Image
                  src={'/img/checkbox_checked.png'}
                  alt='Checkbox'
                  width={32}
                  height={32}
                />
              </button>
              <p className='text-[16px] leading-[1.1] font-normal text-[#cdcdcd]'>
                Я согласен с{' '}
                <span className='underline'>офертой рекуррентных платежей</span>{' '}
                и{' '}
                <span className='underline'>Политикой конфиденциальности</span>
              </p>
            </div>

            {/* Buy Button */}
            <button className='mt-4 flex w-[352px] items-center justify-center rounded-[20px] bg-[#fdb056] px-[60px] py-5'>
              <span className='text-[20px] leading-[1.3] font-bold text-[#191e1f]'>
                Купить
              </span>
            </button>

            {/* Legal Text */}
            <p className='mt-4 w-[748px] text-[14px] leading-[1.2] font-normal text-[#9b9b9b]'>
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className='mt-[100px] flex flex-col gap-[30px] rounded-[30px] border border-[#484d4e] p-5'>
          <div className='inline-flex w-fit rounded-[30px] border border-[#81fe95] bg-[#2d3233] px-[30px] pt-4 pb-[18px]'>
            <span className='text-[28px] leading-[1.2] font-medium text-[#81fe95]'>
              гарантия возврата 30 дней
            </span>
          </div>
          <p className='w-[1176px] text-[24px] leading-[1.3] font-normal text-[#dcdcdc]'>
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые
            результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
            деньги в течение 30 дней с момента покупки, если ты не получишь
            видимых результатов.
          </p>
        </div>
      </div>
    </div>
  );
}
