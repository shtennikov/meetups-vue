import type { FilterOptions } from '@shared/types';

export const getQueries = (filters: FilterOptions) => {
    const { date, participation, search, view } = filters;

    const queries = {
        date: date !== 'all' && date.length ? date : undefined,
        participation: participation !== 'all' && participation.length ? participation : undefined,
        search: search.length ? search : undefined,
        view: view !== 'list' && view.length ? view : undefined,
    };

    return queries;
};
