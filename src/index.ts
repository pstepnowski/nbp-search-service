#!/usr/bin/env node

import { argsCommandSupported, validateArgs } from "./app/app.helpers";
import { searchBestInvestOption } from "./app/nbp/nbp.controller";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as _ from "lodash";

const runCommandScript = async (script: Function): Promise<void> => {
  const argv = yargs(hideBin(process.argv))
    .options({
      invest: {
        type: "number",
        description: "Amount of money to invest",
        demandOption: true,
      },
      years: {
        type: "number",
        description: "Historical data in years to check",
        demandOption: true,
      },
    })
    .check((argv, options) => {
      if (!validateArgs(argv)) {
        throw "Incorrect argument value";
      }

      return true;
    }).argv;

  script(_.pick(argv, argsCommandSupported));
};

const run = () => {
  runCommandScript(searchBestInvestOption).catch((err) => console.error(err));
};

run();
