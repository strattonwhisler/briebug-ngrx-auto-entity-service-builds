export interface EntityCriteria {
    parents?: EntityParent;
    query?: QueryCriteria;
    param?: string | number | string[] | number[];
    version?: number;
    retry?: boolean | RetryCriteria;
    [key: string]: unknown;
}
export interface EntityParent {
    [key: string]: string | number;
}
export interface RetryCriteria {
    delay?: number;
    maxRetries?: number;
}
export interface QueryCriteria {
    [key: string]: string | number | string[] | number[];
}
