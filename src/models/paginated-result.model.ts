export interface PaginatedResult<T> {
    data: T[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
}
