import * as _ from "lodash";
import moment from "moment";

export const argsCommandSupported = ["invest", "years"];

export const validateArgs = (values: any) => {
  return _.every(Object.values(_.pick(values, argsCommandSupported)), Number);
};

export const prepareDateRageUrls = (startDate: Date, endDate: Date) => {
  const dateFormat = "YYYY-MM-DD";
  const now = moment(startDate);
  const dates = [];

  while (now.isBefore(endDate)) {
    const nextYear = now.clone();
    dates.push(
      [
        now.format(dateFormat),
        nextYear.add(1, "years").format(dateFormat),
      ].join("/")
    );

    now.add(1, "years");
  }
  return dates;
};

export const toPrice = (price: number) => _.round(price, 2);
