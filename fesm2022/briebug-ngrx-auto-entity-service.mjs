import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, makeEnvironmentProviders, importProvidersFrom, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { getKeyFromModel } from '@briebug/ngrx-auto-entity';
import { retry, of, from, first, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTO_ENTITY_CONFIG = new InjectionToken('@briebug/ngrx-auto-entity-service Config');

const EmptyKey = null;
const buildParentPaths = (criteria) => Object.keys((criteria && criteria.parents) || {})
    .map(parent => `/${parent}${criteria.parents[parent] === EmptyKey ? '' : `/${criteria.parents[parent]}`}`)
    .reduce((path, parent) => path + parent, '');
const buildEntityPath = (info, key, criteria) => `/${info.uriName || info.pluralName || info.modelName.toLowerCase()}${key ? `/${key}` : criteria && criteria.param ? `/${criteria.param}` : ''}`;
const buildSimpleQueryParam = (criteria, param) => `${param}=${criteria.query[param]}`;
const renderJoinedArrayQueryParams = (values, param) => values.map(value => `${param}=${value}`).join('&');
const buildJoinedArrayQueryParamSet = (criteria, param) => Array.isArray(criteria.query[param])
    ? renderJoinedArrayQueryParams(criteria.query[param], param.substring(1))
    : typeof criteria.query[param] === 'string'
        ? renderJoinedArrayQueryParams(criteria.query[param].split(','), param.substring(1))
        : buildSimpleQueryParam(criteria, param.substring(1));
const buildQueryString = (criteria) => criteria && criteria.query
    ? Object.keys(criteria.query)
        .map(param => (param.startsWith('&') ? buildJoinedArrayQueryParamSet(criteria, param) : buildSimpleQueryParam(criteria, param)))
        .join('&')
    : '';
const buildUrl = (host, info, criteria, key = null) => {
    const parentPaths = buildParentPaths(criteria);
    const entityPath = buildEntityPath(info, key, criteria);
    const query = buildQueryString(criteria);
    const version = criteria?.version ? `/v${criteria.version}` : '';
    const url = `${host}${version}${parentPaths}${entityPath}${query ? `?${query}` : ''}`;
    return url;
};
const resolveRetryCriteria = (obs, retryCriteria, defaultCriteria) => retryCriteria
    ? typeof retryCriteria === 'boolean'
        ? obs.pipe(retry({ count: defaultCriteria?.maxRetries || 3, delay: defaultCriteria?.delay || 1000 }))
        : obs.pipe(retry({
            count: retryCriteria.maxRetries || defaultCriteria?.maxRetries || 3,
            delay: retryCriteria.delay || defaultCriteria?.delay || 1000
        }))
    : obs;

class EntityService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getUrlPrefix(operation, info, criteria) {
        return typeof this.config.urlPrefix === 'string' ? of(this.config.urlPrefix) : from(this.config.urlPrefix(operation, info, criteria));
    }
    buildUrl(operation, info, criteria, key) {
        return this.getUrlPrefix('load', info, criteria).pipe(first(), map(prefix => buildUrl(prefix, info, criteria, key)));
    }
    load(entityInfo, key, criteria) {
        return this.buildUrl('load', entityInfo, criteria, key).pipe(switchMap(url => resolveRetryCriteria(this.http.get(url), criteria?.retry, this.config.defaultRetry)));
    }
    loadMany(entityInfo, criteria) {
        return this.buildUrl('loadMany', entityInfo, criteria).pipe(switchMap(url => resolveRetryCriteria(this.http.get(url), criteria?.retry, this.config.defaultRetry)));
    }
    loadAll(entityInfo, criteria) {
        return this.buildUrl('loadAll', entityInfo, criteria).pipe(switchMap(url => resolveRetryCriteria(this.http.get(url), criteria?.retry, this.config.defaultRetry)));
    }
    create(entityInfo, entity, criteria, originalEntity) {
        return this.buildUrl('create', entityInfo, criteria).pipe(switchMap(url => this.http.post(url, entity)));
    }
    update(entityInfo, entity, criteria, originalEntity) {
        return this.buildUrl('update', entityInfo, criteria, getKeyFromModel(entityInfo.modelType, entity)).pipe(switchMap(url => this.http.patch(url, entity)));
    }
    replace(entityInfo, entity, criteria, originalEntity) {
        return this.buildUrl('replace', entityInfo, criteria, getKeyFromModel(entityInfo.modelType, entity)).pipe(switchMap(url => this.http.put(url, entity)));
    }
    delete(entityInfo, entity, criteria, originalEntity) {
        return this.buildUrl('delete', entityInfo, criteria, getKeyFromModel(entityInfo.modelType, entity)).pipe(switchMap(url => this.http.delete(url, entity).pipe(map(() => entity))));
    }
    deleteByKey(entityInfo, key, criteria) {
        return this.buildUrl('deleteByKey', entityInfo, criteria, key).pipe(switchMap(url => this.http.delete(url).pipe(map(() => key))));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityService, deps: [{ token: i1.HttpClient }, { token: AUTO_ENTITY_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AUTO_ENTITY_CONFIG]
                }] }] });

/** @internal */
function _provideAutoEntityService(config, deps) {
    return [
        EntityService,
        createConfigProvider(config, deps)
    ];
}
/**
 * Sets up providers for the auto-entity entity service.
 *
 * @usageNotes
 *
 * ### Providing Auto-Entity Service
 *
 * Basic example of using the Auto-Entity Entity Service with your entities:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     // …
 *     provideAutoEntityService({
 *       urlPrefix: 'https://example.com/api'
 *     }),
 *   ]
 * });
 * ```
 *
 * ### Dynamic configuration
 *
 * You can also provide the Auto-Entity Entity Service configuration dynamically:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     // …
 *     provideAutoEntityService(() => {
 *       const configService = inject(ConfigService);
 *       return {
 *         urlPrefix: configService.apiBaseUrl
 *       }
 *     })
 *   ]
 * });
 * ```
 *
 * @publicApi
 * @param config An Auto-Entity Entity Service configuration object or a factory function that returns an Auto-Entity Entity Service configuration object.
 * @param deps A list of dependencies to inject into the factory function.
 * @returns A set of providers to set up an Auto-Entity Service.
 */
function provideAutoEntityService(config, deps) {
    return makeEnvironmentProviders([
        importProvidersFrom(HttpClientModule),
        ..._provideAutoEntityService(config, deps)
    ]);
}
const createConfigProvider = (config, deps) => typeof config === 'function'
    ? {
        provide: AUTO_ENTITY_CONFIG,
        useFactory: config,
        deps
    }
    : { provide: AUTO_ENTITY_CONFIG, useValue: config };

class NgrxAutoEntityServiceModule {
    static forRoot(config, deps) {
        return {
            ngModule: NgrxAutoEntityServiceModule,
            providers: [..._provideAutoEntityService(config, deps)],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, imports: [HttpClientModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, imports: [HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [HttpClientModule]
                }]
        }] });

/*
 * Public API Surface of NGRX Auto Entity Service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EntityService, NgrxAutoEntityServiceModule, provideAutoEntityService };
//# sourceMappingURL=briebug-ngrx-auto-entity-service.mjs.map
