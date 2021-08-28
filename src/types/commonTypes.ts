export interface EntityListRequestOptions<F> {
  page: number;
  per_page: number;
  search: string;
  sort_field: F;
  sort_asc: 0 | 1;
}
