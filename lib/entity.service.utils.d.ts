import { IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Observable } from 'rxjs';
import { EntityCriteria, RetryCriteria } from './critera.model';
export declare const EmptyKey: any;
export declare const buildParentPaths: (criteria: EntityCriteria) => string;
export declare const buildEntityPath: (info: IEntityInfo, key?: any, criteria?: EntityCriteria) => string;
export declare const buildSimpleQueryParam: (criteria: EntityCriteria, param: string) => string;
export declare const renderJoinedArrayQueryParams: (values: any[], param: string) => string;
export declare const buildJoinedArrayQueryParamSet: (criteria: EntityCriteria, param: string) => string;
export declare const buildQueryString: (criteria: EntityCriteria) => string;
export declare const buildUrl: (host: string, info: IEntityInfo, criteria?: EntityCriteria, key?: any) => string;
export declare const resolveRetryCriteria: <T>(obs: Observable<T>, retryCriteria: boolean | RetryCriteria, defaultCriteria?: RetryCriteria) => Observable<T>;
