import { importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AUTO_ENTITY_CONFIG } from './config';
import { EntityService } from './entity.service';
/** @internal */
export function _provideAutoEntityService(config, deps) {
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
export function provideAutoEntityService(config, deps) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdyeC1hdXRvLWVudGl0eS1zZXJ2aWNlLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS1zZXJ2aWNlL3NyYy9saWIvbmdyeC1hdXRvLWVudGl0eS1zZXJ2aWNlLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBd0IsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUEyRCxNQUFNLFVBQVUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsZ0JBQWdCO0FBQ2hCLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxNQUFnRSxFQUFFLElBQVk7SUFDdEgsT0FBTztRQUNMLGFBQWE7UUFDYixvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0tBQ25DLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0c7QUFDSCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBZ0UsRUFBRSxJQUFZO0lBQ3JILE9BQU8sd0JBQXdCLENBQUM7UUFDOUIsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7UUFDckMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0tBQzNDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsTUFBZ0UsRUFBRSxJQUFZLEVBQVksRUFBRSxDQUN4SCxPQUFPLE1BQU0sS0FBSyxVQUFVO0lBQzFCLENBQUMsQ0FBQztRQUNBLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsVUFBVSxFQUFFLE1BQU07UUFDbEIsSUFBSTtLQUNMO0lBQ0QsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50UHJvdmlkZXJzLCBpbXBvcnRQcm92aWRlcnNGcm9tLCBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQVVUT19FTlRJVFlfQ09ORklHLCBBdXRvRW50aXR5U2VydmljZUNvbmZpZywgRHluYW1pY0F1dG9FbnRpdHlTZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4vZW50aXR5LnNlcnZpY2UnO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX3Byb3ZpZGVBdXRvRW50aXR5U2VydmljZShjb25maWc6IEF1dG9FbnRpdHlTZXJ2aWNlQ29uZmlnIHwgRHluYW1pY0F1dG9FbnRpdHlTZXJ2aWNlQ29uZmlnLCBkZXBzPzogYW55W10pOiBQcm92aWRlcltdIHtcbiAgcmV0dXJuIFtcbiAgICBFbnRpdHlTZXJ2aWNlLFxuICAgIGNyZWF0ZUNvbmZpZ1Byb3ZpZGVyKGNvbmZpZywgZGVwcylcbiAgXTtcbn1cblxuLyoqXG4gKiBTZXRzIHVwIHByb3ZpZGVycyBmb3IgdGhlIGF1dG8tZW50aXR5IGVudGl0eSBzZXJ2aWNlLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIFByb3ZpZGluZyBBdXRvLUVudGl0eSBTZXJ2aWNlXG4gKlxuICogQmFzaWMgZXhhbXBsZSBvZiB1c2luZyB0aGUgQXV0by1FbnRpdHkgRW50aXR5IFNlcnZpY2Ugd2l0aCB5b3VyIGVudGl0aWVzOlxuICogYGBgXG4gKiBib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIHtcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgLy8g4oCmXG4gKiAgICAgcHJvdmlkZUF1dG9FbnRpdHlTZXJ2aWNlKHtcbiAqICAgICAgIHVybFByZWZpeDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vYXBpJ1xuICogICAgIH0pLFxuICogICBdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICMjIyBEeW5hbWljIGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBZb3UgY2FuIGFsc28gcHJvdmlkZSB0aGUgQXV0by1FbnRpdHkgRW50aXR5IFNlcnZpY2UgY29uZmlndXJhdGlvbiBkeW5hbWljYWxseTpcbiAqIGBgYFxuICogYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCB7XG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIC8vIOKAplxuICogICAgIHByb3ZpZGVBdXRvRW50aXR5U2VydmljZSgoKSA9PiB7XG4gKiAgICAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gaW5qZWN0KENvbmZpZ1NlcnZpY2UpO1xuICogICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgdXJsUHJlZml4OiBjb25maWdTZXJ2aWNlLmFwaUJhc2VVcmxcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICogICBdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBwYXJhbSBjb25maWcgQW4gQXV0by1FbnRpdHkgRW50aXR5IFNlcnZpY2UgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBBdXRvLUVudGl0eSBFbnRpdHkgU2VydmljZSBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSBkZXBzIEEgbGlzdCBvZiBkZXBlbmRlbmNpZXMgdG8gaW5qZWN0IGludG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyBBIHNldCBvZiBwcm92aWRlcnMgdG8gc2V0IHVwIGFuIEF1dG8tRW50aXR5IFNlcnZpY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXV0b0VudGl0eVNlcnZpY2UoY29uZmlnOiBBdXRvRW50aXR5U2VydmljZUNvbmZpZyB8IER5bmFtaWNBdXRvRW50aXR5U2VydmljZUNvbmZpZywgZGVwcz86IGFueVtdKTogRW52aXJvbm1lbnRQcm92aWRlcnMge1xuICByZXR1cm4gbWFrZUVudmlyb25tZW50UHJvdmlkZXJzKFtcbiAgICBpbXBvcnRQcm92aWRlcnNGcm9tKEh0dHBDbGllbnRNb2R1bGUpLFxuICAgIC4uLl9wcm92aWRlQXV0b0VudGl0eVNlcnZpY2UoY29uZmlnLCBkZXBzKVxuICBdKTtcbn1cblxuY29uc3QgY3JlYXRlQ29uZmlnUHJvdmlkZXIgPSAoY29uZmlnOiBBdXRvRW50aXR5U2VydmljZUNvbmZpZyB8IER5bmFtaWNBdXRvRW50aXR5U2VydmljZUNvbmZpZywgZGVwcz86IGFueVtdKTogUHJvdmlkZXIgPT5cbiAgdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8ge1xuICAgICAgcHJvdmlkZTogQVVUT19FTlRJVFlfQ09ORklHLFxuICAgICAgdXNlRmFjdG9yeTogY29uZmlnLFxuICAgICAgZGVwc1xuICAgIH1cbiAgICA6IHsgcHJvdmlkZTogQVVUT19FTlRJVFlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH07XG4iXX0=