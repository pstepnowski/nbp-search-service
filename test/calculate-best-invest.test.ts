import NBPResponse from "./resources/nbp-gold-response";

import { calculateBestInvest } from "../src/app/nbp/nbp.helpers";

describe("calculateBestInvest", () => {
  it("should calculate best buy/shell moment and profit", () => {
    const totalInvest = 10000;

    const bestInvest = calculateBestInvest(totalInvest, NBPResponse);

    expect(bestInvest).toMatchObject({
      bestBuy: { data: "2021-06-30", cena: 213.99 },
      bestSell: { data: "2021-07-21", cena: 228.65 },
      profit: 14.66,
      totalProfit: 685.08,
    });
  });
});
