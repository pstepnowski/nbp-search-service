import * as _ from "lodash";
import { BestInvest, BestInvestExtended, NbpRecordObject } from "./nbp.types";
import { toPrice } from "../app.helpers";

export function calculateBestInvest(
  totalInvestment: number,
  data: NbpRecordObject[]
): BestInvest {
  const result = data.reduce(
    (acc, val) => {
      if (val.cena < acc.lowestPrice) {
        acc.lowestPrice = val.cena;
        acc.bestBuy = val;
      } else if (val.cena - acc.lowestPrice > acc.maxProfit) {
        acc.maxProfit = val.cena - acc.lowestPrice;
        acc.maxPrice = val.cena;

        acc.bestSell = val;
        acc.profit = toPrice(acc.maxProfit);
      }

      return acc;
    },
    {
      lowestPrice: Infinity,
      maxPrice: 0,
      maxProfit: 0,
      bestBuy: {},
      bestSell: {},
      profit: 0,
    }
  ) as BestInvestExtended;

  const goldUnits = totalInvestment / result.bestBuy.cena;
  const totalAfterMaxPrice = goldUnits * result.bestSell.cena;

  result.totalProfit = toPrice(totalAfterMaxPrice - totalInvestment);

  return _.omit(result, ["lowestPrice", "maxPrice", "maxProfit"]);
}
