export interface NbpRecordObject {
  data: string;
  cena: number;
}

export interface BestInvest {
  bestBuy: NbpRecordObject;
  bestSell: NbpRecordObject;
  profit: number;
  totalProfit: number;
}

export interface BestInvestExtended extends BestInvest {
  lowestPrice: number;
  maxProfit: number;
  maxPrice: any;
}

export interface SupportedArgv {
  invest: number;
  years: number;
}
