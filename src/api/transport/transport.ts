import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { logger } from '../../utils/logger';
import { AjaxWorkReport } from './types';

export const ajax = async (
  requestConfig: AxiosRequestConfig,
): Promise<AxiosPromise> => {
  const ajaxWorkReport: AjaxWorkReport = {
    config: requestConfig,
    response: null,
    error: null,
  };
  try {
    const response = await axios(requestConfig);
    ajaxWorkReport.response = response;
    return response;
  } catch (e) {
    ajaxWorkReport.error = e;
    throw e;
  } finally {
    logger('ajax', ajaxWorkReport);
  }
};
