import { HttpClient } from '@angular/common/http';
import { EntityIdentity, IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Observable } from 'rxjs';
import { AutoEntityServiceConfig } from './config';
import { EntityCriteria } from './critera.model';
import * as i0 from "@angular/core";
export declare class EntityService implements IAutoEntityService<any> {
    private readonly http;
    private readonly config;
    constructor(http: HttpClient, config: AutoEntityServiceConfig);
    protected getUrlPrefix(operation: string, info: IEntityInfo, criteria?: EntityCriteria): Observable<string>;
    protected buildUrl(operation: string, info: IEntityInfo, criteria?: EntityCriteria, key?: string | number): Observable<string>;
    load(entityInfo: IEntityInfo, key: any, criteria?: EntityCriteria): Observable<any>;
    loadMany(entityInfo: IEntityInfo, criteria?: EntityCriteria): Observable<any[]>;
    loadAll(entityInfo: IEntityInfo, criteria?: EntityCriteria): Observable<any[]>;
    create(entityInfo: IEntityInfo, entity: any, criteria?: EntityCriteria, originalEntity?: any): Observable<any>;
    update(entityInfo: IEntityInfo, entity: any, criteria?: EntityCriteria, originalEntity?: any): Observable<any>;
    replace(entityInfo: IEntityInfo, entity: any, criteria?: EntityCriteria, originalEntity?: any): Observable<any>;
    delete(entityInfo: IEntityInfo, entity: any, criteria?: EntityCriteria, originalEntity?: any): Observable<any>;
    deleteByKey(entityInfo: IEntityInfo, key: EntityIdentity, criteria?: EntityCriteria): Observable<EntityIdentity>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityService>;
}
