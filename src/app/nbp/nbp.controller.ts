import NbpService from "./nbp.service";
import { calculateBestInvest } from "./nbp.helpers";
import { SupportedArgv } from "./nbp.types";
import { prepareDateRageUrls } from "../app.helpers";
import moment from "moment";

export const searchBestInvestOption = async (argv: SupportedArgv) => {
  const today = moment().toDate();
  const pastDate = moment().subtract(argv["years"], "years").toDate();

  const paths = prepareDateRageUrls(pastDate, today);

  const nbpService = new NbpService(paths);

  const nbpNormalizedData = await nbpService.normalizeData();

  const result = calculateBestInvest(argv["invest"], nbpNormalizedData);

  console.log(result);
};
