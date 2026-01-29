'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type TimerContextType = {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
};

export const TimerContext = createContext<TimerContextType | null>(null);

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(120);
  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
}
