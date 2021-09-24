import { CategoryFetchDataWorker, CategoryWorkerType } from './types';

export const categoryFetchData = (id: number): CategoryFetchDataWorker => ({
  type: CategoryWorkerType.fetchData,
  payload: id,
});
