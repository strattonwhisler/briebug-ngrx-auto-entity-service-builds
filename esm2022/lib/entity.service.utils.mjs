import { retry } from 'rxjs';
export const EmptyKey = null;
export const buildParentPaths = (criteria) => Object.keys((criteria && criteria.parents) || {})
    .map(parent => `/${parent}${criteria.parents[parent] === EmptyKey ? '' : `/${criteria.parents[parent]}`}`)
    .reduce((path, parent) => path + parent, '');
export const buildEntityPath = (info, key, criteria) => `/${info.uriName || info.pluralName || info.modelName.toLowerCase()}${key ? `/${key}` : criteria && criteria.param ? `/${criteria.param}` : ''}`;
export const buildSimpleQueryParam = (criteria, param) => `${param}=${criteria.query[param]}`;
export const renderJoinedArrayQueryParams = (values, param) => values.map(value => `${param}=${value}`).join('&');
export const buildJoinedArrayQueryParamSet = (criteria, param) => Array.isArray(criteria.query[param])
    ? renderJoinedArrayQueryParams(criteria.query[param], param.substring(1))
    : typeof criteria.query[param] === 'string'
        ? renderJoinedArrayQueryParams(criteria.query[param].split(','), param.substring(1))
        : buildSimpleQueryParam(criteria, param.substring(1));
export const buildQueryString = (criteria) => criteria && criteria.query
    ? Object.keys(criteria.query)
        .map(param => (param.startsWith('&') ? buildJoinedArrayQueryParamSet(criteria, param) : buildSimpleQueryParam(criteria, param)))
        .join('&')
    : '';
