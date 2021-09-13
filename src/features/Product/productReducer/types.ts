import { RequestError } from '../../../store/types';
import { ProductResponseType } from '../types';

export interface ProductState {
  productResponse: ProductResponseType | null;
  isLoading: boolean;
  requestError: RequestError | null;
}

export enum ProductWorkerType {
  fetchData = 'product/fetchData',
}

interface ProductWorker<T, P> {
  type: T;
  payload: P;
}

export type ProductFetchDataWorker = ProductWorker<
  ProductWorkerType.fetchData,
  number
>;
