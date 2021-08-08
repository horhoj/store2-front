import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AjaxWorkReport {
  config: AxiosRequestConfig;
  response: AxiosResponse | null;
  error: any | null;
}
