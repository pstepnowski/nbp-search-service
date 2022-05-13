import { prepareDateRageUrls, validateArgs } from "../src/app/app.helpers";

describe("HelperMethods", () => {
  describe("should build correct url paths", () => {
    it("date range: 2018-05-05 - 2021-05-05", () => {
      const paths = prepareDateRageUrls(
        new Date("2018-05-05"),
        new Date("2021-05-05")
      );

      expect(paths).toMatchObject([
        "2018-05-05/2019-05-05",
        "2019-05-05/2020-05-05",
        "2020-05-05/2021-05-05",
      ]);
    });

    it("date start is in future", () => {
      const paths = prepareDateRageUrls(
        new Date("2034-05-05"),
        new Date("2021-05-05")
      );

      expect(paths).toMatchObject([]);
    });
  });

  describe("should check input script values ", () => {
    it("should be valid", function () {
      const args = validateArgs({ invest: 500, years: 5 });
      expect(args).toBeTruthy();
    });

    it("should be invalid", function () {
      const args = validateArgs({ invest: 500, years: "test" });
      expect(args).toBeFalsy();
    });
  });
});
