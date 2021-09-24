import { RequestError } from '../../../store/types';
import { ProductRequestType, ProductResponseType } from '../types';

export interface ProductState {
  productResponse: ProductResponseType | null;
  isLoading: boolean;
  requestError: RequestError | null;
}

export enum ProductWorkerType {
  FETCH_DATA = 'product/fetchDataWorker',
  PATCH_DATA = 'product/patchDataWorker',
  NEW = 'product/newWorker',
}

interface ProductWorker<T, P> {
  type: T;
  payload: P;
}

export type ProductFetchDataWorker = ProductWorker<
  ProductWorkerType.FETCH_DATA,
  number
>;

export type ProductPatchDataWorker = ProductWorker<
  ProductWorkerType.PATCH_DATA,
  ProductRequestType
>;

export type ProductNewWorker = ProductWorker<
  ProductWorkerType.NEW,
  ProductRequestType
>;
