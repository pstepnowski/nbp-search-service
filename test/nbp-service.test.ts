import mockAxios from "jest-mock-axios";

import NbpService from "../src/app/nbp/nbp.service";
import { prepareDateRageUrls } from "../src/app/app.helpers";
import { config } from "../src/config/config";

describe("NBPService", () => {
  it("nbp api should be called properly", async () => {
    const urlPaths = prepareDateRageUrls(
      new Date("2018-02-02"),
      new Date("2022-02-02")
    );

    const service = new NbpService(urlPaths);
    const promiseData = service.normalizeData();

    expect(mockAxios.get).toHaveBeenNthCalledWith(1, `2018-02-02/2019-02-02`, {
      baseURL: config.nbpGoldApiURL,
    });
    expect(mockAxios.get).toHaveBeenNthCalledWith(2, `2019-02-02/2020-02-02`, {
      baseURL: config.nbpGoldApiURL,
    });
    expect(mockAxios.get).toHaveBeenNthCalledWith(3, `2020-02-02/2021-02-02`, {
      baseURL: config.nbpGoldApiURL,
    });
    expect(mockAxios.get).toHaveBeenNthCalledWith(4, `2021-02-02/2022-02-02`, {
      baseURL: config.nbpGoldApiURL,
    });

    mockAxios.mockResponseFor(
      { url: "2018-02-02/2019-02-02" },
      {
        data: [
          {
            data: "2018-02-02",
            cena: 333.11,
          },
        ],
      }
    );
    mockAxios.mockResponseFor(
      { url: "2019-02-02/2020-02-02" },
      {
        data: [
          {
            data: "2018-02-02",
            cena: 220.47,
          },
        ],
      }
    );
    mockAxios.mockResponseFor(
      { url: "2020-02-02/2021-02-02" },
      {
        data: [
          {
            data: "2018-02-02",
            cena: 1233,
          },
        ],
      }
    );
    mockAxios.mockResponseFor(
      { url: "2021-02-02/2022-02-02" },
      {
        data: [
          {
            data: "2018-02-02",
            cena: 234.78,
          },
        ],
      }
    );
    expect(await promiseData).toMatchObject([
      { data: "2018-02-02", cena: 333.11 },
      { data: "2018-02-02", cena: 220.47 },
      { data: "2018-02-02", cena: 1233 },
      { data: "2018-02-02", cena: 234.78 },
    ]);
  });
});
