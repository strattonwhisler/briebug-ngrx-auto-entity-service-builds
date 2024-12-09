import { EnvironmentProviders, Provider } from '@angular/core';
import { AutoEntityServiceConfig, DynamicAutoEntityServiceConfig } from './config';
/** @internal */
export declare function _provideAutoEntityService(config: AutoEntityServiceConfig | DynamicAutoEntityServiceConfig, deps?: any[]): Provider[];
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
export declare function provideAutoEntityService(config: AutoEntityServiceConfig | DynamicAutoEntityServiceConfig, deps?: any[]): EnvironmentProviders;
