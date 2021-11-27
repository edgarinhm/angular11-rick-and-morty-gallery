export interface ApiPayload<T> {
  info: { count: number, pages: number };
  results: T[];
}
