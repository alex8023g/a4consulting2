'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type DataContextType = {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  isAgreementChecked: boolean;
  setIsAgreementChecked: Dispatch<SetStateAction<boolean>>;
  isBuyBtnClicked: boolean;
  setIsBuyBtnClicked: Dispatch<SetStateAction<boolean>>;
};

export const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(120);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isBuyBtnClicked, setIsBuyBtnClicked] = useState(false);
  return (
    <DataContext.Provider
      value={{
        time,
        setTime,
        isAgreementChecked,
        setIsAgreementChecked,
        isBuyBtnClicked,
        setIsBuyBtnClicked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