export const buildUrl = (host, info, criteria, key = null) => {
    const parentPaths = buildParentPaths(criteria);
    const entityPath = buildEntityPath(info, key, criteria);
    const query = buildQueryString(criteria);
    const version = criteria?.version ? `/v${criteria.version}` : '';
    const url = `${host}${version}${parentPaths}${entityPath}${query ? `?${query}` : ''}`;
    return url;
};
export const resolveRetryCriteria = (obs, retryCriteria, defaultCriteria) => retryCriteria
    ? typeof retryCriteria === 'boolean'
        ? obs.pipe(retry({ count: defaultCriteria?.maxRetries || 3, delay: defaultCriteria?.delay || 1000 }))
        : obs.pipe(retry({
            count: retryCriteria.maxRetries || defaultCriteria?.maxRetries || 3,
            delay: retryCriteria.delay || defaultCriteria?.delay || 1000
        }))
    : obs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5LXNlcnZpY2Uvc3JjL2xpYi9lbnRpdHkuc2VydmljZS51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3pDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxRQUF3QixFQUFVLEVBQUUsQ0FDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDekcsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEdBQVMsRUFBRSxRQUF5QixFQUFVLEVBQUUsQ0FDakcsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FDakUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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YTtJQUNYLENBQUMsQ0FBQyxPQUFPLGFBQWEsS0FBSyxTQUFTO1FBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUNOLEtBQUssQ0FBQztZQUNKLEtBQUssRUFBRSxhQUFhLENBQUMsVUFBVSxJQUFJLGVBQWUsRUFBRSxVQUFVLElBQUksQ0FBQztZQUNuRSxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUUsS0FBSyxJQUFJLElBQUk7U0FDN0QsQ0FBQyxDQUNIO0lBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElFbnRpdHlJbmZvIH0gZnJvbSAnQGJyaWVidWcvbmdyeC1hdXRvLWVudGl0eSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCByZXRyeSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRW50aXR5Q3JpdGVyaWEsIFJldHJ5Q3JpdGVyaWEgfSBmcm9tICcuL2NyaXRlcmEubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgRW1wdHlLZXkgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgYnVpbGRQYXJlbnRQYXRocyA9IChjcml0ZXJpYTogRW50aXR5Q3JpdGVyaWEpOiBzdHJpbmcgPT5cbiAgT2JqZWN0LmtleXMoKGNyaXRlcmlhICYmIGNyaXRlcmlhLnBhcmVudHMpIHx8IHt9KVxuICAgIC5tYXAocGFyZW50ID0+IGAvJHtwYXJlbnR9JHtjcml0ZXJpYS5wYXJlbnRzW3BhcmVudF0gPT09IEVtcHR5S2V5ID8gJycgOiBgLyR7Y3JpdGVyaWEucGFyZW50c1twYXJlbnRdfWB9YClcbiAgICAucmVkdWNlKChwYXRoLCBwYXJlbnQpID0+IHBhdGggKyBwYXJlbnQsICcnKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRW50aXR5UGF0aCA9IChpbmZvOiBJRW50aXR5SW5mbywga2V5PzogYW55LCBjcml0ZXJpYT86IEVudGl0eUNyaXRlcmlhKTogc3RyaW5nID0+XG4gIGAvJHtpbmZvLnVyaU5hbWUgfHwgaW5mby5wbHVyYWxOYW1lIHx8IGluZm8ubW9kZWxOYW1lLnRvTG93ZXJDYXNlKCl9JHtcbiAgICBrZXkgPyBgLyR7a2V5fWAgOiBjcml0ZXJpYSAmJiBjcml0ZXJpYS5wYXJhbSA/IGAvJHtjcml0ZXJpYS5wYXJhbX1gIDogJydcbiAgfWA7XG5cbmV4cG9ydCBjb25zdCBidWlsZFNpbXBsZVF1ZXJ5UGFyYW0gPSAoY3JpdGVyaWE6IEVudGl0eUNyaXRlcmlhLCBwYXJhbTogc3RyaW5nKSA9PiBgJHtwYXJhbX09JHtjcml0ZXJpYS5xdWVyeVtwYXJhbV19YDtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckpvaW5lZEFycmF5UXVlcnlQYXJhbXMgPSAodmFsdWVzOiBhbnlbXSwgcGFyYW06IHN0cmluZykgPT4gdmFsdWVzLm1hcCh2YWx1ZSA9PiBgJHtwYXJhbX09JHt2YWx1ZX1gKS5qb2luKCcmJyk7XG5cbmV4cG9ydCBjb25zdCBidWlsZEpvaW5lZEFycmF5UXVlcnlQYXJhbVNldCA9IChjcml0ZXJpYTogRW50aXR5Q3JpdGVyaWEsIHBhcmFtOiBzdHJpbmcpID0+XG4gIEFycmF5LmlzQXJyYXkoY3JpdGVyaWEucXVlcnlbcGFyYW1dKVxuICAgID8gcmVuZGVySm9pbmVkQXJyYXlRdWVyeVBhcmFtcyhjcml0ZXJpYS5xdWVyeVtwYXJhbV0gYXMgYW55W10sIHBhcmFtLnN1YnN0cmluZygxKSlcbiAgICA6IHR5cGVvZiBjcml0ZXJpYS5xdWVyeVtwYXJhbV0gPT09ICdzdHJpbmcnXG4gICAgPyByZW5kZXJKb2luZWRBcnJheVF1ZXJ5UGFyYW1zKChjcml0ZXJpYS5xdWVyeVtwYXJhbV0gYXMgc3RyaW5nKS5zcGxpdCgnLCcpLCBwYXJhbS5zdWJzdHJpbmcoMSkpXG4gICAgOiBidWlsZFNpbXBsZVF1ZXJ5UGFyYW0oY3JpdGVyaWEsIHBhcmFtLnN1YnN0cmluZygxKSk7XG5cbmV4cG9ydCBjb25zdCBidWlsZFF1ZXJ5U3RyaW5nID0gKGNyaXRlcmlhOiBFbnRpdHlDcml0ZXJpYSk6IHN0cmluZyA9PlxuICBjcml0ZXJpYSAmJiBjcml0ZXJpYS5xdWVyeVxuICAgID8gT2JqZWN0LmtleXMoY3JpdGVyaWEucXVlcnkpXG4gICAgICAgIC5tYXAocGFyYW0gPT4gKHBhcmFtLnN0YXJ0c1dpdGgoJyYnKSA/IGJ1aWxkSm9pbmVkQXJyYXlRdWVyeVBhcmFtU2V0KGNyaXRlcmlhLCBwYXJhbSkgOiBidWlsZFNpbXBsZVF1ZXJ5UGFyYW0oY3JpdGVyaWEsIHBhcmFtKSkpXG4gICAgICAgIC5qb2luKCcmJylcbiAgICA6ICcnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRVcmwgPSAoaG9zdDogc3RyaW5nLCBpbmZvOiBJRW50aXR5SW5mbywgY3JpdGVyaWE/OiBFbnRpdHlDcml0ZXJpYSwga2V5OiBhbnkgPSBudWxsKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyZW50UGF0aHMgPSBidWlsZFBhcmVudFBhdGhzKGNyaXRlcmlhKTtcbiAgY29uc3QgZW50aXR5UGF0aCA9IGJ1aWxkRW50aXR5UGF0aChpbmZvLCBrZXksIGNyaXRlcmlhKTtcbiAgY29uc3QgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKGNyaXRlcmlhKTtcbiAgY29uc3QgdmVyc2lvbiA9IGNyaXRlcmlhPy52ZXJzaW9uID8gYC92JHtjcml0ZXJpYS52ZXJzaW9ufWAgOiAnJztcblxuICBjb25zdCB1cmwgPSBgJHtob3N0fSR7dmVyc2lvbn0ke3BhcmVudFBhdGhzfSR7ZW50aXR5UGF0aH0ke3F1ZXJ5ID8gYD8ke3F1ZXJ5fWAgOiAnJ31gO1xuXG4gIHJldHVybiB1cmw7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZVJldHJ5Q3JpdGVyaWEgPSA8VD4ob2JzOiBPYnNlcnZhYmxlPFQ+LCByZXRyeUNyaXRlcmlhOiBib29sZWFuIHwgUmV0cnlDcml0ZXJpYSwgZGVmYXVsdENyaXRlcmlhPzogUmV0cnlDcml0ZXJpYSkgPT5cbiAgcmV0cnlDcml0ZXJpYVxuICAgID8gdHlwZW9mIHJldHJ5Q3JpdGVyaWEgPT09ICdib29sZWFuJ1xuICAgICAgPyBvYnMucGlwZShyZXRyeSh7IGNvdW50OiBkZWZhdWx0Q3JpdGVyaWE/Lm1heFJldHJpZXMgfHwgMywgZGVsYXk6IGRlZmF1bHRDcml0ZXJpYT8uZGVsYXkgfHwgMTAwMCB9KSlcbiAgICAgIDogb2JzLnBpcGUoXG4gICAgICAgICAgcmV0cnkoe1xuICAgICAgICAgICAgY291bnQ6IHJldHJ5Q3JpdGVyaWEubWF4UmV0cmllcyB8fCBkZWZhdWx0Q3JpdGVyaWE/Lm1heFJldHJpZXMgfHwgMyxcbiAgICAgICAgICAgIGRlbGF5OiByZXRyeUNyaXRlcmlhLmRlbGF5IHx8IGRlZmF1bHRDcml0ZXJpYT8uZGVsYXkgfHwgMTAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICA6IG9icztcbiJdfQ==