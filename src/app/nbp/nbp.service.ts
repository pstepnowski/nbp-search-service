import axios from "axios";
import * as _ from "lodash";
import config from "../../config/config";
import { NbpRecordObject } from "./nbp.types";

export default class NbpService {
  constructor(private paths: string[], private con = config) {}

  private makeRequest = (path: string) => {
    return axios.get<NbpRecordObject>(path, {
      baseURL: this.con.nbpGoldApiURL,
    });
  };

  fetchData = () => {
    const requests = this.paths.map((path) => {
      return this.makeRequest(path);
    });

    return Promise.all(requests);
  };

  normalizeData = async () => {
    const res = await this.fetchData();
    const data = res.map((res) => res.data);
    return _.flatten(data);
  };
}
