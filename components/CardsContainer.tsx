'use client';

import { HeroPricingCard } from './HeroPricingCard';
import { PricingCard } from './PricingCard';
import { useState } from 'react';

export function CardsContainer({
  cardsDataProp,
}: {
  cardsDataProp: PricingCard[];
}) {
  const [cardsData, setCardsData] = useState<PricingCard[]>(cardsDataProp);
  const heroCard = cardsData.find((card) => card.is_best);
  const cards = cardsData.filter((card) => !card.is_best);

  return (
    <>
      {heroCard && (
        <HeroPricingCard card={heroCard} setCardsData={setCardsData} />
      )}

      <div className='flex flex-col gap-[14px] lg:flex-row'>
        {cards.map((card) => (
          <PricingCard key={card.id} card={card} setCardsData={setCardsData} />
        ))}
      </div>
    </>
  );
}
